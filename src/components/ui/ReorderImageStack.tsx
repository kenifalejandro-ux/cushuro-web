
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

const layouts = [
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

export default function ReorderImageStack({
  images,
  interval = 4000,
  layout = "stacked",
}: Props) {
  const [order, setOrder] = useState(images);

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

  return (
    <div className="relative w-full h-[650px]">
      {order.map((image, index) => {
        const layout = layouts[index];

        return (
          <motion.div
            key={image.src}
            animate={{
              ...layout,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute"
          >
            <div className="relative w-full h-full overflow-hidden  ">
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 80vw, 600px"
                priority={image.priority} 
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}