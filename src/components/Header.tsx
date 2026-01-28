import { Search, Upload, User } from 'lucide-react'
import { useStore } from '../store/useStore'
import Button from './Button'

const Header = () => {
    const { setUploadModalOpen } = useStore()

    return (
        <header className="bg-zinc-950/50 backdrop-blur-md border-b border-zinc-800/50 p-4">
            <div className="flex items-center justify-between gap-4">
                {/* Search Bar */}
                <div className="flex-1 max-w-xl">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                        <input
                            type="text"
                            placeholder="Search files and folders..."
                            className="
                                w-full pl-12 pr-4 py-2.5 rounded-lg
                                bg-zinc-900 border border-zinc-800
                                text-white placeholder:text-zinc-600
                                focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500/50
                                transition-all duration-200
                            "
                        />
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <Button
                        variant="primary"
                        onClick={() => setUploadModalOpen(true)}
                        className="flex items-center gap-2"
                    >
                        <Upload className="w-5 h-5" />
                        <span className="hidden sm:inline">Upload</span>
                    </Button>

                    <button className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 transition-all duration-200 cursor-pointer">
                        <User className="w-5 h-5 text-zinc-400" />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
