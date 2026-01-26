import { forwardRef } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'secondary' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
        const baseStyles = 'rounded-xl font-medium transition-all duration-200 cursor-pointer'

        const variants = {
            primary: 'bg-accent hover:bg-accent-light text-primary-950',
            secondary: 'glass hover:bg-primary-700 text-primary-50',
            ghost: 'bg-transparent hover:bg-primary-800 text-primary-300',
        }

        const sizes = {
            sm: 'px-4 py-2 text-sm',
            md: 'px-6 py-3 text-base',
            lg: 'px-8 py-4 text-lg',
        }

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
                {...props}
            >
                {children}
            </motion.button>
        )
    }
)

Button.displayName = 'Button'

export default Button
