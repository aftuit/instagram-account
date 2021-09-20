import { INS_ACCOUNT } from "../../tools/const";
const initialState = {
    comments: [],
    post_title: "",
    url: ""
}

export const accountReducer = (state=initialState, action) => {
    if(action.type===INS_ACCOUNT){
        return{
            ...state,
            ...action.payload
        }
    }
    return state
}