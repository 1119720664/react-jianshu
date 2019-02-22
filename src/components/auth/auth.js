import React, { Component, PureComponent } from 'react'
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

class Write extends PureComponent {
    render() {
        const {login} = this.props
        if (login) {
            return (
                <div>写文章页面</div>
            )
        } else {
            return (<Redirect to="/login"/>)
        }
    }
}

const mapStateToProps = state => {
    return {login: state.login.login}
}

export default connect(mapStateToProps, null)(Write)


