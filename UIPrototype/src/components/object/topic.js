//这个组件是话题页面的每一个话题，包含话题名称，最热打分，以及实时热度
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHotjar } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getTop3 } from "@/apis/object";

const Topic = ({ topic }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const id = topic.id;

    const truncateDescription = (description, maxLength) => {
        if (!description) return "";
        if (description.length <= maxLength) {
            return description;
        } else {
            return description.substring(0, maxLength) + "············";
        }
    };

    useEffect(() => {
    }, [id])

    return (

        <div
            className="flex flex-row bg-header rounded-lg  w-full cursor-pointer text-base"
            onClick={() => navigate(`/topic/${id}`)}
        ><div className="flex flex-col mb-2">
                <div className="flex flex-row mb-2">
                    <img
                        className="w-24 h-24 ml-8 mr-5 mt-10 mb-3 rounded"
                        src={topic.base64}
                        alt="restaurantPhoto"
                    />
                    <div className="flex-grow">
                        <div className="flex flex-row items-end justify-between">
                            <div>
                                <h2 className="text-2xl mt-10 mr-10 font-bold">{topic.title}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topic;
