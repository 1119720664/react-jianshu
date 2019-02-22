import React, { Component } from 'react'
import Topic from "../topic/topic"
import List from "../list/list"
import Writer from "../writer/writer"
import Recommend from "../recommend/recommend"
import { IndexWrapper, IndexLeft, IndexRight, BackTop } from "./index-style"
import { connect } from "react-redux"
import { ShowScrollorHide } from "../../store/reduce/homeRedux"
import { bindActionCreators } from "redux"

class Index extends Component {
    constructor(props) {
        super(props);
        this.handleScrollTop = this.handleScrollTop.bind(this)
    }

    handleScrollTop() {
        window.scrollTo(0, 0)
    }

    scroll() {
        window.addEventListener("scroll", () => {
            let viewHeight = document.documentElement.scrollTop
            if (viewHeight > 400) {
                this.props.ShowScrollorHide(true)
            } else {
                this.props.ShowScrollorHide(false)
            }
        })
    }

    componentDidMount() {
        this.scroll()
    }

    render() {
        let {showScroll} = this.props;
        return (
            <IndexWrapper>
                <IndexLeft>
                    <img className='banner-img' alt=''
                         src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
                    <Topic/>
                    <List />
                </IndexLeft>
                <IndexRight>
                    <Recommend/>
                    <Writer/>
                </IndexRight>
                {showScroll ? (<BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>) : null}
            </IndexWrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        showScroll: state.home.showScroll
    }
}

const mapDisPatchToProps = dispatch => {
    return bindActionCreators({ShowScrollorHide}, dispatch)
}
export default connect(mapStateToProps, mapDisPatchToProps)(Index)

