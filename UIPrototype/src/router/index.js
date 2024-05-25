import { createBrowserRouter } from "react-router-dom";
import { UserPage } from "@/pages/userpage/userPage";
import BasicPage from "@/pages/topicPage/topicPage";
import { RemarkPage } from "@/pages/remarkPage/remarkPage";
import { ObjectPage } from "@/pages/objectPage/objectPage";
import LoginPage from "@/pages/loginPage/login";
import SearchTopic from "@/pages/searchPage/topic";
import SearchObject from "@/pages/searchPage/object";
import SearchUser from "@/pages/searchPage/user";
import { AuthRoute } from "@/components/login/AuthRoute";
import RegisterPage from "@/pages/registerPage/registerPage";
import SearchRouter from "@/components/search/router";
import Header from "@/pages/headerPage";

const router = createBrowserRouter([
	{
		path: "/",
		element:
			<AuthRoute><Header />
			</AuthRoute>,
		children: [
			{
				path: "/",
				element: (
					<BasicPage />
				),
			},

			{
				path: "/search",
				element:
					<SearchRouter />,
				children: [
					{
						path: "topic/:keyword",
						element:
							<SearchTopic />
					},
					{
						path: "object/:keyword",
						element:
							<SearchObject />

					},
					{
						path: "user/:keyword",
						element:
							<SearchUser />
					},
				],
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
					<RemarkPage />
				),
			},
			{
				path: "/topic/:topicId",
				element: (
					<ObjectPage />
				),
			},
		]
	},
	{
		path: "/login",
		element: <><LoginPage /></>,
	},
	{
		path: "/register",
		element: <RegisterPage />,
	},
]);

export default router;
