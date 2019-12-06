import React, { Component } from "react";
import { PageContainer } from "common/styled";
import { ClassfiyContainer } from "./styled"
import { withRouter } from "react-router-dom";

@withRouter
class Classfiy extends Component {
    constructor() {
        super()
        this.state = {
            page_nav: [
                {
                    title: "男装",
                    path:"/classfiy/classItemMan",
                    categoryId: 279
                },
                {
                    title: "女装",
                    path:"/classfiy/classItemWomon",
                    categoryId: 294
                },
                {
                    title: "美妆",
                    path:"/classfiy/classItemMan",
                    categoryId: 119
                },
                {
                    title: "个护",
                    categoryId: 724
                },
                {
                    title: "内衣配饰",
                    categoryId: 339
                },
                {
                    title: "家纺",
                    categoryId: 355
                },
                {
                    title: "餐厨",
                    categoryId: 51
                },
                {
                    title: "鞋靴",
                    categoryId: 35
                },
                {
                    title: "饮食",
                    categoryId: 627
                },
                {
                    title: "箱包",
                    categoryId: 153
                },

                {
                    title: "母婴",
                    categoryId: 391
                },
                {
                    title: "眼镜",
                    categoryId: 122
                },
                {
                    title: "运动",
                    categoryId: 39
                },
                {
                    title: "数码",
                    categoryId: 223
                },
                {
                    title: "家装",
                    categoryId: 369
                },

                {
                    title: "生鲜直供",
                    categoryId: 652
                },
                {
                    title: "汽配",
                    categoryId: 429
                },
                {
                    title: "咖啡",
                    categoryId: 621
                },
            ],
            flag:false

        }
    }
    render() {
        let { page_nav ,flag} = this.state;
        return (
            <PageContainer>
                <ClassfiyContainer>
                    <div className="classfiy_header">
                        <div className="header_search">
                            <i className="iconfont">&#xe6a2;</i>
                            <span onClick={this.handleTo.bind(this)}>请输入要搜索的商品</span>
                        </div>
                    </div>

                    <div className="page-container">
                        <div className="page-left">
                            <ul>
                                {
                                    page_nav.map((item, index) => (
                                        <li key={index} onClick={this.handleToItem.bind(this,item.path,item.categoryId)} >{item.title}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    
                </ClassfiyContainer>


            </PageContainer>
        )
    }
    handleTo() {
        this.props.history.push("/search")
    }
    handleToItem(path,categoryId) {
        this.props.history.push(path+"?categoryId="+categoryId)
       
    }                          
}
export default Classfiy;