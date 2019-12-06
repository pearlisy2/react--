import React from "react";
import Bscoll from "better-scroll";
import {Bswrapper} from "./styled"

class BscollCon extends React.Component{
    render(){
        return(
            <Bswrapper ref="wrapper">
                {this.props.children}
            </Bswrapper>
        )
    }
    componentDidMount(){
        this.scroll = new Bscoll(this.refs.wrapper,{
            pullUpLoad:true
        })
    }
    handlepullingUp(callback){
        this.scroll.on("pullingUp",()=>{
            callback()
        })
    }
    handlefinishPullUp(){
        this.scroll.finishPullUp();
        this.scroll.refresh();

    }
}
export default BscollCon;