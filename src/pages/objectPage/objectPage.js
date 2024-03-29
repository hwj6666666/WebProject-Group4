import React from "react";
import Header from "../headerPage";
import { useSelector } from "react-redux";
import hotTopic from "@/components/object/hotTopic";
import Object from "@/components/object/object";


export const ObjectPage = () => {

	return (
    <div className="min-h-screen bg-biligrey" >
		<div className="fixed w-full z-50"><Header/></div>
		<div className="fixed top-100 right-100"><hotTopic/></div>
		<div className=""><Object/></div>
	</div>
	);
}