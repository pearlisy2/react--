import {InputChangeAction} from "actions/hotlist/actionCreator"
export const mapStateToProps = (state)=>({
    inputVal:state.home.inputVal
})

export const mapDispatchToProps = (dispatch)=>({
    handleSearch(val){
        dispatch(InputChangeAction(val))
    }
})