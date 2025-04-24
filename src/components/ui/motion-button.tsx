
import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import { ButtonProps, buttonVariants } from '@/components/ui/button'; // Import buttonVariants
import { cn } from '@/lib/utils';

// Combine ButtonProps and MotionProps
// Ensure HTML button attributes are included for compatibility
type MotionButtonProps = ButtonProps & MotionProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof MotionProps | keyof ButtonProps>;

const MotionButtonComponent = React.forwardRef<HTMLButtonElement, MotionButtonProps>(
  ({ children, className, variant, size, ...props }, ref) => {
    return (
      // Use motion.button and apply Shadcn styles via buttonVariants
      <motion.button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))} // Apply variants
        {...props} // Pass motion and remaining button props
      >
        {children}
      </motion.button>
    );
  }
);

MotionButtonComponent.displayName = 'MotionButton';

export const MotionButton = MotionButtonComponent;