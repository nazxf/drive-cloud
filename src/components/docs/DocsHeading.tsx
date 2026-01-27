import { Hash } from 'lucide-react'
import { ReactNode } from 'react'

interface DocsHeadingProps {
    id?: string
    level?: 1 | 2 | 3 | 4
    children: ReactNode
    className?: string
}

const DocsHeading = ({ id, level = 2, children, className = '' }: DocsHeadingProps) => {
    // If no ID is provided, try to generate one from children if it's a string
    const generatedId = id || (typeof children === 'string'
        ? children.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
        : undefined)

    const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements

    return (
        <HeadingTag
            id={generatedId}
            className={`group relative flex items-center gap-2 scroll-mt-24 ${className}`}
        >
            <span className="relative">
                {children}
            </span>
            {generatedId && (
                <a
                    href={`#${generatedId}`}
                    className="opacity-0 group-hover:opacity-100 transition-opacity p-1 -ml-1 text-zinc-600 hover:text-white focus:opacity-100 focus:outline-none"
                    aria-label="Link to this section"
                    title="Link to this section"
                >
                    <Hash className="w-4 h-4" />
                </a>
            )}
        </HeadingTag>
    )
}

export default DocsHeading
