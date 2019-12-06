import { RegisterAction} from "actions/hotlist/actionCreator"
export const mapStateToProps = (state)=>({
    registerInfo:state.home.registerInfo
});

export const mapDispatchToProps = (dispatch)=>({
    handleRegisterSub(username, password){
        dispatch( RegisterAction(username, password))
    }
})