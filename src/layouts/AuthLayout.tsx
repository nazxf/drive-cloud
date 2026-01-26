import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface AuthLayoutProps {
    children: ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <div className="min-h-screen bg-black text-white font-sans antialiased flex flex-col">
            {/* Navigation */}
            <nav className="border-b border-zinc-900">
                <div className="max-w-6xl mx-auto px-6 h-14 flex items-center">
                    <Link to="/" className="flex items-center gap-2">
                        <img src="/logo.png" alt="TeraCloud" className="w-7 h-7" />
                        <span className="font-semibold">TeraCloud</span>
                    </Link>
                </div>
            </nav>

            {/* Content */}
            <div className="flex-1 flex items-center justify-center p-6">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full max-w-sm"
                >
                    {children}
                </motion.div>
            </div>
        </div>
    )
}

export default AuthLayout
