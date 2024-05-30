import React, { useEffect, useState } from 'react'
import { StarOutlined, StarFilled } from '@ant-design/icons';
import { Card } from 'antd';
import profile_photo from "@/assets/3000.png";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getOandTTitleAPI } from '@/apis/user';

export default function RemarkUser({ remark }) {

	const navigate = useNavigate();
	// console.log(remark)
	const { username } = useSelector(state => state.user).user
	const returnStarsOutlined = (starNum) => Array(5).fill().map((_, i) => {
		if (i < starNum) return <StarFilled key={i} className="text-yellow-400 mr-1" />;
		return <StarOutlined key={i} className="text-yellow-400 mr-1" />;
	})
	const [OandT, setOandT] = useState({ objectName: '', topicName: '' });
	useEffect(() => {
		const fetchOandT = async () => {
			const OandT = await getOandTTitleAPI(remark.objectId);
			// console.log(OandT);
			setOandT(OandT);
		};
		fetchOandT();
	}, [remark])

	return (
		<Card
			hoverable
			title={
				<div className="flex items-center"
					onClick={() => navigate(`/user/${remark.userId}`)}>
					<img
						src={profile_photo}
						alt="图片描述"
						className="w-10 h-10 mt-3 mr-4"
					/>
					<div className="mt-2 text-sm font-bold">
						{username}
					</div>
					<div className="w-32 h-10 flex justify-center items-center text-base ml-10 mt-2">
						{returnStarsOutlined(remark.score / 2)}
					</div>
					<div style={{ margin: "10px 0" }}>
						<p className="text-sm text-gray-500" style={{ fontSize: "18px", color: "#333" }}>
							在话题
							<span className="text-sm text-gray-500" style={{ fontWeight: "bold", color: "#007BFF" }}>
								{OandT.topicName}
							</span>
							下，
						</p>
					</div>
					<div style={{ margin: "10px 0" }}>
						<p className="text-sm text-gray-500" style={{ fontSize: "18px", color: "#333" }}>
							对
							<span className="text-sm text-gray-500" style={{ fontWeight: "bold", color: "#007BFF" }}>
								{OandT.objectName}
							</span>
							的评论：
						</p>
					</div>
				</div>
			}
			className="mb-4 rounded-lg"
			onClick={() => navigate(`/object/${remark.objectId}`)}
		>
			<div className="flex justify-between">
				<div className="flex flex-col ml-14">
					<p className="text-base">{remark.content}</p>
					<div className="flex flex-row mt-4 items-center">
						<p className="text-sm text-gray-500">
							{remark.publishTime.substring(0, 10) +
								" " +
								remark.publishTime.substring(11, 19)}
						</p>
						<div className="mx-5">
							{/* <LikeButton remarkId={remark.id} /> */}
						</div>
						{/* <button
							className="ml-2 text-sm hover:text-blue-500 text-gray-500"
							onClick={() => {
								if (reply === false) setReply(true);
								if (
								  reply === true &&
								  replyId === "r" + remark.id
								)
								  setReply(!reply);
								setReplyId("r" + remark.id);
								setReplyRemark(remark.id);
								setReplyPrefix("");
							}
							}
						>
							回复
						</button> */}
					</div>
					{/* <div className="mt-5 space-y-8">
						{
						comments
							.filter((comment) => {
								return comment.remarkId === remark.id;
							})
							.map((comment) => (
								<div className="space-y-2">
									<div className="flex flex-row items-center">
										<img
											src={profile_photo}
											alt="图片描述"
											className="w-10 h-10 mr-4"
										/>
										<div className="text-sm font-bold">
											{user &&
												user.find(
													(user) => user.id === comment.userId
												)?.username}
										</div>
									</div>
									<p className="text-base mt-4">
										{comment.content}
									</p>
									<div className="flex flex-row mt-4 items-center">
										<p className="text-sm text-gray-500">
											{comment.publishTime.substring(0, 10) +
												" " +
												comment.publishTime.substring(11, 19)}
										</p>
										<button
											className="ml-4 text-sm hover:text-blue-500 text-gray-500"
											onClick={() => {
												if (reply === false) {
													setReplyId("c" + remark.id);
													setReplyRemark(remark.id);
													setReplyPrefix(
														"回复 @" +
															(user &&
																user.find(
																	(user) =>
																		user.id === comment.userId
																)?.username) +
															" : "
													);
													setReply(true);
												} else if (
													reply === true &&
													replyId === "c" + remark.id
												)
													setReply(!reply);
											}}
										>
											回复
										</button>
									</div>
								</div>
							))}
						{reply && remark.id === replyRemark ? (
							<div className="space-y-2">
								<div className="flex flex-row items-center">
									<img
										src={profile_photo}
										alt="图片描述"
										className="w-10 h-10 mr-4"
									/>
									<div className="text-sm font-bold">
										{
											user.find(
												(user) =>
													user.id == localStorage.getItem("id")
											)?.username
										}
									</div>
								</div>
								<div className="text-base flex flex-row">
									<textarea
										type="text"
										value={replyPrefix}
										className="p-2 h-20 reply border-black border rounded"
										autoFocus
										onChange={(e) =>
											setReplyPrefix(e.target.value)
										}
										ref={ref}
									/>
									<Button
										className="ml-4 mt-4"
										onClick={handleReply}
									>
										提交
									</Button>
								</div>
							</div>
						) : (
							<></>
						)}
					</div> */}
				</div>
			</div>
		</Card>
	)
}
