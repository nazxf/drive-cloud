import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

import Docs from './pages/Docs'
import DocsRoot from './pages/docs/DocsRoot'
import Introduction from './pages/docs/Introduction'
import WhyTeraCloud from './pages/docs/WhyTeraCloud'
import QuickStart from './pages/docs/QuickStart'
import Architecture from './pages/docs/Architecture'
import ApiReference from './pages/docs/ApiReference'
import Security from './pages/docs/Security'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard/*" element={<Dashboard />} />

            <Route path="/docs" element={<Docs />}>
                <Route index element={<DocsRoot />} />
                <Route path="introduction" element={<Introduction />} />
                <Route path="why-teracloud" element={<WhyTeraCloud />} />
                <Route path="quick-start" element={<QuickStart />} />
                <Route path="installation" element={<QuickStart />} />
                <Route path="architecture" element={<Architecture />} />
                <Route path="files" element={<Architecture />} /> {/* Placeholder mapping */}
                <Route path="buckets" element={<Architecture />} /> {/* Placeholder mapping */}
                <Route path="api-reference" element={<ApiReference />} />
                <Route path="rest-api" element={<ApiReference />} />
                <Route path="security" element={<Security />} />
                {/* Fallback for other sections to be mapped properly later */}
            </Route>
        </Routes>
    )
}

export default App
