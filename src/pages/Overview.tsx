import OverviewCards from '../components/OverviewCards'
import RecentFilesTable from '../components/RecentFilesTable'

const Overview = () => {
    return (
        <div className="flex-1 overflow-y-auto p-6 md:px-8 md:py-6 custom-scrollbar pb-24">
            <div className="mb-8">
                <h2 className="text-lg font-medium text-white mb-1">Overview</h2>
                <p className="text-sm text-zinc-500">Your storage at a glance</p>
            </div>

            <OverviewCards />

            <RecentFilesTable />
        </div>
    )
}

export default Overview
