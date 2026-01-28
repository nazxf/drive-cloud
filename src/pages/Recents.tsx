import { Clock } from 'lucide-react'
import RecentFilesTable from '../components/RecentFilesTable'

const Recents = () => {
    return (
        <div className="flex-1 overflow-y-auto p-6 md:px-8 md:py-6 custom-scrollbar pb-24">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Clock className="w-5 h-5" />
                </div>
                <div>
                    <h2 className="text-lg font-medium text-white">Recent Files</h2>
                    <p className="text-sm text-zinc-500">Files you accessed recently</p>
                </div>
            </div>

            <RecentFilesTable />
        </div>
    )
}

export default Recents
