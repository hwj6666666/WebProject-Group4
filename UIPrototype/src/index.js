import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import './index.css';
import { RouterProvider } from 'react-router';
import router from './router';
import store from './store';
import './theme.less'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// <React.StrictMode >
	// 	<Provider store={store}>
	// 		<RouterProvider router={router} className="h-screen bg-yellow-50 bg-cover" />
	// 	</Provider>
	// </React.StrictMode>>
	<ConfigProvider
    wave
    theme={{
      token: {
      },
      components: {
		Menu:{
			itemColor: 'grey',
			horizontalItemSelectedColor: 'skyblue',
			activeBarHeight: 0,
		}
    }}}>
	<Provider store={store}>
		<RouterProvider router={router} className="h-screen bg-yellow-50 bg-cover" />
	</Provider></ConfigProvider>
);
