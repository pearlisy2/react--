import React, { Component } from "react";
import { Main } from "../pagesStyled/styled";
import { Carousel, WingBlank } from 'antd-mobile';
import HotList from "components/hotList"
export default class Hot extends Component {
    constructor() {
        super();
        this.state = {
            imgHeight: 176,
            slideIndex: 2,
            data: [
                {
                    img: 'https://bfs.biyao.com/group1/M00/ED/FC/rBACW13XT-yAWmlIAAB0delGn1I264.jpg',
                    Imgid: 1
                },
                {
                    img:  'https://bfs.biyao.com/group1/M00/DD/07/rBACVF3LrSyANDmIAABFUNfUoFA041.jpg',
                    Imgid: 2
                },
                {
                    img: 'https://bfs.biyao.com/group1/M00/E0/72/rBACW13Mx-iALGHeAAB5lhfwOEc992.jpg',
                    Imgid: 3
                },
                {
                    img:  'https://bfs.biyao.com/group1/M00/E0/0F/rBACVF3OC9GAMootAAB7aMe-fP8230.jpg',
                    Imgid:4
                },
                {
                    img: 'https://bfs.biyao.com/group1/M00/E0/72/rBACW13Mx-iALGHeAAB5lhfwOEc992.jpg',
                    Imgid: 5
                },   
             ],
             title: [
                {
                    item_name: "大牌品质",
                    icon: "\ue637"
                },
                {
                    item_name: "工厂价格",
                    icon: "\ue637"
                },
                {
                    item_name: "分期支付",
                    icon: "\ue637"
                },
                {
                    item_name: "顺丰包邮",
                    icon: "\ue637"
                },
                {
                    item_name: "无忧退款",
                }
            ],
            operate: [
                {
                    operateImg: "https://bfs.biyao.com/group1/M00/31/25/rBACVF0r9IyASJu7AAAW-6wj7Nk372.png",
                    operateName: "品质男装"
                },
                {
                    operateImg: "https://bfs.biyao.com/group1/M00/E6/D1/rBACVF3UCaOAP2MkAAAWz5ryUcQ991.png",
                    operateName: "定制咖啡",
                },
                {
                    operateImg: "https://bfs.biyao.com/group1/M00/A8/EE/rBACW12dTVOAKsBtAAATob9apjA617.png",
                    operateName: "每日签到"
                },
                {
                    operateImg: "https://bfs.biyao.com/group1/M00/DF/CE/rBACW13MH-iAL374AAAXEsKWt18556.png",
                    operateName: "每日上新"
                },
                {
                    operateImg: "https://bfs.biyao.com/group1/M00/05/20/rBACYV0aLnqAFlE6AAAWlDpv23M363.png",
                    operateName: "健康正餐"
                }
            ]
        }
    }
    componentDidUpdate() {
        if (this.state.slideIndex !== this.state.data.length - 1) {
            this.setState({ slideIndex: this.state.data.length - 1 });
        }
    }
    render() {
        let { title, operate } = this.state;
        return (
            <Main>
                <WingBlank>
                    <Carousel
                        autoplay={true}
                        infinite
                    >
                        {this.state.data.map((item, val) => (
                            <a
                                key={item.Imgid}
                                href="/home/hot"
                                style={{ display: 'block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={item.img}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>
                <div className="guarantee_g">
                    <p>
                        {
                            title.map((item, index) => (
                                <a key={index}><span>{item.item_name}</span><i className="iconfont" >{item.icon}</i></a>
                            ))
                        }
                    </p>
                </div>
                <div className="operate_g">
                    <ul>
                        {
                            operate.map((item,index) => (
                                <li key={index}>
                                    <img className="bg" src={item.operateImg} />
                                    <p>{item.operateName}</p>
                                </li>
                            ))
                        }

                    </ul>
                </div>
                <div className="blockline"></div>
                <HotList/>
            </Main>
        )
    }
}