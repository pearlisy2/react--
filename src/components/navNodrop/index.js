import React from "react";
import {NavNodrop} from "../head/headerStyled";
import {withRouter} from "react-router-dom";
@withRouter

class NavNodropBox extends React.Component {
    constructor(){
        super();
        this.state={
            list:[
                {
                    name:"热门",
                    path:"/home/hot",
                },
                {
                    name:"男装",
                    path:"/home/man",
                    categoryId: 279
                },
                {
                    name:"女装",
                    path:"/home/woman",
                    categoryId: 294
                },
                {
                    name:"美妆",
                    path:"/home/beauty",
                    categoryId: 119
                },
                {
                    name:"个护",
                    categoryId: 724
                },
                {
                    name:"内衣服饰",
                    categoryId: 339
                },
            ],
            activeIndex:0,
        }
    }
    render() {
        let {list,activeIndex} = this.state;
        return (
            <NavNodrop >
                <ul>
                    {
                        list.map((item, index) => (
                           <li key={index} onClick={this.handleClick.bind(this,item,index)} >{item.name}</li>
                        ))
                    }
                </ul>
                <i className="iconfont" onClick={this.handleExchange.bind(this)}>&#xe615;</i>
            </NavNodrop>
        )
    }
    handleClick(item,index){
        this.setState({
            activeIndex:item.index
        })
        var onclickIndex = index-1
        this.props.history.push(item.path+"/"+item.categoryId+"/"+onclickIndex)
    }
    handleExchange(){
        this.props.handleToggle(false);
    }
}

export default NavNodropBox;