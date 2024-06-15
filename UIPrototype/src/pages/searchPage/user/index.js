import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col,Empty } from "antd";
import UserCard from "@/components/user/UserCard";
import { searchUser } from "@/apis/user";
function SearchTopic() {
 const [user, setUser] = useState([]);
 const { keyword } = useParams();
  
    useEffect(() => {
      searchUser(keyword).then((res)=>{
      setUser(res)
    })
    }, [keyword]);
  return (
    <div >
        {user.length>0?<div >
          <Row className="ml-12" >
            {user.map((user) => (
          <Col span={12} className="mt-10">
              <span style={{ marginBottom: "30px",marginLeft:"150px",marginRight:"150px" }}>
								<UserCard  user={user} />
							</span>
          </Col>
          ))}
        </Row>
          
          </div>:<div><Empty/></div>}
    </div>
  );
}

export default SearchTopic;