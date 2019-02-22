import React, { Component } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { LoadTopicList } from "../../store/reduce/homeRedux"
import { TopicWrapper, TopicItem } from "./topic-style"
import { Link } from "react-router-dom"

class Topic extends Component {
    componentDidMount() {
        this.props.LoadTopicList()
    }

    render() {
        let {topic} = this.props;
        return (
            <TopicWrapper>
                {
                    topic.map(item => (
                        <TopicItem key={item.id}>
                            <img
                                className='topic-pic'
                                src={item.imgUrl}
                                alt=''
                            />
                            <span>{item.title}</span>
                        </TopicItem>
                    ))
                }
            </TopicWrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        topic: state.home.topicList
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({LoadTopicList}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic)

