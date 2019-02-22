import { createStore, applyMiddleware, compose, combineReducers } from "redux"
import { commonReduce } from "./reduce/reduce"
import { homeReduce } from "./reduce/homeRedux"
import { detailReduce } from "./reduce/detailRedux"
import { loginReduce } from "./reduce/login"
import thunk from "redux-thunk"
const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f => f;

const reducer = combineReducers({
    common: commonReduce,
    home: homeReduce,
    detail: detailReduce,
    login: loginReduce
});

const storeEnhancers = compose(
    applyMiddleware(thunk),
    reduxDevtools,
);
export default createStore(reducer, {}, storeEnhancers);



