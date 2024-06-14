import React from "react";
import logo from "@/assets/logo.png";
import { Helmet } from "react-helmet";
import { Affix, Input, Cascader} from "antd/es";
import { Login } from "@/components/login";
import { Link,useNavigate, useOutlet } from "react-router-dom";
import "../../index.css"

const { Search } = Input;

const options = [
	{
	  value: 'light',
	  label: 'light',
	},
	{
	  value: 'dark',
	  label: 'dark',
	},
	{
		value: 'warm',
		label: 'warm',
	  },
  ];

const Header = () => {
	const navigate = useNavigate();	
	const onSearch = (value, _e, info) =>{
	navigate(`/search/topic/${value}`);
	};
	const children=useOutlet();
	const onChange = (value) => {
		document.documentElement.className = `theme-${value}`;
	  };


	return (<>
	<Affix>
		<div className="shadow-lg min-w-[700px] flex justify-between items-center bg-header text-base h-20 rounded-2xl ">
			<Helmet>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
				/>
				<style>{`
          .material-symbols-outlined {
             font-variation-settings:
             'FILL' 0,
              'wght' 400,
              'GRAD' 0,
             'opsz' 24;
             font-size: 80px;
           }
        `}</style>
			</Helmet>
			<Link to={{ pathname: "/" }}>
				<div className="flex items-center cursor-pointer bg-header">
					<img src={logo} alt="logo" className="h-20 size-48" />
					{/* <span className="text-black ml-4 text-4xl">交∩集</span> */}
				</div>
			</Link>
			<Search
				className="mr-0"
				placeholder="请输入感兴趣的话题或帖子"
				onSearch={onSearch}
				style={{
					width: 400,
					backgroundColor: 'var(--color-base)',
				}}
				size="large"
				color="base"
				theme={{
					token: {
					  // Seed Token，影响范围大
					  colorPrimary: '#00b96b',
					  borderRadius: 2,
			  
					  // 派生变量，影响范围小
					  colorBgContainer: '#000000',
					},
				  }}
			/>
			<Cascader 
				style={{ 
					width: 100, 
					marginLeft:100,
					backgroundColor: 'var(--color-base)',
				}}
				defaultValue={['light']} 
				size="large"
				options={options} 
				onChange={onChange} 
				allowClear = {false}
			/>
			<div className="mr-5">
				<Login></Login>
			</div>
		</div></Affix>
		{children}</>
	);
};

export default Header;
