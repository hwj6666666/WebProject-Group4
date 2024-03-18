import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import router from './router';
import store from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode >
		<Provider store={store}>
			<RouterProvider router={router} className="h-screen bg-yellow-50 bg-cover" />
		</Provider>
	</React.StrictMode>
);
