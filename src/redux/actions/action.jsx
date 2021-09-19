
import { INS_ACCOUNT } from "../../tools/const"
export function updateState(data) {
    return{
        type: INS_ACCOUNT,
        payload: data
    }
}


export const getComments = (post_comments, title, id, history) => (dispatch, getState) => {
    dispatch(updateState({comments: [...post_comments], post_title: title, url: id}))
    history.push("/comments/" + getState().instagram.url)
}

