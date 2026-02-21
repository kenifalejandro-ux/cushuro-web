// VideoPreview.tsx
"use client";

import { forwardRef, useEffect, useState } from "react";
import { OptimizedVideo } from "./OptimizedVideo";

interface Props extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
  deferOnMobileScroll?: boolean;
  placeholderClassName?: string;
  useInternalOpacity?: boolean;
}

export const VideoPreview = forwardRef<HTMLVideoElement, Props>(
  function VideoPreview(
    {
      src,
      poster,
      className,
      deferOnMobileScroll = true,
      placeholderClassName = "bg-black/20",
      useInternalOpacity = true,
      ...props
    },
    ref
  ) {
    const isCoarsePointer =
      typeof window !== "undefined" &&
      "matchMedia" in window &&
      window.matchMedia("(pointer: coarse)").matches;
    const shouldDefer = deferOnMobileScroll && isCoarsePointer;
    const [canShowVideo, setCanShowVideo] = useState<boolean>(
      () => !shouldDefer
    );

    useEffect(() => {
      if (!shouldDefer || canShowVideo) return;
      const onFirstScroll = () => setCanShowVideo(true);
      window.addEventListener("scroll", onFirstScroll, {
        passive: true,
        once: true,
      });
      return () => window.removeEventListener("scroll", onFirstScroll);
    }, [shouldDefer, canShowVideo]);

    const classNameSafe = className ?? "";
    const needsAbsoluteWrapper = /\b(absolute|fixed|sticky)\b/.test(
      classNameSafe
    );
    const wrapperClassName = `${needsAbsoluteWrapper ? "absolute inset-0" : "relative"} w-full h-full`;
    const internalOpacityClass = !canShowVideo
      ? "opacity-0"
      : useInternalOpacity
        ? "opacity-100"
        : "";
    const internalTransitionClass =
      !canShowVideo || useInternalOpacity
        ? "transition-opacity duration-300"
        : "";
    const combinedClassName = `${classNameSafe} ${internalOpacityClass} ${internalTransitionClass}`.trim();

    return (
      <div className={wrapperClassName}>
        {!canShowVideo && (
          <div
            className={`absolute inset-0 ${placeholderClassName}`}
            aria-hidden
          />
        )}
        <OptimizedVideo
          ref={ref}
          src={src}
          poster={canShowVideo ? poster : undefined}
          className={combinedClassName}
          {...props}
        />
      </div>
    );
  }
);

VideoPreview.displayName = "VideoPreview";
