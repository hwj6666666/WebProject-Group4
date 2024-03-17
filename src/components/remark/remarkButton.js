import { Button, Divider, Form, Input, Modal, message } from "antd";
import { Content } from "antd/es/layout/layout";
import { useState } from "react";

export const RemarkButton = () => {
  const [focus, setFocus] = useState(true);
  const setNew = () => {
    setFocus(true);
  };
  const setHot = () => {
    setFocus(false);
  };

  return (
    <Content
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginLeft: "100px",
        marginTop: "25px",
        border: "1px solid black",
        padding: "4px",
      }}
    >
      <div>
        <Button
          className="text-base"
          type="text"
          ghost
          motion={false}
          style={focus && { color: "#1E90FF" }}
          onClick={() => {
            setNew();
          }}
        >
          最新
        </Button>
        <Divider className="text-2xl" type="vertical" style={{ backgroundColor: "gray" }}></Divider>
        <Button
          className="text-base"
          type="text"
          ghost
          motion={false}
          style={!focus && { color: "#1E90FF" }}
          onClick={() => {
            setHot();
          }}
        >
          最热
        </Button>
      </div>
    </Content>
  );
};
