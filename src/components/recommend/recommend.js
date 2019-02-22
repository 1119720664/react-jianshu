import React, { Component } from 'react'
import { RecommendWrapper, RecommendItem } from "./recomment-style"
import { connect } from "react-redux";
import { bindActionCreators } from "redux"
import { LoadRecommendList } from "../../store/reduce/homeRedux"


class Recommend extends Component {
    componentDidMount() {
        this.props.LoadRecommendList()
    }

    render() {
        let {recommendList} = this.props;
        return (
            <RecommendWrapper>
                {recommendList.map(item => (
                    <RecommendItem imgUrl={item.imgUrl} key={item.id}/>
                ))}
            </RecommendWrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        recommendList: state.home.recommendList
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({LoadRecommendList}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend)

