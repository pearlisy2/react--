import React,{Component} from "react";
import PropTypes from "prop-types"
import {CommonHeadContainer} from "./styled";
import {withRouter} from "react-router-dom";
@withRouter
class ListHeader extends Component{
    render(){
        return(
            <CommonHeadContainer>
                <div className="icon">
                    <i className="iconfont" onClick={this.handleBackTo.bind(this)}>&#xe6b3;</i>
                </div>
                <p>{this.props.title}</p>
            </CommonHeadContainer>   
        )
    }
    handleBackTo(){
        this.props.history.push("/home")
    }
}
ListHeader.defaultProps = {
    title:"购物车"
}
ListHeader.propTypes = {
    title:PropTypes.string
}
export default ListHeader;

    