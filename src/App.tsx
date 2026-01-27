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
import Installation from './pages/docs/Installation'
import Architecture from './pages/docs/Architecture'
import Files from './pages/docs/Files'
import Buckets from './pages/docs/Buckets'
import ApiReference from './pages/docs/ApiReference'
import RestApi from './pages/docs/RestApi'
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
                <Route path="installation" element={<Installation />} />
                <Route path="architecture" element={<Architecture />} />
                <Route path="files" element={<Files />} />
                <Route path="buckets" element={<Buckets />} />
                <Route path="api-reference" element={<ApiReference />} />
                <Route path="rest-api" element={<RestApi />} />
                <Route path="security" element={<Security />} />
            </Route>
        </Routes>
    )
}

export default App
