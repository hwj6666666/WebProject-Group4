import React from "react";
import Header from "../headerPage";
import { RemarkButton } from "@/components/remark/remarkButton";
import Card from "antd/es/card/Card";
import profile_photo from "@/assets/3000.png";
import { MakeRemark } from "@/components/remark/makeRemark";
import LikeButton from "@/components/remark/remarkLike";
import { Flex, Progress } from 'antd';
import { useSelector } from "react-redux";
import ObjectProfile from "@/components/remark/objectProfile";
import scorePhoto from "@/assets/score.png";
import { StarOutlined, StarFilled } from '@ant-design/icons';

export const RemarkPage = () => {
	const remarks = useSelector(state => state.remark).remark;
	const objects = useSelector(state => state.object).object;

	const returnStars = (starNum) => Array(starNum).fill().map((_, i) => <StarFilled key={i} className="text-yellow-400 mr-1" />);

	const returnStarsOutlined = (starNum) => Array(5).fill().map((_, i) => {
		if (i < starNum) return <StarFilled key={i} className="text-yellow-400 mr-1" />;
		return <StarOutlined key={i} className="text-yellow-400 mr-1" />;
	})

	//进行统计
	let freq = remarks.reduce((total, item) => {
		if (total[item.score]) total[item.score]++;
		else total[item.score] = 1;
		return total;
	}, {});
	freq[2] = freq[2] ?? 0;
	freq[4] = freq[4] ?? 0;
	freq[6] = freq[6] ?? 0;
	freq[8] = freq[8] ?? 0;
	freq[10] = freq[10] ?? 0;

	//计算平均值
	let average = freq[2] * 2 + freq[4] * 4 + freq[6] * 6 + freq[8] * 8 + freq[10] * 10;
	average /= remarks.length;
	average = average.toFixed(1);

	//统计比例
	let _1_pencentage = freq[2] / remarks.length * 100;
	let _2_pencentage = freq[4] / remarks.length * 100;
	let _3_pencentage = freq[6] / remarks.length * 100;
	let _4_pencentage = freq[8] / remarks.length * 100;
	let _5_pencentage = freq[10] / remarks.length * 100;

	_1_pencentage = _1_pencentage.toFixed(0);
	_2_pencentage = _2_pencentage.toFixed(0);
	_3_pencentage = _3_pencentage.toFixed(0);
	_4_pencentage = _4_pencentage.toFixed(0);
	_5_pencentage = _5_pencentage.toFixed(0);

	return (<div className="min-h-screen bg-biligrey" >
		<div className="fixed w-full z-50"><Header /></div>
		<div className="h-16"></div>
		<div className="flex flex-row ml-28 mr-48">
			<div className="fixed"><ObjectProfile object={objects.find(r => r.id === 0)} /></div>
			<div className="w-1/3"></div>
			<div className="w-3/4 mt-12">
				<h1 className="text-center text-4xl mb-8 font-bold">交大哪个餐厅最好吃</h1>
				<div className="flex flex-row bg-white rounded-lg drop-shadow-lg ml-16 pl-8 py-4 my-4">
					<div className="flex flex-col">
						<div className="flex items-center justify-center">
							<img src={scorePhoto} height={75} width={150} alt="nothing" />
						</div>
						<div className="flex items-center justify-center">
							<div className="flex items-center text-scoreblue justify-center w-24 h-12 text-5xl font-serif">
								{average}
							</div>
						</div>
						<div className="ml-3 mt-4">
							已有 {remarks.length} 交集er发表评分~
						</div>
						<div><RemarkButton /></div>
					</div>
					<div className="flex flex-col w-2/3">
						<Flex gap="small" vertical className="w-auto ml-2">
							<div className="flex items-center">
								<div className="text-right w-36">{returnStars(5)}</div>
								<Progress percent={_5_pencentage} className="ml-3" />
							</div>
							<div className="flex items-center">
								<div className="text-right w-36">{returnStars(4)}</div>
								<Progress percent={_4_pencentage} className="ml-3" />
							</div>
							<div className="flex items-center">
								<div className="text-right w-36">{returnStars(3)}</div>
								<Progress percent={_3_pencentage} className="ml-3" />
							</div>
							<div className="flex items-center">
								<div className="text-right w-36">{returnStars(2)}</div>
								<Progress percent={_2_pencentage} className="ml-3" />
							</div>
							<div className="flex items-center">
								<div className="text-right w-36">{returnStars(1)}</div>
								<Progress percent={_1_pencentage} className="ml-3" />
							</div>
						</Flex>
						<MakeRemark />
					</div>
				</div>
				<div className="mt-2 ml-16 w-auto">
					<div>
						{remarks.map((remark, index) =>
							remark.comment && <Card key={index} hoverable
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
									<div className="flex flex-col items-center ml-12">
										<p className="text-xl">{remark.comment}</p>
										<div className="flex flex-row mt-7 items-center">
											<button className="mr-8 border border-black rounded-lg pt-1 pb-1 pl-3 pr-3 text-base">回复</button>
											<p className="text-sm">{remark.time}</p>
										</div>
									</div>
									<div className="flex flex-col items-center mr-6">
										<div id="remarkStarDisplay" className="w-16 h-10 flex justify-center items-center mb-4 mr-2 text-base">
											{returnStarsOutlined(remark.score / 2)}
										</div>
										<LikeButton remarkId={remark.id} />
									</div>
								</div>
							</Card>
						)}
					</div>
				</div>
			</div>
		</div>
	</div>);
}