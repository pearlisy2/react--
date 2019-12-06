import React from "react";
import {HeaderBox} from "./headerStyled"
import NavDown from "../navDown";
import NavNodropBox from "../navNodrop"
import {withRouter} from "react-router-dom";
@withRouter
class Header extends React.Component{
    constructor(){
        super();
        this.state={
            flag:-1
        }
    }
    render(){
        let {flag} = this.state;
        return(
            <HeaderBox>
                <div className="header_fix">
                   <div  className="header_search">
                        <i className="iconfont">&#xe6a2;</i>
                        <span onClick={this.handleTo.bind(this)}>请输入要搜索的商品</span>
                   </div>
                  {flag?<NavNodropBox handleToggle={this.handleToggle.bind(this)}/>:<NavDown handleToggle={this.handleToggle.bind(this)}/> }
                </div>
            </HeaderBox>
        )
    }
    handleToggle(flag){
        this.setState({
            flag
        })
    }
    handleTo(){
        this.props.history.push("/search")
    }
}

export default Header;