import { useState, useRef, useEffect, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'

interface DropdownMenuProps {
    trigger: ReactNode
    children: ReactNode
    align?: 'left' | 'right'
}

export const DropdownMenu = ({ trigger, children, align = 'right' }: DropdownMenuProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const triggerRef = useRef<HTMLDivElement>(null)
    const [position, setPosition] = useState({ top: 0, left: 0 })

    // Handle click outside to close
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (triggerRef.current && !triggerRef.current.contains(event.target as Node)) {
                // Check if click is inside the dropdown content (portal)
                const dropdown = document.getElementById('dropdown-content')
                if (dropdown && dropdown.contains(event.target as Node)) return
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    // Calculate position
    useEffect(() => {
        if (isOpen && triggerRef.current) {
            const rect = triggerRef.current.getBoundingClientRect()
            setPosition({
                top: rect.bottom + window.scrollY + 8,
                left: align === 'right'
                    ? rect.right + window.scrollX
                    : rect.left + window.scrollX
            })
        }
    }, [isOpen, align])

    return (
        <div className="relative inline-block" ref={triggerRef}>
            <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>

            {createPortal(
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            id="dropdown-content"
                            initial={{ opacity: 0, scale: 0.95, y: -10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -10 }}
                            transition={{ duration: 0.15, ease: 'easeOut' }}
                            style={{
                                top: position.top,
                                left: align === 'right' ? undefined : position.left,
                                right: align === 'right' ? window.innerWidth - position.left : undefined,
                            }}
                            className="fixed z-50 min-w-[8rem] overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950 p-1 text-zinc-200 shadow-xl"
                        >
                            {children}
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </div>
    )
}

export const DropdownMenuItem = ({ children, onClick, className = '' }: { children: ReactNode, onClick?: () => void, className?: string }) => {
    return (
        <div
            onClick={(e) => {
                e.stopPropagation()
                onClick?.()
            }}
            className={`relative flex cursor-pointer select-none items-center rounded-md px-2 py-1.5 text-sm outline-none transition-colors hover:bg-zinc-800 hover:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ${className}`}
        >
            {children}
        </div>
    )
}

export const DropdownMenuLabel = ({ children }: { children: ReactNode }) => (
    <div className="px-2 py-1.5 text-sm font-medium text-zinc-500">
        {children}
    </div>
)

export const DropdownMenuSeparator = () => (
    <div className="-mx-1 my-1 h-px bg-zinc-800" />
)
