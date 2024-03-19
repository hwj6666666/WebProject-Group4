import {  Menu } from "antd"
import Sider from "antd/es/layout/Sider"


export const MyRemarkSider=()=>{

    const sort =[
      { name:'一餐', id:0, key:'1'},
      { name:'二餐', id:1, key:'2'},
      { name:'三餐', id:2, key:'3'},
      { name:'四餐', id:3, key:'4'},
      { name:'五餐', id:4, key:'5'},
      { name:'六餐', id:5, key:'6'},
      { name:'七餐', id:6, key:'7'},
      { name:'玉兰苑', id:7, key:'8'},
      { name:'麦当劳', id:8, key:'9'},
      { name:'冰雪皇后', id:9, key:'10'},
      { name:'小卖部泡面', id:10, key:'11'},
    ];
  
    
   

    return  <Sider style={{marginTop:'7%',marginLeft:'3%',borderRadius:'14px'}}>
    <Menu className="bg-green-100" 
    mode="vertical" key={sort.id} 
    defaultSelectedKeys={['1']} 
    style={{borderRadius:'14px'}} 
    >
      {sort.map((item) => (
        <Menu.Item key={item.key} > {item.name}</Menu.Item>
      ))}
    </Menu>
  </Sider>
}