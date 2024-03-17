import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import router from './router';
import { UserPage } from './pages/userpage/userPage';
import { RemarkPage } from './pages/remarkPage/remarkPage';
import BasicPage from './pages/topicPage/topicPage';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<<<<<<< HEAD
  <React.StrictMode>
    <RouterProvider router={router}/>

  </React.StrictMode>
=======
	<React.StrictMode >
		<RouterProvider router={router} className="h-screen bg-yellow-50 bg-cover" />
		{/* <UserPage /> */}
		{/* <RemarkPage /> */}
	</React.StrictMode>
>>>>>>> 6491f394148d561ea40832a57b976e6ab88408c5
);
