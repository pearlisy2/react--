import {ManCateProductsAction} from "actions/hotlist/actionCreator"
export const mapStateToProps = (state)=>({
    manProduct:state.home.manProduct,
    manClassfiy:state.home.manClassfiy,
    // manlist:localStorage.getItem("manlist") || state.home.manlist
})


export const mapDispatchToProps = (dispatch)=>({
    handleGetManList(categoryId,onclickIndex){
        dispatch(ManCateProductsAction(categoryId,onclickIndex))
    }
})