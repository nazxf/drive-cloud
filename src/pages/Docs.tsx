import { Outlet } from 'react-router-dom'
import DocsLayout from '../layouts/DocsLayout'

const Docs = () => {
    return (
        <DocsLayout>
            <Outlet />
        </DocsLayout>
    )
}

export default Docs
