import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Home from '../Components/Home/Home'
import AboutUs from '../Components/AboutUs'
import ContactUs from '../Components/ContactUs'
import GalleryPage from '../Components/GalleryPage'
import CourseDetailPage from '../Components/CourseDetailPage'


export const router = createBrowserRouter([
    {
        path : '/',
        element : <App />,
        children : [
            {path : '/' , element : <Home />},
            {path : '/about' , element : <AboutUs />},
            {path : '/contact' , element : <ContactUs />},
            {path : '/gallery' , element : <GalleryPage />},
            {path : '/course/:id' , element : <CourseDetailPage />},
        ]
    }
])