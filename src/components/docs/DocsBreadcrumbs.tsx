import { ChevronRight } from 'lucide-react'

interface DocsBreadcrumbsProps {
    items: string[]
}

const DocsBreadcrumbs = ({ items }: DocsBreadcrumbsProps) => {
    return (
        <div className="flex items-center gap-2 text-xs text-zinc-500 mb-8 font-mono overflow-x-auto whitespace-nowrap pb-2">
            <span>Docs</span>
            {items.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                    <ChevronRight className="w-3 h-3 text-zinc-700" />
                    <span className={index === items.length - 1 ? "text-white" : "text-zinc-500"}>
                        {item}
                    </span>
                </div>
            ))}
        </div>
    )
}

export default DocsBreadcrumbs
