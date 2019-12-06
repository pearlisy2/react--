import React from "react";
import { withRouter } from "react-router-dom";
import {ItemWomonCon} from "./styled"
import ItemHead from "components/itemHead"
@withRouter
class ClassItemWomon extends React.Component{
    constructor(){
        super()
        this.state={
            itemmenu:[
                {
                    itemImg:"https://bfs.biyao.com/group1/M00/E1/C0/rBACYV3ONdSANesRAAW_cYjq0NQ340_360x360.jpg",
                    name:"羊绒羊毛衫"
                },
                {
                    itemImg:"https://bfs.biyao.com/group1/M00/BA/2C/rBACW12tB4WAHNDNAAPqphXE4aQ313_360x360.jpg",
                    name:"针织衫"
                },
                {
                    itemImg:"https://bfs.biyao.com/group1/M00/B8/7D/rBACVF2tMkyAQ5eMAAfuXCJhLjs303_360x360.jpg",
                    name:"卫衣"
                },
                {
                    itemImg:"https://bfs.biyao.com/group1/M00/E9/59/rBACYV3U5o6AJSy-AAZlJjVXz2Q403_360x360.jpg",
                    name:"连衣裙"
                },
                {
                    itemImg:"https://bfs.biyao.com/group1/M00/E0/57/rBACVF3OMs2AJvBUAAa8Qoy6jgo734_360x360.jpg",
                    name:"T恤/吊带"
                },
                {
                    itemImg:"https://bfs.biyao.com/group1/M00/7C/E8/rBACYV14TcKAYvueAAbx3pxUAZc851_360x360.jpg",
                    name:"衬衫/雪纺"
                }
            ]
        }
    }
    render(){
        let { itemmenu} = this.state;
        return(
            <ItemWomonCon>
                 <ItemHead title="女装"/>
                 <ul>
                    <li className="cateList-second">
                        <div className="list-hd-wrap aLinkJump">
                            <div className="list-hd flex">
                                <div className="list-hd-name escp">女士内搭</div>
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
            </ItemWomonCon>
        )
    }
    componentDidMount(){
        // this.props.location.search()
    }
}
export default ClassItemWomon;