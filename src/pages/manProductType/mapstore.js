import {productAsyncLAction} from "actions/hotlist/actionCreator"
export const mapStateToProps = (state)=>({
    productList:state.home.productList
})

export const mapDispatchToProps = (dispatch)=>({
    handleproductList(categoryId,onclickIndex){
        dispatch(productAsyncLAction(categoryId,onclickIndex))
    }
})