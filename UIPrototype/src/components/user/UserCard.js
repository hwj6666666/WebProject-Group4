//这个组件是话题页面的每一个话题，包含话题名称，最热打分，以及实时热度
import React from "react";
import { Avatar, Button, message } from "antd";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import avat from "@/assets/3000.png";
import { banUser } from "@/apis/user";

const UserCard = ({user}) => {
	const { username,note,level,avatar } = user;
    const [status,setStatus]=useState(user.state)
    console.log(user)
    let tmpnote=note;
    const navigate = useNavigate();
    const handleclick=async(e)=>{
        e.stopPropagation()
        if(user.state!=1){
        const ret=await banUser(user.id)
        if(ret.ok){
            message.success(ret.msg)
            setStatus(ret.data)
        }
        else
            message.error(ret.msg)
    }
    else 
        message.error("无法封禁管理员")
    }
    if(tmpnote.length>20){
        tmpnote=tmpnote.substring(0,20)+"..."
    }
	return (<><div Onclick={()=>navigate(`/user/${user.id}`)
         }>  
        <div style={{display:"flex"}}>
          <div>
         <Avatar src={avatar!=="path"? avatar : avat} size={128} />
		    </div>
            <div>
            <h1 className="ml-10 text-2xl"><span className="mr-5">{username}</span>{"等级："+level} 
            {localStorage.getItem("isManager") === "true" && (status==0?<Button danger onClick={(e)=>{handleclick(e)}}>封禁</Button>:<Button onClick={handleclick}>解封</Button>)}
           </h1>
            <p className="ml-10 text-xl text-black">{tmpnote}</p>
            </div>
        </div></div>
        </>
	);
};

export default UserCard;
