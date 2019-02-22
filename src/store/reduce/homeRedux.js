import axios from "axios"

const initialState = {
    topicList: [],
    articleList: [],
    recommendList: [],
    showScroll: false
}

const LOAD_TOPIC_LIST = "LOAD_TOPIC_LIST"
const LOAD_MENU_LIST = "LOAD_MENU_LIST"
const LOAD_RECOMMEND_LIST = "LOAD_RECOMMEND_LIST"
const SHOW_SCROLL = "SHOW_SCROLL"


export const LoadTopicList = () => dispatch => {
    Load_Data().then(res => {
        if (res.data.success) {
            dispatch({
                type: LOAD_TOPIC_LIST,
                topicList: res.data.data.topicList
            })
        }
    })
}

export const LoadListList = () => dispatch => {
    Load_Data().then(res => {
        console.log(res.data.data.articleList)
        if (res.data.success) {
            dispatch({
                type: LOAD_MENU_LIST,
                articleList: res.data.data.articleList
            })
        }
    })
}

export const LoadRecommendList = () => dispatch => {
    Load_Data().then(res => {
        if (res.data.success) {
            dispatch({
                type: LOAD_RECOMMEND_LIST,
                recommendList: res.data.data.recommendList
            })
        }
    })
}

export const ShowScrollorHide = (showScroll) => dispatch => {
    dispatch({
        type: SHOW_SCROLL,
        showScroll
    })
}


async function Load_Data() {
    return await axios.get("/api/home.json")
}

export const homeReduce = (state = initialState, action) => {
    let {type, topicList, articleList, recommendList, showScroll} = action
    switch (type) {
        case LOAD_TOPIC_LIST:
            return {...state, topicList}
        case LOAD_MENU_LIST:
            return {...state, articleList: [...state.articleList, ...articleList]}
        case LOAD_RECOMMEND_LIST:
            return {...state, recommendList}
        case SHOW_SCROLL:
            return {...state, showScroll}
        default:
            return state
    }
}
