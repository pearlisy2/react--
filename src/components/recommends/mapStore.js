import {RecommendListAction} from "actions/hotlist/actionCreator"
export const mapStateToProps = (state)=>({
    recommends:state.home.recommends
})

export const mapDispatchToProps = (dispatch)=>({
    handleRecommends(pageIndex,pageId){
        dispatch(RecommendListAction(pageIndex,pageId))
    }
})