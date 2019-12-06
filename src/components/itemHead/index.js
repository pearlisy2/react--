import React from "react";
import {ItemHeadCon} from "./styled";
import PropTypes from "prop-types"
class ItemHead extends React.Component{
    render(){
        return(
            <ItemHeadCon>
                <div className="head">
                    <div className="first-cateList-name-before"></div>
                    <p>{this.props.title}</p>
                    <div className="first-cateList-name-after"></div>
                </div>
            </ItemHeadCon>
        )
    }
}
ItemHead.defaultProps = {
    title:"男装"
}
ItemHead.propTypes = {
    title:PropTypes.string
}
export default ItemHead;