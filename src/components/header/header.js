import React, { Component, Fragment } from 'react'
import { Iconfont } from "../../common/iconfont/iconfont"
import { connect } from "react-redux"
import { toJS } from "immutable"
import { bindActionCreators } from "redux"
import { InputAnimate, handleChangePage, handleMouseEnter } from "../../store/reduce/reduce"
import { CSSTransition } from "react-transition-group"
import { Link } from "react-router-dom"
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from "./header-style"

class Header extends Component {
    abc = () => {

    }

    getListArea = (show) => {
        const {focused, page, totalPage, data, mouseIn, handleMouseEnter, handleChangePage} = this.props
        const jsList = data;
        const pageList = []
        for (let i = (page - 1) * 10; i < page * 10; i++) {
            pageList.push(<SearchInfoItem key={i}>{jsList[i]}</SearchInfoItem>)
        }
        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={() => {
                        handleMouseEnter(true)
                    }}
                    onMouseLeave={() => {
                        handleMouseEnter(false)
                    }}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={(ev) => {
                            handleChangePage(page, totalPage, this.spinIcon)
                        }}>
                            <i className="iconfont spin" ref={(icon) => {
                                this.spinIcon = icon
                            }
                            }>&#xe851;</i>
                            换一换
                        </SearchInfoSwitch>
                        <SearchInfoList>
                            {pageList}
                        </SearchInfoList>
                    </SearchInfoTitle>
                </SearchInfo>
            )
        }
    }

    render() {
        let {focused, InputAnimate, data, login} = this.props
        return (
            <Fragment>
                <Iconfont/>
                <HeaderWrapper>
                    <Logo/>
                    <Nav>
                        <NavItem className="left active">首页</NavItem>
                        <NavItem className="left">下载APP</NavItem>
                        <SearchWrapper>
                            <CSSTransition in={focused} timeout={200} classNames="slide">
                                <NavSearch onFocus={(ev) => {
                                    ev.stopPropagation();
                                    InputAnimate(focused)
                                }}
                                           onBlur={(ev) => {
                                               ev.stopPropagation();
                                               InputAnimate(focused)
                                           }}
                                           className={focused ? 'focused' : ''} onClick={this.abc}/>
                            </CSSTransition>
                            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe614;</i>
                            {this.getListArea(focused)}
                        </SearchWrapper>
                        {
                            login ? (
                                <NavItem className="right">退出</NavItem>
                            ) : (
                                <Link to={"/login"}>
                                    <NavItem className="right">登录</NavItem>
                                </Link>
                            )
                        }
                        <NavItem className="right">
                            <i className="iconfont spin">&#xe636;</i>
                        </NavItem>
                    </Nav>
                    <Addition>
                        <Link to={"/write"}>
                            <Button className="writting">
                                <i className="iconfont">&#xe615;</i>
                                写文章
                            </Button>
                        </Link>
                        <Button className="reg">注册</Button>
                    </Addition>
                </HeaderWrapper>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        focused: state.common.get("focused"),
        data: state.common.get("data"),
        page: state.common.get("page"),
        mouseIn: state.common.get("mouseIn"),
        totalPage: state.common.get("totalPage"),
        login: state.login.login
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({InputAnimate, handleChangePage, handleMouseEnter}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

