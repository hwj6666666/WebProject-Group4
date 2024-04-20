//这个组件是上传对象的按钮
import { Button } from "antd/es"

const UploadObject=()=>{
    return (<>
    <Button
    className="ml-auto w-28"
    style={{ backgroundColor: "#1E90FF", color: "#FFFFFF" }}
    >上传评分对象</Button>
    </>)
}

export default UploadObject