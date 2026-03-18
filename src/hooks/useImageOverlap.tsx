// src/hooks/useImageOverlap.ts
import { useEffect, useRef, useCallback, useState } from "react";

type UseImageOverlapOptions = {
  targetElementId: string;
  debounceDelay?: number;
};

type OverlapState = {
  isDarkOverlapping: boolean;
  isLightOverlapping: boolean;
};

export function useImageOverlap({
  targetElementId,
  debounceDelay = 10,
}: UseImageOverlapOptions): OverlapState {
  const [overlapState, setOverlapState] = useState<OverlapState>({
    isDarkOverlapping: false,
    isLightOverlapping: false,
  });

  const debounceRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  const getThemeFromNode = useCallback((node: Element | null): "dark" | "light" | null => {
    let current = node instanceof HTMLElement ? node : null;

    while (current && current !== document.body) {
      if (current.classList.contains("light-image")) {
        return "light";
      }

      if (current.classList.contains("dark-image")) {
        return "dark";
      }

      current = current.parentElement;
    }

    return null;
  }, []);

  const getThemeAtPoint = useCallback(
    (target: HTMLElement, x: number, y: number): "dark" | "light" | null => {
      const stack = document.elementsFromPoint(x, y);

      for (const node of stack) {
        if (node === target || target.contains(node)) {
          continue;
        }

        const theme = getThemeFromNode(node);
        if (theme) {
          return theme;
        }
      }

      return null;
    },
    [getThemeFromNode]
  );

  const getOverlapState = useCallback((): OverlapState => {
    const target = document.getElementById(targetElementId);
    if (!target) {
      return { isDarkOverlapping: false, isLightOverlapping: false };
    }

    const targetRect = target.getBoundingClientRect();
    const sampleY = Math.min(
      Math.max(targetRect.top + targetRect.height / 2, 0),
      window.innerHeight - 1
    );
    const samplePoints = [
      targetRect.left + targetRect.width * 0.2,
      targetRect.left + targetRect.width * 0.5,
      targetRect.left + targetRect.width * 0.8,
    ]
      .map((point) => Math.min(Math.max(point, 0), window.innerWidth - 1))
      .filter((point, index, all) => all.indexOf(point) === index);

    const themes = samplePoints.map((x) => getThemeAtPoint(target, x, sampleY));
    const centerTheme = themes[Math.floor(themes.length / 2)] ?? null;
    const lightCount = themes.filter((theme) => theme === "light").length;
    const darkCount = themes.filter((theme) => theme === "dark").length;

    const resolvedTheme =
      centerTheme ??
      (lightCount > darkCount ? "light" : darkCount > lightCount ? "dark" : themes.find(Boolean) ?? null);

    return {
      isDarkOverlapping: resolvedTheme === "dark",
      isLightOverlapping: resolvedTheme === "light",
    };
  }, [getThemeAtPoint, targetElementId]);

  const runMeasure = useCallback(() => {
    const newState = getOverlapState();
    setOverlapState(newState);
  }, [getOverlapState]);

  const scheduleMeasure = useCallback(() => {
    if (debounceDelay > 0) {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
      debounceRef.current = window.setTimeout(() => {
        if (rafRef.current !== null) return;
        rafRef.current = window.requestAnimationFrame(() => {
          rafRef.current = null;
          runMeasure();
        });
      }, debounceDelay);
      return;
    }

    if (rafRef.current !== null) return;
    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = null;
      runMeasure();
    });
  }, [debounceDelay, runMeasure]);

  useEffect(() => {
    scheduleMeasure();

    const handleScroll = () => {
      scheduleMeasure();
    };

    const handleResize = () => {
      scheduleMeasure();
    };

    const observer = new MutationObserver(() => {
      scheduleMeasure();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class"],
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();

      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [scheduleMeasure]);

  return overlapState;
}
