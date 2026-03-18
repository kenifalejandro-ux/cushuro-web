
/**client/src/components/ui/ReorderImageStack.tsx */

"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { OptimizedImage } from "./OptimizedImage";

interface ImageItem {
  src: string;
  alt: string;
  priority?: boolean;
}

interface Props {
  images: ImageItem[];
  interval?: number;
  layout?: "stacked" | "inline";
}

interface StackLayout {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  width: string;
  height: string;
  x?: string;
  zIndex: number;
}

const desktopLayouts: StackLayout[] = [
  {
    top: "0%",
    left: "0%",
    width: "60%",
    height: "70%",
    zIndex: 30,
  },
  {
    top: "15%",
    right: "0%",
    width: "45%",
    height: "65%",
    zIndex: 20,
  },
  {
    bottom: "0%",
    left: "20%",
    width: "55%",
    height: "60%",
    zIndex: 10,
  },
];

const mobileLayouts: StackLayout[] = [
  {
    top: "0%",
    left: "50%",
    x: "-50%",
    width: "76%",
    height: "80%",
    zIndex: 30,
  },
  {
    top: "16%",
    right: "6%",
    width: "70%",
    height: "72%",
    zIndex: 20,
  },
  {
    bottom: "0%",
    left: "6%",
    width: "66%",
    height: "66%",
    zIndex: 10,
  },
];

export default function ReorderImageStack({
  images,
  interval = 4000,
}: Props) {
  const [order, setOrder] = useState(images);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setOrder((prev) => {
        const newOrder = [...prev];
        const first = newOrder.shift();
        if (first) newOrder.push(first);
        return newOrder;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateViewport = () => setIsMobile(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  const activeLayouts = isMobile ? mobileLayouts : desktopLayouts;

  return (
    <div className="relative mx-auto h-[420px] w-full max-w-[360px] rounded-[32px] md:h-[650px] md:max-w-none">
      {order.map((image, index) => {
        const activeLayout = activeLayouts[index] ?? desktopLayouts[index];

        return (
          <motion.div
            key={image.src}
            animate={{
              ...activeLayout,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute"
          >
            <div className="relative h-full w-full overflow-hidden rounded-[32px]">
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 767px) 90vw, (max-width: 1024px) 80vw, 600px"
                priority={image.priority}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
