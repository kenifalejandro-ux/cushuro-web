/**client/src/components/global/contactanos.ts */

declare const grecaptcha: any;

function toPhpApiPath(pathname: string) {
  if (!pathname.startsWith("/api/") || pathname.endsWith(".php")) {
    return pathname;
  }

  return `${pathname}.php`;
}

function getApiCandidates(pathname: string) {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const phpPath = toPhpApiPath(normalizedPath);

  if (typeof window === "undefined") {
    return [...new Set([normalizedPath, phpPath])];
  }

  const { protocol, hostname, origin } = window.location;
  const candidates = [
    `${origin}${normalizedPath}`,
    normalizedPath,
    `${origin}${phpPath}`,
    phpPath,
    `${protocol}//${hostname}:3000${normalizedPath}`,
  ];

  if (hostname !== "localhost" && hostname !== "127.0.0.1") {
    candidates.push(`http://localhost:3000${normalizedPath}`);
  }

  return [...new Set(candidates)];
}

async function fetchFromApi(pathname: string, init?: RequestInit) {
  const candidates = getApiCandidates(pathname);
  let lastError: Error | null = null;

  for (const url of candidates) {
    try {
      const response = await fetch(url, init);
      const contentType = response.headers.get("content-type") || "";
      const looksLikeHtml =
        contentType.includes("text/html") ||
        contentType.includes("application/xhtml+xml");
      const isRetryableProxyFailure =
        pathname.startsWith("/api/") &&
        !response.ok &&
        response.status >= 500 &&
        !contentType.includes("application/json");

      // During local Vite dev, unknown `/api/*` routes often fall back to index.html.
      // If that happens, keep trying the next API candidate instead of returning HTML.
      if ((pathname.startsWith("/api/") && looksLikeHtml) || isRetryableProxyFailure) {
        lastError = new Error(`El endpoint ${url} no devolvio una respuesta valida de la API.`);
        continue;
      }

      return response;
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(`No se pudo conectar a ${url}`);
    }
  }

  throw lastError ?? new Error("No se pudo conectar con el backend.");
}

function ensureRecaptchaScript(siteKey: string) {
  return new Promise<void>((resolve, reject) => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      reject(new Error("El navegador no está disponible para cargar reCAPTCHA."));
      return;
    }

    if (typeof (window as any).grecaptcha !== "undefined") {
      resolve();
      return;
    }

    const scriptSrc = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`;
    const existing = document.querySelector(`script[src="${scriptSrc}"]`) as HTMLScriptElement | null;

    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("No se pudo cargar reCAPTCHA.")), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("No se pudo cargar reCAPTCHA."));
    document.head.appendChild(script);
  });
}




// Inicializar el formulario con reCAPTCHA
function initForm() {
  const formulario = document.getElementById("contactForm") as HTMLFormElement | null;
  const clearButton = document.getElementById("clear-form") as HTMLButtonElement | null;
  const mensaje = document.getElementById("mensaje") as HTMLDivElement | null;
  const recaptchaInput = document.getElementById("recaptcha_token") as HTMLInputElement | null;
  const submitButton = formulario?.querySelector('button[type="submit"]') as HTMLButtonElement | null;

  if (!formulario) {
    return () => {};
  }

  const setMessage = (text: string, type: "error" | "success" = "error") => {
    if (!mensaje) return;
    mensaje.textContent = text;
    mensaje.dataset.state = type;
    mensaje.classList.remove("hidden");
  };

  const clearMessage = () => {
    if (!mensaje) return;
    mensaje.textContent = "";
    mensaje.classList.add("hidden");
    delete mensaje.dataset.state;
  };

  const setSubmitting = (isSubmitting: boolean) => {
    if (!submitButton) return;
    submitButton.disabled = isSubmitting;
    submitButton.textContent = isSubmitting ? "Enviando..." : "Enviar";
  };

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    clearMessage();
    setSubmitting(true);

    try {
      const siteKeyResponse = await fetchFromApi("/api/recaptcha-site-key");
      const siteKeyContentType = siteKeyResponse.headers.get("content-type") || "";

      if (!siteKeyResponse.ok) {
        if (siteKeyContentType.includes("application/json")) {
          const errorData = await siteKeyResponse.json().catch(() => null);
          throw new Error(
            errorData?.message || "No se pudo obtener la clave de reCAPTCHA."
          );
        }

        const errorText = await siteKeyResponse.text();
        throw new Error(
          errorText ||
            "No se pudo obtener la clave de reCAPTCHA. Verifica que el backend este corriendo en http://localhost:3000."
        );
      }

      if (!siteKeyContentType.includes("application/json")) {
        throw new Error("La API de reCAPTCHA no respondio JSON.");
      }

      const { siteKey } = await siteKeyResponse.json();

      if (!siteKey) {
        throw new Error("La clave de reCAPTCHA no esta configurada.");
      }

      await ensureRecaptchaScript(siteKey);

      const token = await new Promise<string>((resolve, reject) => {
        grecaptcha.ready(function () {
          grecaptcha
            .execute(siteKey, { action: "submit" })
            .then(resolve)
            .catch(reject);
        });
      });
     console.log("TOKEN:", token); // 👈 AQUÍ
     
      if (recaptchaInput) {
        recaptchaInput.value = token;
      }

      const formData = new FormData(formulario);
      const payload = Object.fromEntries(formData.entries());

      const submitResponse = await fetchFromApi("/api/formulario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!submitResponse.ok) {
        const contentType = submitResponse.headers.get("content-type") || "";
        if (contentType.includes("application/json")) {
          const errorData = await submitResponse.json();
          const firstError = errorData?.errors?.[0]?.message;
          throw new Error(firstError || "No se pudo enviar el formulario.");
        }

        const errorText = await submitResponse.text();
        throw new Error(errorText || "No se pudo enviar el formulario.");
      }

      const submitContentType = submitResponse.headers.get("content-type") || "";
      if (!submitContentType.includes("application/json")) {
        const responseText = await submitResponse.text();
        throw new Error(responseText || "La API del formulario no respondio JSON.");
      }

      const result = await submitResponse.json();
      sessionStorage.setItem("prevPage", window.location.pathname);
      window.location.assign(result.redirectTo || "/formulario");
    } catch (error) {
      console.error("Error enviando formulario:", error);
      setMessage(
        error instanceof Error
          ? error.message
          : "Ocurrió un error al enviar el formulario o conectar con el backend.",
        "error"
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleClear = () => {
    formulario.reset();
    if (recaptchaInput) {
      recaptchaInput.value = "";
    }
    clearMessage();
  };

  formulario.addEventListener("submit", handleSubmit);
  clearButton?.addEventListener("click", handleClear);

  return () => {
    formulario.removeEventListener("submit", handleSubmit);
    clearButton?.removeEventListener("click", handleClear);
  };
}

// Inicialización para React (sin alterar la lógica interna)
export function initContactanosPage() {
  if (typeof window === "undefined") {
    return () => {};
  }

  const cleanupForm = initForm();

  const cleanup = () => {
    cleanupForm();
  };

  const handleUnload = () => cleanup();
  window.addEventListener("unload", handleUnload);

  return () => {
    window.removeEventListener("unload", handleUnload);
    cleanup();
  };
}
