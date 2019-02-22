import React, { Component, Fragment } from 'react';
import { GlobalStyle } from './common/css/reset';
import Header from "./components/header/header"
import Index from "./components/index/index"
import Detail from "./components/detail/detail"
import Login from "./components/login/login"
import Write from "./components/auth/auth"
import { BrowserRouter, Route ,Switch} from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store/store"

/*异步加载组件的使用*/
class App extends Component {
    render() {
        return (
            <Fragment>
                <GlobalStyle/>
                <Provider store={store}>
                    <Fragment>
                        <BrowserRouter>
                            <div>
                                <Header/>
                                <Switch>
                                    <Route exact path="/" component={Index}/>
                                    <Route exact path="/login" component={Login}/>
                                    <Route exact path="/write" component={Write}/>
                                    <Route exact path="/detail/:id" component={Detail}/>
                                </Switch>
                            </div>
                        </BrowserRouter>
                    </Fragment>
                </Provider>
            </Fragment>
        );
    }
}

export default App;
