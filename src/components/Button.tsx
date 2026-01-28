import { forwardRef } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'secondary' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
        const baseStyles = 'rounded-lg font-medium transition-all duration-200 cursor-pointer'

        const variants = {
            primary: 'bg-emerald-500 hover:bg-emerald-400 text-black',
            secondary: 'bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white',
            ghost: 'bg-transparent hover:bg-zinc-800 text-zinc-300',
        }

        const sizes = {
            sm: 'px-3 py-1.5 text-sm',
            md: 'px-4 py-2 text-sm',
            lg: 'px-6 py-3 text-base',
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
