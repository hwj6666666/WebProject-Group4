import { createSlice } from "@reduxjs/toolkit";
const objectStore = createSlice({
    name: "object",
    initialState: {
        object: [
            {
                name: "一餐",
                description: `一餐位于学生公寓西一区北面，距离包玉刚图书馆、上中下院教学楼较近。
                由于靠近教学楼，一餐在工作日饭点人流量很大，早餐种类丰富，正餐时段
                一楼包含川味窗口、陕西美食、养生锅（推荐！飘香鸡锅不错）、五芳斋、
                糖水粥铺等窗口，还开设了低脂、低糖、少油、无碘盐等特殊窗口。二楼则
                是教工餐厅和自选餐厅。在一餐附近有清真餐厅、麦当劳、Timo咖啡、思源
                面包、蔬果每日水果店等，十分便利。`,
                id: 0,
            },
            // 更多评价对象...
        ],
        len: 1
    },
    reducers: {
        addObject(state, action) {
            state.object.push(action.payload);
            state.len++
        },
    },
});

const { addObject } = objectStore.actions;

const ObjectReducer = objectStore.reducer;

export { addObject };

export default ObjectReducer;