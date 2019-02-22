import { fromJS } from "immutable"
import axios from "axios"

const initialState = fromJS({
    data: [],
    focused: false,
    page: 1,
    totalPage: 1,
    mouseIn: false
})

const INPUT_ANIMATE = "INPUT_ANIMATE";
const LOAD_LIST = "LOAD_LIST";
const CHANGE_PAGE = "CHANGE_PAGE";
const MOUSE_ENTER = "MOUSE_ENTER"

export const LoadList = () => (dispatch) => {
    return axios.get("/api/headerList.json").then(res => {
        if (res.data.success) {
            dispatch({
                type: LOAD_LIST,
                data: res.data.data,
                totalPage: Math.ceil(res.data.data.length / 10)
            })
        }
    })
}
export const InputAnimate = (focused) => (dispatch, getState) => {
    console.log(getState())
    let {common: {size}} = getState()
    dispatch(LoadList())
    dispatch({
        type: INPUT_ANIMATE,
        focused: !focused
    })
}

export const handleMouseEnter = (mouseIn) => (dispatch) => {
    dispatch({
        type: MOUSE_ENTER,
        mouseIn
    })
}

export const handleChangePage = (page, totalPage, spin) => (dispatch) => {
    spin.style.transform = "rotate(360deg)";
    if (page < totalPage) {
        dispatch({
            type: CHANGE_PAGE,
            page: page + 1,
        })
        return
    }
    dispatch({
        type: CHANGE_PAGE,
        page: 1,
    })
}

export const commonReduce = (state = initialState, action) => {
    let {type, focused, data, totalPage, page, mouseIn} = action
    switch (type) {
        case LOAD_LIST:
            return state.set('data', data).set('totalPage', totalPage)
        case INPUT_ANIMATE:
            return state.set('focused', focused)
        case CHANGE_PAGE:
            return state.set('page', page)
        case MOUSE_ENTER:
            return state.set('mouseIn', mouseIn)
        default:
            return state
    }
}
