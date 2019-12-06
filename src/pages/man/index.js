import React,{Component} from "react";
import { ManList } from "../pagesStyled/styled";
import ManGoods from "components/manList"
import {mapStateToProps,mapDispatchToProps} from "./mapStore"
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
@withRouter
@connect(mapStateToProps,mapDispatchToProps)
 class Man extends Component{
    render(){
        let {manProduct,manClassfiy} = this.props;
        return(
            <ManList>
                 <div className="home-three-nav">
                    <ul className="type4 flex flex-pack-justify">
                        {
                            manClassfiy.map((item,index)=>(
                                 <li className="aLinkJump" key={index} onClick={this.handleSelect.bind(this,item)}>
                                    <div className="content">
                                        <img src={item.categoryImg} alt="" />
                                        <p>{item.categoryName}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
               <ManGoods manProduct={manProduct}/>
            </ManList>
        )
    }
    componentDidMount(){
        let {categoryId,onclickIndex} = this.props.match.params;
        console.log(this.props)
        this.props.handleGetManList(279,0)
    }
    handleSelect(item){
        this.props.history.push("/manProductType/"+item.categoryId+"/"+item.stp+"/"+item.priorityProductId)
    }
}

export default Man;