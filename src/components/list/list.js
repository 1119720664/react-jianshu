import React, { Component, Fragment } from 'react'
import { ListItem, ListInfo, LoadMore } from "./list-style"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { LoadListList } from "../../store/reduce/homeRedux"
import { Link } from "react-router-dom"

class List extends Component {
    componentDidMount() {
        this.props.LoadListList()
    }

    render() {
        let {articleList, LoadListList} = this.props;
        console.log(articleList)
        return (
            <Fragment>
                {articleList.map((item) => (
                    <Link to={`/detail/${item.id}`} key={item.id + Math.random() * 50}>
                        <ListItem>
                            <img className="pic"
                                 src={item.imgUrl}/>
                            <ListInfo>
                                <h3 className="title">{item.title}</h3>
                                <p className="desc">
                                    {item.desc}
                                </p>
                            </ListInfo>
                        </ListItem>
                    </Link>
                ))}
                <LoadMore onClick={() => LoadListList()}>加载更多</LoadMore>
            </Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        articleList: state.home.articleList
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({LoadListList}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(List)

