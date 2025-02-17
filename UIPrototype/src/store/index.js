//组合子模块，导出store实例
import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./modules/user";
import loginReducer from "./modules/loginInfo";
import remarkReducer from "./modules/remark";
import topicReducer from "./modules/topic";
import ObjectReducer from "./modules/object";
import classReducer from "./modules/class";
import commentReducer from "./modules/comment";

export default configureStore({
    reducer:{
        user:userReducer,
        login:loginReducer,
        remark:remarkReducer,
        topic:topicReducer,
        object:ObjectReducer,
        class:classReducer,
        comment:commentReducer
    }
})

