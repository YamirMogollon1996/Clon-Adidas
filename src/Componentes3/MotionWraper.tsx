import React, { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";


interface ComponentProps {
  children?: ReactNode;
  inital: Record<string, any>;
  animate?: Record<string, any>;
  transition?: Record<string, any>;
}


export const MotionWrapper: React.FC<ComponentProps> = ({
  children,
  inital,
  animate,
  transition,
}: ComponentProps) => {
  const ref = useRef<HTMLInputElement  | null> (null);
  const isInView = useInView(ref, { threshold: 0.2 }); // Detecta si está en el viewport con un umbral del 10%

  // console.log( isInView)
  return (
    <motion.div
      ref={ref}
      initial={inital} // Estado inicial
      animate={
        isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, y: 20 }
      }
      transition={transition} // Transición suave
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
