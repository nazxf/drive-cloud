import { Menu } from 'lucide-react'

interface DocsMobileHeaderProps {
    onOpenSidebar: () => void
}

const DocsMobileHeader = ({ onOpenSidebar }: DocsMobileHeaderProps) => {
    return (
        <header className="sticky top-0 z-40 w-full border-b border-white/5 bg-[var(--bg-deep)]/80 backdrop-blur-lg lg:hidden">
            <div className="flex h-14 items-center gap-4 px-6">
                <button
                    onClick={onOpenSidebar}
                    className="text-zinc-400 hover:text-white transition-colors p-1 -ml-1 rounded-md hover:bg-white/5"
                    aria-label="Open menu"
                >
                    <Menu className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-2">
                    <img src="/logo.png" alt="TeraCloud" className="w-6 h-6 rounded-md" />
                    <span className="font-bold text-white tracking-tight">TeraCloud Docs</span>
                </div>
            </div>
        </header>
    )
}

export default DocsMobileHeader
