import React from "react";
import {NavDrop} from "../head/headerStyled"
class NavDown extends React.Component{
    constructor(){
        super();
        this.state={
            item:[ 
                {
                    title:"热门"
                },
                {
                    title: "男装",
                    categoryId: 279
                },
                {
                    title: "女装",
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
            activeIndex:0,
        }
    }
    render() {
        let {item,activeIndex} = this.state;
        return(
            <NavDrop>
                <div className="nav_title">
                    <p>全部频道</p>
                    <em className="iconfont" onClick={this.handleChange.bind(this)}>&#xe797;</em>
                </div>
               <ul className="items">
                  {
                      item.map((item,index)=>(
                      <li key={index} onClick={this.handleToChange.bind(this,index,item.categoryId)} className={activeIndex===index?'active':''}>{item.title}</li>
                      ))
                  }
               </ul>
            </NavDrop>
        )
    }
    handleChange(){
        this.props.handleToggle(true);
    }
    handleToChange(index,categoryId){
        this.setState({
            activeIndex:index
        })
        this.props.handleGetCageory(categoryId,index)
    }
}

export default NavDown;