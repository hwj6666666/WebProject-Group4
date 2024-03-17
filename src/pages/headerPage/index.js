import React from "react";
import logo from "@/assets/logo.jpg";
import { Helmet } from "react-helmet";

import {Input} from "antd";

const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);

const Header = () => {
  const handleClick=()=>{
    const absoluteURL = window.location.origin + '/user';
    window.location.href = absoluteURL;
  }
  return (
    <div className="flex justify-between items-center bg-blue-600 text-white h-20 rounded-2xl ">
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
      <div className="flex items-center">
        <img src={logo} alt="logo" className="h-20 rounded-2xl" />
        <span className="ml-4 text-4xl">交∩集</span>
      </div>
      <Search
        placeholder="请输入感兴趣的话题或帖子"
        onSearch={onSearch}
        style={{
          width: 400,
        }}
        size="large"
      />
      <div onClick={handleClick} className="cursor-pointer">
        <span class="material-symbols-outlined">account_circle</span>
      </div>
    </div>
  );
};

export default Header;
