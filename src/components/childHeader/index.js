import React from "react";
import {ChildHead} from "../manList/styled"
class ChildHeader extends React.Component{
    constructor(){
        super();
        this.state={
            childNav:[
                {
                    navName:"热门"
                },
                {
                    navName:"销量"
                },
                {
                    navName:"上新"
                },
                {
                    navName:"价格",
                    icon:"\ue620"
                },
                {
                    navName:"筛选",
                    icon:"\ueb97"
                }
            ]
        }
    }
    render(){
        let { childNav} =this.state;
        return(
            <ChildHead>
                <ul>
                    {
                        childNav.map((item,index)=>(
                        <li key={index} className="goodsNav">
                                <span>{item.navName}</span><i className="iconfont">{item.icon}</i>
                        </li>
                        ))
                   }
                </ul>
            </ChildHead>
        )
    }
}

export default ChildHeader;