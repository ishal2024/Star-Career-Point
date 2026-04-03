import React from 'react'
import './root.css'
import Header from './Header'
import GalleryDashboard from './GalleryDashboard'
import ResourcesDashboard from './ResourcesDashboard'
import SettingsPage from './SettingsPage'
import { Outlet } from 'react-router-dom'

function AdminLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default AdminLayout