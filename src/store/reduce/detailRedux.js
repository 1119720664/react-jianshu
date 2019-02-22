import axios from "axios"

const initialState = {
    title: "",
    content: ""
}

const LOAD_DETAIL_CONTENT = "LOAD_DETAIL_CONTENT"

export const LoadDetailContent = (id) => dispatch => {
    axios.get("/api/detail.json", {params: {id}}).then(res => {
        if (res.data.success) {
            dispatch({
                type: LOAD_DETAIL_CONTENT,
                data: res.data.data,
            })
        }
    })
}


export const detailReduce = (state = initialState, action) => {
    let {type, data} = action
    switch (type) {
        case LOAD_DETAIL_CONTENT:
            console.log({...state, title: data.title, content: data.content})
            return {...state, title: data.title, content: data.content}
        default:
            return state
    }
}

