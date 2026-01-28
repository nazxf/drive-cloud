import { Star } from 'lucide-react'

const Favorites = () => {
    return (
        <div className="flex-1 overflow-y-auto p-6 md:px-8 md:py-6 custom-scrollbar pb-24">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <Star className="w-5 h-5" />
                </div>
                <div>
                    <h2 className="text-lg font-medium text-white">Favorites</h2>
                    <p className="text-sm text-zinc-500">Your curated collection</p>
                </div>
            </div>

            <div className="text-center py-20">
                <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-zinc-600" />
                </div>
                <h3 className="text-white font-medium mb-2">No favorites yet</h3>
                <p className="text-zinc-500 text-sm max-w-xs mx-auto">
                    Mark files as favorites to access them quickly from this page.
                </p>
            </div>
        </div>
    )
}

export default Favorites
