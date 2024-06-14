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
			activeBarHeight: 0,
			// itemBg:'var(--color-base)',
			colorText: 'var(--color-text-base)',
			subMenuItemBg:'var(--color-base)',
		},
		Input:{
			colorBgContainer: 'var(--color-base)',
			colorTextPlaceholder: 'var(--color-placeholder)',
		},
		Cascader:{
			// colorBgContainer: 'var(--color-base)',
			colorText: 'var(--color-text-base)',
		},
		Button:{
			colorText: 'var(--color-text-base)',
		},
		Card:{
			extraColor:'var(--color-text-base)'
		},
    }}}>
	<Provider store={store}>
		<RouterProvider router={router} className="h-screen bg-yellow-50 bg-cover" />
	</Provider></ConfigProvider>
);
