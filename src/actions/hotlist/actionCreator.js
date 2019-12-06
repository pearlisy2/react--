import {hotAsyncType,ManCateProductsType,RecommendsActionType,ProductListType,InputType,RegisterInput,LoginInput,PwdChangeTypes} from "./actionTypes";
import {createAction} from "redux-actions";
import {Toast} from "antd-mobile"
import {homeHotListApi,ManProductsApi,AccountApi,ProductListApi,SearchApi,RegisterApi,LoginApi,PwdChangeApi} from "api/hub"
export const HotAsyncAction = (pageIndex,pageId)=>{
    let HotAction = createAction(hotAsyncType,(data)=>({data:data}))
    return async (dispatch)=>{
        let data = await homeHotListApi(pageIndex,pageId);
        dispatch(HotAction(data))
    }
}



export const ManCateProductsAction = (categoryId,onclickIndex)=>{
    let ManProducAction = createAction(ManCateProductsType,data=>data)
    return async (dispatch)=>{
        let data = await ManProductsApi(categoryId,onclickIndex)
        dispatch(ManProducAction(data))
    }
}

export const RecommendListAction = (pageIndex,pageId)=>{
    let RecommendAction = createAction(RecommendsActionType,data=>data)
    return async (dispatch)=>{
        let data = await AccountApi(pageIndex,pageId)
        dispatch(RecommendAction(data))
    }
}

export const productAsyncLAction = (categoryId,onclickIndex)=>{
    let ProductAction = createAction(ProductListType,data=>data)
    return async (dispatch)=>{
        let data=await ProductListApi(categoryId,onclickIndex);
        dispatch(ProductAction(data))
    }
}

export const InputChangeAction =(inputquery)=>{
    let InputAction = createAction(InputType,data=>data)
   return async (dispatch)=>{
      let data = await SearchApi(inputquery);
      dispatch(InputAction(data))
   }
}

export const RegisterAction = (username, password)=>{
    let registAction = createAction(RegisterInput,data=>data)
    return async (dispatch)=>{
        let data = await RegisterApi(username, password);
            dispatch(registAction(data))
        // console.log(data)
       
    }
}

export const LoginAction = (username, password)=>{
    let LoginToAction = createAction(LoginInput,data=>data)
    return async (dispatch)=>{
        let data = await LoginApi(username, password);
        console.log(data)
        if(data.data.code==1){
            Toast.success(data.data.info,1.5)
            localStorage.setItem( "userIf",JSON.stringify({
                name:data.data.data.name,
                urlPic:data.data.data.urlPic,
                id:data.data.data._id
            }));
            dispatch(LoginToAction(data.data.data))
            //在异步中做了return返回，返回到store,返回值是一个promise
            return data.data.code;
        }else{
            Toast.fail(data.data.info)
        }
       
    }
}

export const PwdChangeAction = (password,id)=>{
    let pwdAction = createAction(PwdChangeTypes,data=>data);
    return async (dispatch)=>{
        let data = await PwdChangeApi(password,id);
        if(data.data.code==1){
            Toast.success(data.data.info,1.5)
            dispatch(pwdAction(data.data))
            return data.data.code;
        }else{
            Toast.fail(data.data.info)
        }
        
    }
}

