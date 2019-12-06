import React from "react";
import {ItemManContainer} from "./styled"
import { withRouter } from "react-router-dom";
import ItemHead  from "components/itemHead"
@withRouter
class ClassItemMan extends React.Component{
    constructor(){
        super()
        this.state={
            itemmenu:[
                {
                    itemImg:"https://bfs.biyao.com/group1/M00/D7/CF/rBACYV3GbvCATXtdAAx2Nkz39LY241_360x360.jpg",
                    name:"衬衫"
                },
                {
                    itemImg:"https://bfs.biyao.com/group1/M00/9E/45/rBACW12RfMuAFa6KAAxl2nAXLeo832_360x360.jpg",
                    name:"T恤"
                },
                {
                    itemImg:"https://bfs.biyao.com/group1/M00/95/3F/rBACYV2MGI6AIzNxAAO0yDX_cak499_360x360.jpg",
                    name:"针织衫"
                },
                {
                    itemImg:"https://bfs.biyao.com/group1/M00/94/F8/rBACW12LIiyAB083AAJzvGdgI1w381_360x360.jpg",
                    name:"卫衣"
                },
                {
                    itemImg:"https://bfs.biyao.com/group1/M00/DF/44/rBACVF3NLdmAQYeuAAiQJ3F5n5U037_360x360.jpg",
                    name:"POLO衫"
                },
                {
                    itemImg:"https://bfs.biyao.com/group1/M00/9C/99/rBACVF2Rl6OAQ5CzAARd-ZZ-wQE076_360x360.jpg",
                    name:"马甲"
                }
            ]
        }
    }
    render(){
        let {itemmenu} = this.state;
        return(
            <ItemManContainer>
                <ItemHead title="男装"/>
                <ul>
                    <li className="cateList-second">
                        <div className="list-hd-wrap aLinkJump">
                            <div className="list-hd flex">
                                <div className="list-hd-name escp">男士内搭</div>
                                <div className="list-hd-more">
                                    <span>更多</span>
                                    <i className="iconfont">&#xe74b;</i>
                                </div>
                            </div>
                        </div>
                        <div className="cateList">
                            {
                                    itemmenu.map((item,index)=>(
                                        <dl>
                                            <dt><img src={item.itemImg}/></dt>
                                            <dd className="escp-double">{item.name}</dd>
                                        </dl>
                                    ))
                            }
                        </div>
                    </li>
                </ul>
            </ItemManContainer>
        )
    }
   
}
export default ClassItemMan;