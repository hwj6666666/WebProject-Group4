import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import router from './router';
import { UserPage } from './pages/userpage/userPage';
import { RemarkPage } from "./pages/remarkPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode >
		<RouterProvider router={router} className="h-screen bg-yellow-50 bg-cover" />
		{/* <UserPage /> */}
		{/* <RemarkPage /> */}
	</React.StrictMode>
);
