import { motion } from 'framer-motion';
import React from 'react';

import { cn } from '../../lib/utils';

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      borderColor: '#00ccb1'
    },
    animate: {
      borderColor: ['#00ccb1', '#7b61ff', '#ffc414', '#1ca0fb', '#00ccb1']
    }
  };

  return (
    <div className={cn('relative group', containerClassName)}>
      <motion.div
        className={cn(
          'absolute inset-0 border-2 rounded-3xl z-[1] opacity-60 group-hover:opacity-100',
          'transition duration-300'
        )}
        variants={animate ? variants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse'
              }
            : undefined
        }
      />
      <div
        className={cn(
          'absolute inset-0 rounded-3xl z-[0] bg-[radial-gradient(circle_at_center,#1a1a1a,#000)] opacity-90'
        )}
      />

      <div className={cn('relative z-10 text-gray-200', className)}>
        {children}
      </div>
    </div>
  );
};
