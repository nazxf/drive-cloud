import { useOutletContext } from 'react-router-dom'
import FolderCard from '../components/FolderCard'
import OverviewCards from '../components/OverviewCards'
import RecentFilesTable from '../components/RecentFilesTable'
import { mockFolders } from '../services/mockData'

interface DashboardContext {
    searchQuery: string
}

const Overview = () => {
    const { searchQuery } = useOutletContext<DashboardContext>()

    const filteredFolders = mockFolders.filter(folder =>
        folder.name.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div className="flex-1 overflow-y-auto p-6 md:px-8 md:py-6 custom-scrollbar pb-24">
            {/* 1. Overview Cards */}
            <OverviewCards />

            {/* 2. Suggested / Folders */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-medium text-lg">Suggested</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredFolders.map((folder) => (
                        <FolderCard key={folder.id} folder={folder} viewMode="grid" />
                    ))}
                    {filteredFolders.length === 0 && (
                        <div className="col-span-full py-8 text-center text-slate-500 text-sm">
                            No folders found matching "{searchQuery}"
                        </div>
                    )}
                </div>
            </div>

            {/* 3. Recent Files Table */}
            <div className="pb-10">
                <RecentFilesTable />
            </div>
        </div>
    )
}

export default Overview
