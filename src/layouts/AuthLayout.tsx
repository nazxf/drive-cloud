import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface AuthLayoutProps {
    children: ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white font-sans antialiased flex flex-col relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[120px]" />
            </div>

            {/* Navigation */}
            <nav className="relative z-10 border-b border-zinc-800/50">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2.5">
                        <img src="/logo.png" alt="TeraCloud" className="w-8 h-8" />
                        <span className="font-semibold text-lg">TeraCloud</span>
                    </Link>
                    <Link to="/" className="text-sm text-zinc-400 hover:text-white transition-colors">
                        ← Back to home
                    </Link>
                </div>
            </nav>

            {/* Content */}
            <div className="flex-1 flex items-center justify-center p-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full max-w-md"
                >
                    <div className="bg-zinc-950/50 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-8">
                        {children}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default AuthLayout
