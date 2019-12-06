import React from "react";
import {RecommendsContainer} from "./styled"
import {mapStateToProps,mapDispatchToProps} from "./mapStore"
import {connect} from "react-redux";
import BscollCon from "common/bscroll"
@connect(mapStateToProps,mapDispatchToProps)
class Recommends extends React.Component{
    constructor(){
        super();
        this.pageIndex=1;
    }
    render(){
        let {recommends} = this.props;
        return(
            <BscollCon ref="scroll">
            <RecommendsContainer>
                <div class="recommend-title ">
                    <p class="title">为你推荐</p>
                    <div class="line"></div>
                </div>
                <div className="section-cateList">
                    {
                            recommends.map((item,index)=>(
                                 <div className="doubleRowList" key={index}>
                                        {
                                            item.data.map((child,idx)=>(
                                                <div className="module-list">
                                                   <a>
                                                       
                                                       <img src={child.image}/>
                                                       <dl id="shop-show">
                                                           <dt class="price">
                                                               <span>￥</span><span>{child.priceStr}</span>
                                                           </dt>
                                                           <dd class="labels">
                                                               <span>一起拍</span>
                                                           </dd>
                                                           <dd class="escp module-subtitle">{child.subtitle.split("|")[0]}</dd>
                                                           <dd class="escp module-title">{child.mainTitle}</dd>
                                                           <dd class="last-line">
                                                               <span class="comment">{child.thirdContent}</span>
                                                           </dd>
                                                       </dl>
                                                   </a>
                                               </div>
                                           ))
                                        }
                                </div>
                            ))
                    }
                   </div>

            </RecommendsContainer>
            </BscollCon>
        )
    }
    componentWillUpdate(){
        this.refs.scroll.handlefinishPullUp()
    }
    componentDidMount(){
        this.handlePageIndexAdd();
        this.refs.scroll.handlepullingUp(()=>{
            this.handlePageIndexAdd()
        })
    }
    handlePageIndexAdd(){
        let {pageId} = this.props;
        this.props.handleRecommends(this.pageIndex,pageId);
        this.pageIndex++;

    }
}

export default Recommends;