import { Button, Divider } from "antd/es";
import { Content } from "antd/es/layout/layout";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from 'lodash'
import { changePos, setOrderByTime } from "@/store/modules/remark";

export const RemarkButton = () => {
	const { remark } = useSelector(state => state.remark)
	const dispatch = useDispatch()
	const [focus, setFocus] = useState(true);
	const setNew = () => {
		setFocus(true);
		dispatch(setOrderByTime(true));
		dispatch(changePos(_.orderBy(remark, 'publishTime', 'desc')))
	};
	const setHot = () => {
		setFocus(false);
		dispatch(setOrderByTime(false));
		dispatch(changePos(_.orderBy(remark, 'like', 'desc')))
	};

	return (
		<Content
			style={{
				display: "flex",
				justifyContent: "space-between",
				marginLeft: "25px",
				marginTop: "25px",
				border: "1px solid black",
				padding: "4px",
			}}
		>
			<div>
				<Button
					className="text-base"
					type="text"
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