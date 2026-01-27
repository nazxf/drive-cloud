import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PagerItem {
    title: string
    href: string
}

interface DocsPagerProps {
    prev?: PagerItem
    next?: PagerItem
}

const DocsPager = ({ prev, next }: DocsPagerProps) => {
    return (
        <div className="flex flex-col sm:flex-row justify-between gap-4 pt-10 mt-16 border-t border-white/5">
            {prev ? (
                <a href={prev.href} className="group flex flex-col items-start gap-1 p-4 rounded-lg border border-white/5 hover:border-white/10 hover:bg-white/[0.02] transition-all w-full sm:w-1/2">
                    <div className="flex items-center gap-1 text-xs text-zinc-500 group-hover:text-zinc-400">
                        <ChevronLeft className="w-3 h-3" />
                        Previous
                    </div>
                    <span className="font-medium text-white group-hover:text-[var(--accent-primary)] transition-colors">
                        {prev.title}
                    </span>
                </a>
            ) : <div className="hidden sm:block w-1/2" />}

            {next ? (
                <a href={next.href} className="group flex flex-col items-end gap-1 p-4 rounded-lg border border-white/5 hover:border-white/10 hover:bg-white/[0.02] transition-all w-full sm:w-1/2 text-right">
                    <div className="flex items-center gap-1 text-xs text-zinc-500 group-hover:text-zinc-400">
                        Next
                        <ChevronRight className="w-3 h-3" />
                    </div>
                    <span className="font-medium text-white group-hover:text-[var(--accent-primary)] transition-colors">
                        {next.title}
                    </span>
                </a>
            ) : <div className="hidden sm:block w-1/2" />}
        </div>
    )
}

export default DocsPager
