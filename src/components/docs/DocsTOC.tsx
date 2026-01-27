import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

// Define TOC items for each page
const tocData: Record<string, { title: string; id: string; level: number }[]> = {
    '/docs/introduction': [
        { title: 'Overview', id: 'overview', level: 2 },
        { title: 'Features', id: 'features', level: 2 },
    ],
    '/docs/why-teracloud': [
        { title: 'The Problem', id: 'problem', level: 2 },
        { title: 'Our Solution', id: 'solution', level: 2 },
        { title: 'Key Benefits', id: 'benefits', level: 2 },
    ],
    '/docs/quick-start': [
        { title: 'Installation', id: 'installation', level: 2 },
        { title: 'Initialize Client', id: 'initialize', level: 2 },
        { title: 'First Upload', id: 'first-upload', level: 2 },
    ],
    '/docs/installation': [
        { title: 'Requirements', id: 'requirements', level: 2 },
        { title: 'Package Managers', id: 'package-managers', level: 2 },
        { title: 'Configuration', id: 'configuration', level: 2 },
    ],
    '/docs/architecture': [
        { title: 'Overview', id: 'overview', level: 2 },
        { title: 'Multi-Region Storage', id: 'multi-region', level: 2 },
        { title: 'CDN Integration', id: 'cdn', level: 2 },
    ],
    '/docs/files': [
        { title: 'File Structure', id: 'structure', level: 2 },
        { title: 'Metadata', id: 'metadata', level: 2 },
        { title: 'Versioning', id: 'versioning', level: 2 },
    ],
    '/docs/buckets': [
        { title: 'Creating Buckets', id: 'creating', level: 2 },
        { title: 'Permissions', id: 'permissions', level: 2 },
        { title: 'Lifecycle Rules', id: 'lifecycle', level: 2 },
    ],
    '/docs/api-reference': [
        { title: 'Authentication', id: 'authentication', level: 2 },
        { title: 'Upload Endpoint', id: 'upload', level: 2 },
        { title: 'Download Endpoint', id: 'download', level: 2 },
    ],
    '/docs/rest-api': [
        { title: 'Base URL', id: 'base-url', level: 2 },
        { title: 'Rate Limits', id: 'rate-limits', level: 2 },
        { title: 'Error Codes', id: 'errors', level: 2 },
    ],
    '/docs/security': [
        { title: 'Encryption', id: 'encryption', level: 2 },
        { title: 'Access Control', id: 'access-control', level: 2 },
        { title: 'Compliance', id: 'compliance', level: 2 },
    ],
}

const DocsTOC = () => {
    const [activeId, setActiveId] = useState<string>('')
    const location = useLocation()

    const items = tocData[location.pathname] || []

    useEffect(() => {
        if (items.length === 0) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                })
            },
            { rootMargin: '0% 0% -80% 0%' }
        )

        // Small delay to let the page render
        const timeout = setTimeout(() => {
            const headings = document.querySelectorAll('h2[id], h3[id]')
            headings.forEach((heading) => observer.observe(heading))
        }, 100)

        return () => {
            clearTimeout(timeout)
            const headings = document.querySelectorAll('h2[id], h3[id]')
            headings.forEach((heading) => observer.unobserve(heading))
        }
    }, [location.pathname, items.length])

    if (items.length === 0) {
        return null
    }

    return (
        <div className="hidden xl:block w-64 sticky top-6 h-fit pl-8 border-l border-white/5">
            <h4 className="text-sm font-semibold text-white mb-4">On This Page</h4>
            <ul className="space-y-2.5">
                {items.map((item) => (
                    <li key={item.id}>
                        <a
                            href={`#${item.id}`}
                            className={`text-sm transition-colors block ${item.level === 3 ? 'pl-3' : ''
                                } ${activeId === item.id
                                    ? 'text-white font-medium'
                                    : 'text-zinc-500 hover:text-zinc-300'
                                }`}
                        >
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DocsTOC
