import { Star } from 'lucide-react'


const Favorites = () => {
    return (
        <div className="flex-1 overflow-y-auto p-6 md:px-8 md:py-6 custom-scrollbar pb-24">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-500">
                    <Star className="w-5 h-5" />
                </div>
                <div>
                    <h2 className="text-xl font-semibold text-white">Favorites</h2>
                    <p className="text-sm text-slate-400">Your curated collection</p>
                </div>
            </div>

            <div className="text-center py-20">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-slate-600" />
                </div>
                <h3 className="text-white font-medium mb-2">No favorites yet</h3>
                <p className="text-slate-500 text-sm max-w-xs mx-auto">
                    Mark files as favorites to access them quickly from this page.
                </p>
            </div>
        </div>
    )
}

export default Favorites
