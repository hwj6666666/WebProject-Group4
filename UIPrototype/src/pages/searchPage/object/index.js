import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Object from "@/components/object/object";
import {searchObject} from "@/apis/object"
import { Empty } from "antd";
function SearchObject() {
 const [object, setObject] = useState([]);
 const { keyword } = useParams();
  
    useEffect(() => {
      searchObject(keyword).then((res)=>{
      setObject(res)
    })
    }, [keyword]);
  return (
    <div>
        {object.length>0?<div className="mt-10">
          {object.map((object, index) => (
              <div style={{ marginBottom: "30px",marginLeft:"150px",marginRight:"150px" }}>
								<Object key={index} object={object} />
							</div>
          ))}
          </div>:<div><Empty/></div>}
    </div>
  );
}

export default SearchObject;