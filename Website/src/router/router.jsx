import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Home from '../Components/Home/Home'
import AboutUs from '../Components/AboutUs'
import ContactUs from '../Components/ContactUs'
import GalleryPage from '../Components/GalleryPage'
import CourseDetailPage from '../Components/CourseDetailPage'
import AdminLayout from '../Admin/AdminLayout'
import ResourcesDashboard from '../Admin/ResourcesDashboard'
import SettingsPage from '../Admin/SettingsPage'
import GalleryDashboard from '../Admin/GalleryDashboard'
import LoginPage from '../Admin/LoginPage'


export const router = createBrowserRouter([
    {
        path : '',
        element : <App />,
        children : [
            {path : '/' , element : <Home />},
            {path : '/about' , element : <AboutUs />},
            {path : '/contact' , element : <ContactUs />},
            {path : '/gallery' , element : <GalleryPage />},
            {path : '/course/:id' , element : <CourseDetailPage />},
        ]
    },
    {
        path : '/admin/',
        element : <AdminLayout />,
        children : [
            {path : "" , element : <GalleryDashboard />},
            {path : "resources" , element : <ResourcesDashboard />},
            {path : "setting" , element : <SettingsPage />},
        ]
    },
    {path : '/login' , element : <LoginPage />}
])