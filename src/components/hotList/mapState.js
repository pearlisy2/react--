import {HotAsyncAction} from "actions/hotlist/actionCreator"
export const mapStateToProps =(state)=>({
    floorList:state.home.floorList,
    pageId:state.user.pageId
})

export const mapDispatchToProps =(dispatch)=>({
    handleAsyncHotlist(pageIndex,pageId){
        dispatch(HotAsyncAction(pageIndex,pageId))
    }
})