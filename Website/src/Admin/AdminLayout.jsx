import React, { useEffect, useState } from 'react'
import './root.css'
import Header from './Header'
import GalleryDashboard from './GalleryDashboard'
import ResourcesDashboard from './ResourcesDashboard'
import SettingsPage from './SettingsPage'
import { Navigate, Outlet } from 'react-router-dom'
import LoginPage from './LoginPage'
import { checkAdminAuthorization } from '../axios/adminApi'

function AdminLayout() {


    const [isAuth, setAuth] = useState(null)
    async function handleAdminAuth() {
        try {
            const res = await checkAdminAuthorization()
            console.log(res)
            setAuth(res.data.status)
        } catch (error) {
            setAuth(false)
        }
    }

    useEffect(() => {
        handleAdminAuth()
    }, [])

    if (isAuth === null) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-[var(--bg-primary)] z-50">
                <div className="w-14 h-14 border-4 border-[var(--bg-tertiary)] border-t-[var(--accent)] rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <>
            {isAuth ?

                <div id='adminClass' className="flex flex-col min-h-screen w-full bg-[var(--bg-primary)] overflow-x-hidden">
                    <Header />
                    {/* Main content wrapper with responsive padding and max-width */}
                    <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <Outlet />
                    </main>
                </div> : <Navigate to="/login" replace />}
        </>

    )
}
export default AdminLayout