import {  useNavigate, useParams,useOutlet,useLocation } from "react-router-dom";
import { Menu } from 'antd';
import {useEffect, useState } from 'react';
const items = [
  {
    label: '话题',
    key: 'topic',
  },
  {
    label: '对象',
    key: 'object',
  },
  {
    label: '用户',
    key: 'user',
  },
];

const SearchRouter = () => {
  const { keyword } = useParams();
  const navigate=useNavigate();
    const onClick = (e) => {
       setCurrent(e.key);
       navigate(`/search/${e.key}/${keyword}`);
       
    }
    const location=useLocation();
    const path=location.pathname.split("/");
    const second=path[path.length-2];
    const [current, setCurrent] = useState("");
    const children=useOutlet();
    useEffect(() => {
    setCurrent(second);
    }, [second]);
  return (
      <div className="bg-base">
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} 
      className="mt-10 pl-20 text-3xl bg-base" style={{color:"blue"}}></Menu>
      {children}</div>
  );
};

export default SearchRouter;