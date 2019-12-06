import React,{Component} from "react";
import {PageContainer} from "common/styled"
import { CartStyle } from "../pagesStyled/styled"
import {withRouter} from "react-router-dom";
import ListHeader from "components/listHeader"
@withRouter
 class Cart extends Component{
    render(){
        return(
            <PageContainer>
                <CartStyle>
                   <ListHeader title="购物车"/>
                    <div className="shopcar-empty" >
                        <img src="https://static.biyao.com/mnew/img/null/shopcar_6b91960.png" />
                        <h4 className="empty-til">购物车还是空的，赶紧行动吧！</h4>
                        <a href="/">去逛逛</a>
                    </div>
                </CartStyle>
            </PageContainer>
        )
    }
   
}

export default Cart;
