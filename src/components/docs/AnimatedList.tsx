import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedListProps {
    children: ReactNode[]
    className?: string
    delay?: number
    staggerDelay?: number
}

interface AnimatedListItemProps {
    children: ReactNode
    className?: string
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: (custom: { delay: number; staggerDelay: number }) => ({
        opacity: 1,
        transition: {
            delayChildren: custom.delay,
            staggerChildren: custom.staggerDelay
        }
    })
}

const itemVariants = {
    hidden: {
        opacity: 0,
        x: -10,
        filter: 'blur(4px)'
    },
    visible: {
        opacity: 1,
        x: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.4,
            ease: [0.25, 0.4, 0.25, 1]
        }
    }
}

export const AnimatedList = ({
    children,
    className = '',
    delay = 0.1,
    staggerDelay = 0.08
}: AnimatedListProps) => {
    return (
        <motion.ul
            className={`space-y-3 ${className}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            custom={{ delay, staggerDelay }}
        >
            {children}
        </motion.ul>
    )
}

export const AnimatedListItem = ({ children, className = '' }: AnimatedListItemProps) => {
    return (
        <motion.li
            variants={itemVariants}
            className={`flex items-start gap-3 text-zinc-400 ${className}`}
        >
            <span className="inline-flex items-center justify-center w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r from-white/60 to-white/30 flex-shrink-0" />
            <span>{children}</span>
        </motion.li>
    )
}

// Alternative: Animated checklist item with checkmark
export const AnimatedCheckItem = ({ children, className = '' }: AnimatedListItemProps) => {
    return (
        <motion.li
            variants={itemVariants}
            className={`flex items-start gap-3 text-zinc-400 group ${className}`}
        >
            <span className="inline-flex items-center justify-center w-5 h-5 mt-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex-shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                    />
                </svg>
            </span>
            <span className="group-hover:text-zinc-300 transition-colors">{children}</span>
        </motion.li>
    )
}

export default AnimatedList
