import { Image, Video, FileText, Package } from 'lucide-react'

const OverviewCards = () => {
    const categories = [
        {
            label: 'Image',
            count: '154 items',
            size: '24 GB',
            percentage: 24,
            icon: Image,
        },
        {
            label: 'Video',
            count: '24 items',
            size: '32 GB',
            percentage: 32,
            icon: Video,
        },
        {
            label: 'Document',
            count: '232 items',
            size: '22 GB',
            percentage: 22,
            icon: FileText,
        },
        {
            label: 'Others',
            count: '154 items',
            size: '22 GB',
            percentage: 22,
            icon: Package,
        }
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {categories.map((item, index) => (
                <div key={index} className="bg-[var(--bg-card)] p-5 rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-4">
                        <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
                            <item.icon className="w-5 h-5 text-[var(--accent-primary)] opacity-80 group-hover:opacity-100 transition-opacity" />
                        </div>
                    </div>

                    <h3 className="text-[var(--accent-primary)] font-medium text-sm mb-1">{item.label}</h3>
                    <p className="text-zinc-500 text-xs mb-4">{item.count}</p>

                    <div className="h-1 bg-white/5 rounded-full overflow-hidden mb-2">
                        <div
                            className="h-full bg-white rounded-full opacity-60 group-hover:opacity-90 transition-opacity"
                            style={{ width: `${item.percentage}%` }}
                        />
                    </div>

                    <div className="flex justify-between items-center text-[10px] text-zinc-500">
                        <span>{item.size}</span>
                        <span>100 GB</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default OverviewCards
