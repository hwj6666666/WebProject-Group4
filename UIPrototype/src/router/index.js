import { createBrowserRouter } from "react-router-dom";
import { UserPage } from "@/pages/userpage/userPage";
import BasicPage from "@/pages/topicPage/topicPage";
import { RemarkPage } from "@/pages/remarkPage/remarkPage";
import { ObjectPage } from "@/pages/objectPage/objectPage";
import LoginPage from "@/pages/loginPage/login";
import { AuthRoute } from "@/components/login/AuthRoute";
import RegisterPage from "@/pages/registerPage/registerPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthRoute>
        <BasicPage />
      </AuthRoute>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element:<RegisterPage/>,
  },
  {
    path: "/user",
    element: (
      <AuthRoute>
        <UserPage />
      </AuthRoute>
    ),
  },
  {
    path: "/object/:objectId",
    element: (
      <AuthRoute>
        <RemarkPage />
      </AuthRoute>
    ),
  },
  {
    path: "/topic/:topicId",
    element: (
      <AuthRoute>
        <ObjectPage />
      </AuthRoute>
    ),
  },
]);

export default router;
