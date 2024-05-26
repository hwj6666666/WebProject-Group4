import React from "react";
import logo from "@/assets/logo3.png";
import { Helmet } from "react-helmet";
import { Affix, Input } from "antd/es";
import { Login } from "@/components/login";
import { Link,useNavigate, useOutlet } from "react-router-dom";

const { Search } = Input;

const Header = () => {
	const navigate = useNavigate();	
	const onSearch = (value, _e, info) =>{
	navigate(`/search/topic/${value}`);
	};
	const children=useOutlet();
	return (<>
	<Affix>
		<div className="shadow-lg min-w-[700px] flex justify-between items-center bg-white text-white h-20 rounded-2xl ">
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
				<div className="flex items-center cursor-pointer">
					<img src={logo} alt="logo" className="h-20 rounded-2xl" />
					{/* <span className="text-black ml-4 text-4xl">交∩集</span> */}
				</div>
			</Link>
			<Search
				placeholder="请输入感兴趣的话题或帖子"
				onSearch={onSearch}
				style={{
					width: 400,
				}}
				size="large"
			/>
			<div className="mr-5">
				<Login></Login>
			</div>
		</div></Affix>
		{children}</>
	);
};

export default Header;
