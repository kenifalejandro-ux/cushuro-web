// src/components/global/SEO.tsx
import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  image?: string;
  imageAlt?: string;
  type?: string;
  locale?: string;
  siteName?: string;
  schema?: object | object[];
  robots?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  url,
  image,
  imageAlt,
  type = "website",
  locale = "es_PE",
  siteName = "",
  schema,
  robots = "index, follow",
}) => {
  useEffect(() => {
    document.querySelectorAll("meta[data-dynamic]").forEach((el) => el.remove());
    document.querySelectorAll("script[data-schema]").forEach((el) => el.remove());
    document.querySelectorAll("link[data-dynamic]").forEach((el) => el.remove());

    document.title = title || " | Óxido de Calcio y Piedra Caliza";
    document.documentElement.lang = locale.replace("_", "-");

    const addMeta = (name: string, content: string, property = false) => {
      if (!content) return;

      const selector = property ? `meta[property='${name}']` : `meta[name='${name}']`;
      document.querySelectorAll(selector).forEach((el) => el.remove());

      const tag = document.createElement("meta");
      if (property) tag.setAttribute("property", name);
      else tag.setAttribute("name", name);
      tag.setAttribute("content", content);
      tag.setAttribute("data-dynamic", "true");
      document.head.appendChild(tag);
    };

    const addLink = (rel: string, href: string) => {
      if (!href) return;

      document.querySelectorAll(`link[rel='${rel}']`).forEach((el) => el.remove());

      const link = document.createElement("link");
      link.setAttribute("rel", rel);
      link.setAttribute("href", href);
      link.setAttribute("data-dynamic", "true");
      document.head.appendChild(link);
    };

    const addScript = (json: object) => {
      if (!json) return;
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(json);
      script.setAttribute("data-schema", "true");
      document.head.appendChild(script);
    };

    addMeta("description", description || "");
    addMeta("keywords", keywords || "");
    addMeta("robots", robots);
    addMeta("content-language", locale.replace("_", "-"));
    addLink("canonical", url || "");

    addMeta("og:title", title || "", true);
    addMeta("og:description", description || "", true);
    addMeta("og:image", image || "", true);
    addMeta("og:image:alt", imageAlt || "", true);
    addMeta("og:url", url || "", true);
    addMeta("og:type", type, true);
    addMeta("og:locale", locale, true);
    addMeta("og:site_name", siteName, true);

    addMeta("twitter:card", "summary_large_image");
    addMeta("twitter:title", title || "");
    addMeta("twitter:description", description || "");
    addMeta("twitter:image", image || "");
    addMeta("twitter:image:alt", imageAlt || "");

    if (schema) {
      const schemas = Array.isArray(schema) ? schema : [schema];
      schemas.forEach((obj) => addScript(obj));
    }

    return () => {
      document.querySelectorAll("meta[data-dynamic]").forEach((el) => el.remove());
      document.querySelectorAll("script[data-schema]").forEach((el) => el.remove());
      document.querySelectorAll("link[data-dynamic]").forEach((el) => el.remove());
    };
  }, [title, description, keywords, url, image, imageAlt, type, locale, siteName, schema, robots]);

  return null;
};

export default SEO;
