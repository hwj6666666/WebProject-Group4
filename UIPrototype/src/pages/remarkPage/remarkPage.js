import { getRemarkAPI, getUsersAPI } from "@/apis/remark";
import profile_photo from "@/assets/3000.png";
import scorePhoto from "@/assets/score.png";
import { MakeRemark } from "@/components/remark/makeRemark";
import ObjectProfile from "@/components/remark/objectProfile";
import { RemarkButton } from "@/components/remark/remarkButton";
import LikeButton from "@/components/remark/remarkLike";
import { addComment, fetchComment } from "@/store/modules/comment";
import { fetchOneObject } from "@/store/modules/object";
import { changeRemark } from "@/store/modules/remark";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Button, Flex, Progress, message } from "antd";
import Card from "antd/es/card/Card";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const RemarkPage = () => {
  const remarks = useSelector((state) => state.remark).remark;
  const objects = useSelector((state) => state.object).object;
  const comments = useSelector((state) => state.comment).comment;

  const { objectId } = useParams();

  const dispatch = useDispatch();
  const [user, setUser] = useState(null);

  const fetchData = async () => {
    const userRes = await getUsersAPI();
    setUser(userRes);
    return await getRemarkAPI(objectId);
  };

  useEffect(() => {
    fetchData().then((data) => {
      dispatch(changeRemark(data));
      const remarkIds = data.map((item) => item.id);
      dispatch(fetchComment(remarkIds));
    });
  }, []);

  useEffect(() => {
    dispatch(fetchOneObject(objectId));
  }, [dispatch]);

  //comments生成
  let [reply, setReply] = useState(false);
  let [replyRemark, setReplyRemark] = useState(null);
  let [replyPrefix, setReplyPrefix] = useState("");
  let [replyId, setReplyId] = useState(""); //remark: r1, r2, ...  comment: c1, c2, ...
  const ref = useRef();
  useEffect(() => {
    const refText = ref.current;
    if (refText) {
      setTimeout(() => {
        refText.selectionStart = replyPrefix.length;
        refText.selectionEnd = replyPrefix.length;
      }, 0);
    }
  }, [replyPrefix]);

  const handleReply = () => {
    let date = new Date();
    let dateString = date.toISOString();
    const newComment = {
      userId: Number(localStorage.getItem("id")),
      remarkId: Number(replyId.substring(1)),
      content: replyPrefix,
      publishTime: dateString,
    };
    console.log(newComment);
    dispatch(addComment(newComment));

    setReply(false);
    setReplyRemark(null);
    setReplyPrefix("");
    setReplyId("");
    message.success("提交成功！");
  };

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
  let average =
    freq[2] * 2 + freq[4] * 4 + freq[6] * 6 + freq[8] * 8 + freq[10] * 10;
  average /= remarks.length;
  average = average.toFixed(1);

  //统计比例
  let _1_pencentage = (freq[2] / remarks.length) * 100;
  let _2_pencentage = (freq[4] / remarks.length) * 100;
  let _3_pencentage = (freq[6] / remarks.length) * 100;
  let _4_pencentage = (freq[8] / remarks.length) * 100;
  let _5_pencentage = (freq[10] / remarks.length) * 100;

  _1_pencentage = _1_pencentage.toFixed(0);
  _2_pencentage = _2_pencentage.toFixed(0);
  _3_pencentage = _3_pencentage.toFixed(0);
  _4_pencentage = _4_pencentage.toFixed(0);
  _5_pencentage = _5_pencentage.toFixed(0);

  if (isNaN(average)) {
    average = "0.0";
    _1_pencentage =
      _2_pencentage =
      _3_pencentage =
      _4_pencentage =
      _5_pencentage =
      0;
  }

  //打印五角星
  const returnStars = (starNum) =>
    Array(starNum)
      .fill()
      .map((_, i) => <StarFilled key={i} className="text-yellow-400 mr-1" />);

  const returnStarsOutlined = (starNum) =>
    Array(5)
      .fill()
      .map((_, i) => {
        if (i < starNum)
          return <StarFilled key={i} className="text-yellow-400 mr-1" />;
        return <StarOutlined key={i} className="text-yellow-400 mr-1" />;
      });

  return (
    <div className="min-h-screen bg-biligrey">
      <div className="h-16"></div>
      <div className="flex flex-row ml-28 mr-48">
        <div className="fixed">
          <ObjectProfile object={objects[0]} />
        </div>
        <div className="w-1/3"></div>
        <div className="w-3/4 mt-12">
          <h1 className="text-center text-4xl mb-8 font-bold">
            {objects[0] && objects[0].title}
          </h1>
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
              <div>
                <RemarkButton />
              </div>
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
              <MakeRemark objId={objectId} />
            </div>
          </div>
          <div className="mt-2 ml-16 w-auto">
            <div>
              {remarks.map(
                (remark, index) =>
                  remark.content && (
                    <Card
                      key={index}
                      hoverable
                      title={
                        <div className="flex items-center">
                          <img
                            src={profile_photo}
                            alt="图片描述"
                            className="w-10 h-10 mt-3 mr-4"
                          />
                          <div className="mt-2 text-sm font-bold">
                            {user &&
                              user.find((user) => user.id == remark.userId)
                                ?.username}
                          </div>
                          <div className="w-16 h-10 flex justify-center items-center text-base ml-10 mt-2">
                            {returnStarsOutlined(remark.score / 2)}
                          </div>
                        </div>
                      }
                      className="mb-4 rounded-lg"
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
                              <LikeButton remarkId={remark.id} />
                            </div>
                            <button
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
                              }}
                            >
                              回复
                            </button>
                          </div>
                          <div className="mt-5 space-y-8">
                            {comments
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
                          </div>
                        </div>
                      </div>
                    </Card>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
