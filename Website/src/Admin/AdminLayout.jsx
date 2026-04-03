import React from 'react'
import './root.css'
import Header from './Header'
import GalleryDashboard from './GalleryDashboard'
import ResourcesDashboard from './ResourcesDashboard'
import SettingsPage from './SettingsPage'
import { Outlet } from 'react-router-dom'

function AdminLayout() {
    return (
        /* min-h-screen ensures the background covers the full page */
        /* overflow-x-hidden prevents any accidental horizontal scroll */
        <div className="flex flex-col min-h-screen w-full bg-[var(--bg-primary)] overflow-x-hidden">
            <Header /> 
            {/* Main content wrapper with responsive padding and max-width */}
            <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <Outlet />
            </main>
        </div>
    )
}
export default AdminLayout