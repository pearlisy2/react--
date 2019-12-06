import {PwdChangeAction} from "actions/hotlist/actionCreator"
export const mapStateToProps = (state)=>({});

export const mapDispatchToProps = (dispatch)=>({
    async handleChangePwd(password,id){
        let data = await dispatch(PwdChangeAction(password,id));
       if(data==1){
           setTimeout(()=>{
               this.history.push("/login")
           },1500)
        // console.log(this)
       }
    }
})