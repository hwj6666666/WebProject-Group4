import Header from "@/pages/header"
import { MyRemarkSider } from "@/components/remark_sider";

export const RemarkBody = () => {
  return (
    <div className="flex flex-row">
      <MyRemarkSider />
      <h1 className="text-center text-5xl border-1">
        交大哪个餐厅最好吃a
      </h1>


    </div>
  );
}