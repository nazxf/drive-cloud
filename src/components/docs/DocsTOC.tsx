import { useEffect, useState } from 'react'

const DocsTOC = () => {
    const [activeId, setActiveId] = useState<string>('')

    useEffect(() => {
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

        const headings = document.querySelectorAll('h2, h3')
        headings.forEach((heading) => observer.observe(heading))

        return () => {
            headings.forEach((heading) => observer.unobserve(heading))
        }
    }, [])

    const items = [
        { title: "Introduction", href: "#introduction", level: 2 },
        { title: "Why TeraCloud?", href: "#why-teracloud", level: 2 },
        { title: "Quick Start", href: "#quickstart", level: 2 },
        { title: "Architecture", href: "#architecture", level: 2 },
        { title: "API Reference", href: "#rest-api", level: 2 },
        { title: "Security", href: "#security", level: 2 },
    ]

    return (
        <div className="hidden xl:block w-64 sticky top-6 h-fit pl-8 border-l border-white/5">
            <h4 className="text-sm font-semibold text-white mb-4">On This Page</h4>
            <ul className="space-y-2.5">
                {items.map((item) => (
                    <li key={item.href}>
                        <a
                            href={item.href}
                            className={`text-sm transition-colors text-zinc-500 hover:text-zinc-300 block ${activeId === item.href.slice(1) ? 'text-white font-medium' : ''
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
