import { Trash2, AlertTriangle } from 'lucide-react'

const Trash = () => {
    return (
        <div className="flex-1 overflow-y-auto p-6 md:px-8 md:py-6 custom-scrollbar pb-24">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                        <Trash2 className="w-5 h-5" />
                    </div>
                    <div>
                        <h2 className="text-lg font-medium text-white">Trash</h2>
                        <p className="text-sm text-zinc-500">Items are deleted forever after 30 days</p>
                    </div>
                </div>
                <button className="px-4 py-2 text-sm font-medium text-red-400 hover:bg-red-500/10 rounded-lg border border-red-500/20 transition-colors">
                    Empty Trash
                </button>
            </div>

            <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 flex items-start gap-3 mb-8">
                <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5" />
                <div>
                    <h4 className="text-sm font-medium text-white mb-1">Auto-deletion is on</h4>
                    <p className="text-xs text-zinc-400">Files in trash will be automatically removed after 30 days of inactivity.</p>
                </div>
            </div>

            {/* Placeholder for trash items */}
            <div className="text-center py-20">
                <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto mb-4">
                    <Trash2 className="w-8 h-8 text-zinc-600" />
                </div>
                <h3 className="text-white font-medium mb-2">Trash is empty</h3>
                <p className="text-zinc-500 text-sm max-w-xs mx-auto">
                    Items you delete will show up here.
                </p>
            </div>
        </div>
    )
}

export default Trash
