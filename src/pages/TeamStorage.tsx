import { Users, FolderOpen } from 'lucide-react'
import { useParams } from 'react-router-dom'

const TeamStorage = () => {
    const { teamId } = useParams()
    const teamName = teamId === 'civic' ? 'Civic Team' : 'Developer Team'

    return (
        <div className="flex-1 overflow-y-auto p-6 md:px-8 md:py-6 custom-scrollbar pb-24">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                        <Users className="w-5 h-5" />
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-white">{teamName}</h2>
                        <p className="text-sm text-slate-400">Shared team workspace</p>
                    </div>
                </div>
                <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-[var(--bg-deep)] bg-slate-700 flex items-center justify-center text-xs font-medium text-white">
                            U{i}
                        </div>
                    ))}
                    <button className="w-8 h-8 rounded-full border-2 border-[var(--bg-deep)] bg-white/10 flex items-center justify-center text-xs font-medium text-white hover:bg-white/20 transition-colors">
                        +3
                    </button>
                </div>
            </div>

            <div className="text-center py-20">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                    <FolderOpen className="w-8 h-8 text-slate-600" />
                </div>
                <h3 className="text-white font-medium mb-2">Empty Workspace</h3>
                <p className="text-slate-500 text-sm max-w-xs mx-auto">
                    Start by dragging files here or creating a new folder to share with the team.
                </p>
            </div>
        </div>
    )
}

export default TeamStorage
