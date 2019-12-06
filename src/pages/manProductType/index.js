import React from "react";
import {ProTypeContainer} from "./styled"
import ListHeader from "components/listHeader";
import ChildHeader from "components/childHeader"
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {mapStateToProps,mapDispatchToProps} from "./mapstore"
@connect(mapStateToProps,mapDispatchToProps)
@withRouter
class ProType extends React.Component{
    constructor(){
        super();
        this.state={
            onclickIndex:0
        }
    }
    render(){
        let {productList} = this.props;
        console.log(productList)
        return(
            <ProTypeContainer>
                <ListHeader title="男装"/>
                <ChildHeader />
                {
                    productList.map((item,index)=>(
                        <div className="doubleRowList" key={index}>          
                            {
                                item.data.map((child,idx)=>(
                                    <div className="module-item" key={idx}>
                                        <a href="#">
                                            <img src={child.image} />
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
            </ProTypeContainer>
        )
    }
    componentDidMount(){
       this.handleAsyncList()
    }
    handleAsyncList(){
        let {categoryId} = this.props.match.params;
        let {onclickIndex} = this.state;
        this.props.handleproductList(categoryId,onclickIndex)

    }
}

export default ProType;