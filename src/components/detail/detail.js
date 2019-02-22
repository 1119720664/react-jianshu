import React, { Component } from 'react'
import { DetailWrapper, Header, Content } from "./detail-style"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { LoadDetailContent } from "../../store/reduce/detailRedux"

class Detail extends Component {
    componentDidMount() {
        this.props.LoadDetailContent(this.props.match.params.id)
    }

    render() {
        let {title, content} = this.props;
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                <Content
                    dangerouslySetInnerHTML={{__html: this.props.content}}
                />
            </DetailWrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        title: state.detail.title,
        content: state.detail.content
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {LoadDetailContent}, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)

