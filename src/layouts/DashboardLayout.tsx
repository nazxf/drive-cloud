import { ReactNode } from 'react'
import Sidebar from '../components/Sidebar'

interface DashboardLayoutProps {
    children: ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <div className="flex min-h-screen bg-black font-sans antialiased">
            <Sidebar />
            <main className="flex-1 overflow-auto">
                {children}
            </main>
        </div>
    )
}

export default DashboardLayout
