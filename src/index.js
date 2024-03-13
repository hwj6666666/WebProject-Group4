import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import router from './router';
import { UserPage } from './pages/userpage/userPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router}/> */}
    <UserPage/>
  </React.StrictMode>
);
