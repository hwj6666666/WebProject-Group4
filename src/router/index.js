
import { createBrowserRouter } from 'react-router-dom'
import { UserPage } from '@/pages/userpage/userPage'
import BasicPage from '@/pages/topicPage'

const router=createBrowserRouter([
    {
        path:"/",
        element:<BasicPage />
    },
    {
        path:"/user",
        element:<UserPage />
    }
])

export default router