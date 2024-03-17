import React from "react";
import Header from "../headerPage";
import { MyRemarkSider } from "@/components/remark/remarkSider";
import { RemarkButton } from "@/components/remark/remarkButton";
import Card from "antd/es/card/Card";
import profile_photo from "@/assets/3000.png";
import { MakeRemark } from "@/components/remark/makeRemark";
import LikeButton from "@/components/remark/remarkLike";
import { Flex, Progress } from 'antd';

export const RemarkPage = () => {
	const remarks = [
		{
			username: "用户114514",
			photo: "",
			comment: "还可以吧，虽然不算最好吃的",
			score: "4.0",
			time: "2024-3-9",
			likes: 50,
			id: 0
		},
		{
			username: "用户666",
			photo: "",
			comment: "一餐很好啊，选择也挺多的",
			score: "5.0",
			time: "2024-3-11",
			likes: 13,
			id: 1
		},
		{
			username: "用户1919810",
			photo: "",
			comment: "感觉不如二餐，就算排队也要去二餐",
			score: "2.0",
			time: "2024-3-15",
			likes: 7,
			id: 2
		}
		//更多评价
	];

	//进行统计
	let freq = remarks.reduce((total, item) => {
		if (total[item.score]) total[item.score]++;
		else total[item.score] = 1;
		return total;
	}, {});
	freq["1.0"] = freq["1.0"] ?? 0;
	freq["2.0"] = freq["2.0"] ?? 0;
	freq["3.0"] = freq["3.0"] ?? 0;
	freq["4.0"] = freq["4.0"] ?? 0;
	freq["5.0"] = freq["5.0"] ?? 0;

	//计算平均值
	let average = freq["1.0"] + freq["2.0"] * 2 + freq["3.0"] * 3 + freq["4.0"] * 4 + freq["5.0"] * 5;
	average /= remarks.length;
	average = average.toFixed(1);

	//统计比例
	let _1_pencentage = freq["1.0"] / remarks.length * 100;
	let _2_pencentage = freq["2.0"] / remarks.length * 100;
	let _3_pencentage = freq["3.0"] / remarks.length * 100;
	let _4_pencentage = freq["4.0"] / remarks.length * 100;
	let _5_pencentage = freq["5.0"] / remarks.length * 100;

	_1_pencentage = _1_pencentage.toFixed(0);
	_2_pencentage = _2_pencentage.toFixed(0);
	_3_pencentage = _3_pencentage.toFixed(0);
	_4_pencentage = _4_pencentage.toFixed(0);
	_5_pencentage = _5_pencentage.toFixed(0);



	return (<div className=" bg-yellow-50" >
		<Header />
		<div className="flex flex-row">
			<MyRemarkSider />
			<div className="w-3/4 mt-6">
				<h1 className="text-center text-4xl mb-10">交大哪个餐厅最好吃</h1>
				<div className="flex flex-row">
					<div>
						<h2 className="underline text-3xl ml-36 mt-8">一餐</h2>
						<RemarkButton />
					</div>
					<Flex gap="small" vertical className="w-1/3 ml-36">
						<div className="flex items-center">5 <Progress percent={_5_pencentage} className="ml-3" /></div>
						<div className="flex items-center">4 <Progress percent={_4_pencentage} className="ml-3" /></div>
						<div className="flex items-center">3 <Progress percent={_3_pencentage} className="ml-3" /></div>
						<div className="flex items-center">2 <Progress percent={_2_pencentage} className="ml-3" /></div>
						<div className="flex items-center">1 <Progress percent={_1_pencentage} className="ml-3" /></div>
					</Flex>
					<div className="flex flex-col w-1/4">
						<div className="flex items-center justify-center w-24 h-12 bg-red-300 mt-10 text-3xl ml-auto border border-black rounded-lg">
							{average}
						</div>
						<MakeRemark />
					</div>
				</div>
				<div className="mt-6 ml-24 w-5/6">
					<div>
						{remarks.map((remark, index) => (
							<Card key={index} hoverable
								title={
									<div className="flex items-center" >
										<img src={profile_photo} alt="图片描述" className="w-10 h-10 mt-3 mr-4" />
										<div className="mt-2">{remark.username}</div>
									</div>
								}
								bordered={false} className="mb-3 border border-black rounded-lg"
							>
								<div className="flex justify-between">
									<div></div>
									<div className="flex flex-col items-center">
										<p className="text-xl">{remark.comment}</p>
										<div className="flex flex-row mt-7 items-center">
											<button className="mr-8 border border-black rounded-lg pt-1 pb-1 pl-3 pr-3 text-base">回复</button>
											<p className="text-sm">{remark.time}</p>
										</div>
									</div>
									<div className="flex flex-col items-center">
										<div className="border border-black rounded-lg w-16 h-10 flex justify-center items-center mb-4">{remark.score}</div>
										<LikeButton likes={remark.likes} />
									</div>
								</div>
							</Card>
						))}
					</div>
				</div>
			</div>
		</div>
	</div>);
}