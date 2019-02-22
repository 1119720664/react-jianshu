import React, { Component, PureComponent } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { LoginWrapper, LoginBox, Input, Button } from "./login-styles"
import { LoginSubmit } from "../../store/reduce/login"
import { Redirect } from "react-router-dom"

class Login extends PureComponent {
    render() {
        let {login, LoginSubmit} = this.props
        return (
            <LoginWrapper>
                {login ? (<Redirect to={"/"}/>) : null}
                <LoginBox>
                    <Input placeholder="账号" ref={(input) => {
                        this.account = input
                    }}/>
                    <Input placeholder="密码" ref={(password) => this.password = password}/>
                    <Button onClick={() => LoginSubmit(this.account.value, this.password.value)}>登录</Button>
                </LoginBox>
            </LoginWrapper>
        )
    }
}

const mapStateToProps = state => {
    return {login: state.login.login}
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({LoginSubmit}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

