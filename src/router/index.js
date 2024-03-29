
import { createBrowserRouter } from 'react-router-dom'
import { UserPage } from '@/pages/userpage/userPage'
import BasicPage from "@/pages/topicPage/topicPage";
import { RemarkPage } from '@/pages/remarkPage/remarkPage';
import { ObjectPage } from '@/pages/objectPage/objectPage';

const router=createBrowserRouter([
    {
        path:"/",
        element:<BasicPage />
    },
    {
        path:"/user",
        element:<UserPage />
    },
    {
        path:"/remark",
        element:<RemarkPage />
    },
    {
        path:"/object",
        element:<ObjectPage />
    }
])

export default router