import React from "react";
import { HotListBox } from "./hotListStyled"
import {connect} from "react-redux";
import BscollCon from "common/bscroll"
import {mapStateToProps,mapDispatchToProps} from "./mapState"
@connect(mapStateToProps,mapDispatchToProps)
class HotList extends React.Component {
    constructor(){
        super();
        this.pageIndex=2;
    }
    render() {
        let { floorList} =this.props;
        console.log(floorList)
        return (
            <BscollCon ref="scroll">
            <HotListBox>
                <div className="titleline">
                    <div className="titleline-box">
                        <a href="#">
                            <span className="mainTitle">热销 · 好评</span>
                            <p >用户购买热度实时推荐</p></a>
                    </div>
                </div>
                {
                        floorList.map((item,index)=>(
                            <div className="doubleRowList" key={index}>
                                {
                                    item.data.map((child,idx)=>(
                                        <div className="module-item" key={idx}>
                                            <a href="#">
                                                <img src={child.image}/>
                                                <dl>
                                                    <dt className="price"><span>￥</span><span>{child.priceStr}</span></dt>
                                                    <dd className="labels"><span>一起拼</span></dd>
                                                    <dd className="escp module-subtitle">{child.subtitle.split("|")[0]}</dd>
                                                    <dd className="escp module-title">{child.mainTitle}</dd>
                                                    <dd className="last-line"><span className="comment">{child.thirdContent}</span></dd>
                                                </dl>
                                            </a>
                                        </div>
                                    ))
                                }
                            </div> 
                        ))
                }
            </HotListBox>
            </BscollCon>
        )
    }
    componentWillUpdate(){
        this.refs.scroll.handlefinishPullUp()
    }
    componentDidMount(){
        this.handlePageAdd()
        //上拉加载
        this.refs.scroll.handlepullingUp(()=>{
            this.handlePageAdd()
        })
    }
    handlePageAdd(){
        let {pageId}= this.props;
        this.props.handleAsyncHotlist(this.pageIndex,pageId);
        this.pageIndex++;
    }
}

export default HotList;