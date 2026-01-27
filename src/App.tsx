import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Overview from './pages/Overview'
import MyStorage from './pages/MyStorage'
import Recents from './pages/Recents'
import Favorites from './pages/Favorites'
import Trash from './pages/Trash'
import TeamStorage from './pages/TeamStorage'

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
import SdkReference from './pages/docs/SdkReference'
import Security from './pages/docs/Security'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Dashboard />}>
                <Route path="/dashboard" element={<Overview />} />
                <Route path="/storage" element={<MyStorage />} />
                <Route path="/recent" element={<Recents />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/trash" element={<Trash />} />
                <Route path="/team/:teamId" element={<TeamStorage />} />
                <Route path="/shared-folder" element={<div className="p-8 text-zinc-500">Shared Folder (Coming Soon)</div>} />
                <Route path="/shared-file" element={<div className="p-8 text-zinc-500">Shared File (Coming Soon)</div>} />
            </Route>

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
                <Route path="sdk" element={<SdkReference />} />
                <Route path="security" element={<Security />} />
            </Route>
        </Routes>
    )
}

export default App
