import { FileText, Image as ImageIcon, Video } from 'lucide-react'

// Mock Data
const recentFiles = [
    { id: 1, name: 'Toba Lake Proposal 2023.doc', size: '8.45 MB', shared: 'Me', modified: '23/03/2023 - 17:15', type: 'doc' },
    { id: 2, name: 'Explaination music mardua holong.pdf', size: '19.21 MB', shared: 'Me', modified: '24/03/2023 - 08:09', type: 'pdf' },
    { id: 3, name: 'Member of 2021.xls', size: '5.14 MB', shared: 'Team', modified: '25/03/2023 - 17:12', type: 'xls' },
    { id: 4, name: 'Invoice 2021.pdf', size: '10.66 MB', shared: 'Me', modified: '26/03/2023 - 09:18', type: 'pdf' },
    { id: 5, name: 'Furniture Catalog January.pdf', size: '28.11 MB', shared: 'Me', modified: '27/03/2023 - 16:21', type: 'pdf' },
]

const getFileIcon = (type: string) => {
    switch (type) {
        case 'doc': return <FileText className="w-4 h-4 text-blue-400" />
        case 'pdf': return <FileText className="w-4 h-4 text-red-400" />
        case 'xls': return <FileText className="w-4 h-4 text-green-400" />
        case 'image': return <ImageIcon className="w-4 h-4 text-purple-400" />
        case 'video': return <Video className="w-4 h-4 text-orange-400" />
        default: return <FileText className="w-4 h-4 text-slate-400" />
    }
}

const RecentFilesTable = () => {
    return (
        <div className="w-full">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-medium text-lg">Recent files</h3>
            </div>

            <div className="w-full overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="text-slate-500 text-xs border-b border-white/5">
                            <th className="py-3 px-4 font-medium w-1/2">Name</th>
                            <th className="py-3 px-4 font-medium">Size</th>
                            <th className="py-3 px-4 font-medium">Shared</th>
                            <th className="py-3 px-4 font-medium text-right">Last modified</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {recentFiles.map((file) => (
                            <tr key={file.id} className="group border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                <td className="py-3 px-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-4 h-4 rounded border border-slate-700 flex items-center justify-center cursor-pointer hover:border-[var(--accent-primary)]">
                                            {/* Checkbox placeholder */}
                                        </div>
                                        <div className="p-1.5 rounded bg-white/5 border border-white/5">
                                            {getFileIcon(file.type)}
                                        </div>
                                        <span className="text-slate-300 group-hover:text-white font-medium transition-colors">
                                            {file.name}
                                        </span>
                                    </div>
                                </td>
                                <td className="py-3 px-4 text-slate-400">{file.size}</td>
                                <td className="py-3 px-4">
                                    <div className="flex items-center gap-2">
                                        {file.shared === 'Team' ? <UsersIcon /> : <span className="text-slate-400">{file.shared}</span>}
                                    </div>
                                </td>
                                <td className="py-3 px-4 text-right text-slate-400">{file.modified}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const UsersIcon = () => (
    <div className="flex items-center gap-1 text-slate-400">
        <div className="w-4 h-4 rounded-full bg-[var(--accent-secondary)]/20 flex items-center justify-center text-[var(--accent-secondary)] text-[10px]">
            T
        </div>
        <span>Team</span>
    </div>
)

export default RecentFilesTable
