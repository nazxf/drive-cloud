import { ReactNode } from 'react'
import Sidebar from '../components/Sidebar'

interface DashboardLayoutProps {
    children: ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <div className="flex min-h-screen bg-[#0a0a0a] font-sans antialiased">
            <Sidebar />
            <main className="flex-1 overflow-auto">
                {children}
            </main>
        </div>
    )
}

export default DashboardLayout
