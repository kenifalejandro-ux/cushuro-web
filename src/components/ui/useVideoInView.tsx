/**client/src/components/ui/useVideoInView.tsx */
//reproducción automatica dentro del viewport

import { useEffect, RefObject, useRef } from "react";

type VideoInViewOptions = IntersectionObserverInit & {
  requireScrollToPlay?: boolean;
};

export function useVideoInView(
  videoRef: RefObject<HTMLVideoElement | null>,
  options: VideoInViewOptions = { threshold: 0.5 }
) {
  const hasUserScrolledRef = useRef(false);
  const isInViewRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const { requireScrollToPlay, ...observerOptions } = options;
    const isCoarsePointer =
      typeof window !== "undefined" &&
      "matchMedia" in window &&
      window.matchMedia("(pointer: coarse)").matches;
    const shouldRequireScroll =
      typeof requireScrollToPlay === "boolean"
        ? requireScrollToPlay
        : isCoarsePointer;

    hasUserScrolledRef.current = !shouldRequireScroll;

    const playIfAllowed = () => {
      if (!hasUserScrolledRef.current) return;
      video.play().catch(() => {});
    };

    const observer = new IntersectionObserver(([entry]) => {
      isInViewRef.current = entry.isIntersecting;
      if (entry.isIntersecting) {
        playIfAllowed();
      } else {
        video.pause();
      }
    }, observerOptions);

    observer.observe(video);

    let removeScrollListener: (() => void) | null = null;
    if (shouldRequireScroll) {
      const onFirstScroll = () => {
        hasUserScrolledRef.current = true;
        if (isInViewRef.current) {
          playIfAllowed();
        }
      };
      window.addEventListener("scroll", onFirstScroll, {
        passive: true,
        once: true,
      });
      removeScrollListener = () =>
        window.removeEventListener("scroll", onFirstScroll);
    }

    return () => {
      removeScrollListener?.();
      observer.disconnect();
    };
  }, [videoRef, options, hasUserScrolledRef, isInViewRef]);
}
