import React,{Component} from "react";
import {PageContainer} from "common/styled"
import MineHead from "components/mineHead"
import {MineStyle} from "../pagesStyled/styled"
import Recommends from "components/recommends"
export default class Mine extends Component{
    constructor(){
        super();
        this.state={
            operate_items:[
                {
                    image:"https://static.biyao.com/mnew/img/master/personalCenter/icon_order_pay@2x_ad67213.png",
                    name:"待付款",
                    unpaid:""
                },
                {
                    image:"https://static.biyao.com/mnew/img/master/personalCenter/icon_order_receive@2x_1a3f235.png",
                    name:"生产/待收货",
                    unpaid:""
                },
                {
                    image:"https://static.biyao.com/mnew/img/master/personalCenter/icon_order_evaluate@2x_94d42f6.png",
                    name:"待评价",
                    unpaid:""
                },
                {
                    image:"https://static.biyao.com/mnew/img/master/personalCenter/icon_order_refund@2x_6f9c99c.png",
                    name:"退款/售后",
                    unpaid:""
                },
            ]
        }
    }
    render(){
        let {operate_items} = this.state;
        return(
            <PageContainer>
                <MineStyle>
                <MineHead/>
                <div className="order-panel">
                    <div className="order-all">
                        
                            <img src="https://static.biyao.com/mnew/img/master/personalCenter/icon_order_full@2x_a1ea9ec.png"/>
                            <p className="all">全部订单</p>
                            <p className="orders">含拼团订单</p>
                      
                    </div>
                    <div className="order-line">
                        <img src="https://static.biyao.com/mnew/img/master/personalCenter/img_line@2x_90a5483.png"/>
                    </div>
                    <ul className="operate_items">
                        {
                            operate_items.map((item,index)=>(
                                <li key={index}>
                                     <a href="">
                                        <img src={item.image}/>
                                            <p>{item.name}</p>
                                        <span className="unpaid none"></span>
                                    </a>
                                </li>
                            ))
                        }
		            </ul>
                </div>
                <div className="entry-wrapper">
                    <ul>
                        <li>
                            <div className="entry-icon">
                                <img className="icon" src="https://bfs.biyao.com/group1/M00/16/F7/rBACW10kgxmATVnNAAAPCZYRFq4043.png" />
                                <span className="red-point"></span>
                            </div>
                            <h4 className="entry-text">每日挖宝</h4>
                        </li>
                        <li>
                            <div className="entry-icon">
                                <img className="icon" src="https://bfs.biyao.com/group1/M00/DB/73/rBACVFzjYciAbYPRAAAJ-eOVv-k920.png" />
                            </div>
                            <h4 className="entry-text">定制咖啡</h4>
                        </li>
                    </ul>
                </div>
                <Recommends/>     
                </MineStyle>
            </PageContainer>
        )
    }
}