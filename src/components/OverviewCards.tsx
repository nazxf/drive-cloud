import { Image, Video, FileText, Package, TrendingUp } from 'lucide-react'

const OverviewCards = () => {
    const categories = [
        {
            label: 'Images',
            count: '154 items',
            size: '24 GB',
            percentage: 24,
            icon: Image,
            color: 'from-emerald-500 to-teal-500',
            bgColor: 'bg-emerald-500/10',
            textColor: 'text-emerald-400',
        },
        {
            label: 'Videos',
            count: '24 items',
            size: '32 GB',
            percentage: 32,
            icon: Video,
            color: 'from-blue-500 to-indigo-500',
            bgColor: 'bg-blue-500/10',
            textColor: 'text-blue-400',
        },
        {
            label: 'Documents',
            count: '232 items',
            size: '22 GB',
            percentage: 22,
            icon: FileText,
            color: 'from-amber-500 to-orange-500',
            bgColor: 'bg-amber-500/10',
            textColor: 'text-amber-400',
        },
        {
            label: 'Others',
            count: '154 items',
            size: '22 GB',
            percentage: 22,
            icon: Package,
            color: 'from-purple-500 to-pink-500',
            bgColor: 'bg-purple-500/10',
            textColor: 'text-purple-400',
        }
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {categories.map((item, index) => (
                <div
                    key={index}
                    className="bg-zinc-950 p-5 rounded-xl border border-zinc-800/50 hover:border-zinc-700 transition-all duration-300 group cursor-pointer"
                >
                    <div className="flex items-start justify-between mb-4">
                        <div className={`p-2.5 rounded-lg ${item.bgColor} border border-zinc-800/50`}>
                            <item.icon className={`w-5 h-5 ${item.textColor}`} />
                        </div>
                        <div className="flex items-center gap-1 text-xs text-emerald-400">
                            <TrendingUp className="w-3 h-3" />
                            <span>+12%</span>
                        </div>
                    </div>

                    <h3 className="text-white font-medium text-base mb-1">{item.label}</h3>
                    <p className="text-zinc-500 text-sm mb-4">{item.count}</p>

                    <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden mb-3">
                        <div
                            className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-500`}
                            style={{ width: `${item.percentage}%` }}
                        />
                    </div>

                    <div className="flex justify-between items-center text-xs text-zinc-500">
                        <span>{item.size} used</span>
                        <span>100 GB total</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default OverviewCards
