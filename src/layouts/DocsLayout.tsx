import { ReactNode, useState } from 'react'
import DocsSidebar from '../components/docs/DocsSidebar'
import DocsTOC from '../components/docs/DocsTOC'
import DocsMobileHeader from '../components/docs/DocsMobileHeader'

interface DocsLayoutProps {
    children: ReactNode
}

const DocsLayout = ({ children }: DocsLayoutProps) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <div className="min-h-screen bg-[var(--bg-deep)] text-zinc-400 font-sans selection:bg-white/10 selection:text-white">

            <DocsMobileHeader onOpenSidebar={() => setIsSidebarOpen(true)} />

            <div className="relative flex max-w-screen-2xl mx-auto">
                <DocsSidebar
                    isOpen={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                />

                <main className="flex-1 lg:pl-0 min-w-0">
                    <div className="grid grid-cols-1 xl:grid-cols-[1fr_250px] gap-10 px-6 py-10 lg:px-12 lg:py-12 max-w-6xl mx-auto">

                        {/* Main Content Column */}
                        <div className="min-w-0 space-y-10">
                            {children}

                            <div className="pt-10 mt-16 border-t border-white/5 text-sm text-zinc-500">
                                Last updated on Jan 27, 2026
                            </div>
                        </div>

                        {/* TOC Column */}
                        <DocsTOC />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default DocsLayout
