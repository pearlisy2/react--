import {LoginAction} from "actions/hotlist/actionCreator"
export const mapStateToProps = (state)=>({
    loginInfo:state.home.loginInfo,
});

export const mapDispatchToProps= (dispatch)=>({
    async handleLogin(username,password){
        let data = await dispatch(LoginAction(username,password))//因为reddux-thunk返回值是promise,所有用到async await
        // console.log(data) //code值1
        if(data == 1){
            setTimeout(()=>{
                this.history.push("/home")
            },1500)
        }
    }
})