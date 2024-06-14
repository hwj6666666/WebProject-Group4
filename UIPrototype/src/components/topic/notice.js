import { Card, Divider } from "antd";


const Notice = () => {
    return(
        <div className="mt-24 ml-5 text-base">
        <Card title="公告栏" className="text-base bg-base" style={{ width: 300,display:"flex",flexDirection:"column" }}>
            <p>欢迎来到交集！</p>
            <Divider/>
            <p>{"版本:3.0.5     "}</p>
            <a href="https://github.com/hwj6666666/WebProject-Group4">联系我们</a>
        </Card>
        </div>
    )
}

export default Notice;