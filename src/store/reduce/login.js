import axios from "axios"

const initialState = {
    login: false
}

const LOGIN_ACCOUNT = "LOGIN_ACCOUNT"

export const LoginSubmit = (account, password) => dispatch => {
    axios.get("/api/login.json", {params: {account, password}}).then(res => {
        if (res.data.success) {
            dispatch({
                type: LOGIN_ACCOUNT,
                login: true
            })
        }else{
            alert("登录失败")
        }
    })
}


export const loginReduce = (state = initialState, action) => {
    let {type, login} = action
    switch (type) {
        case LOGIN_ACCOUNT:
            return {...state, login}
        default:
            return state
    }
}


