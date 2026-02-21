import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface TooltipProps {
  content: string;
  active: boolean;
  showHand?: boolean;
  handPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  active,
  showHand = true,
  handPosition = 'bottom-right'
}) => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, []);

  const handPositionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4'
  };

  return (
    <>
      <AnimatePresence>
        {showHand && !active && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.3,
              y: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
            }}
            className={`fixed ${handPositionClasses[handPosition]} z-40 pointer-events-none`}
          >
            <span className="text-4xl">👆</span>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && (
         <motion.div
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.5 }}
  transition={{ duration: 0.15 }}
  style={{
    position: 'fixed',
    left: mouse.x + 1,
    top: mouse.y,
    pointerEvents: 'none'
  }}
  className="z-50 px-4 py-2 bg-black text-white rounded-lg shadow-lg whitespace-nowrap"
>
  {content}
</motion.div>

        )}
      </AnimatePresence>
    </>
  );
};
