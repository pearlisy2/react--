import {handleActions} from "redux-actions";
import {hotAsyncType,ManCateProductsType,RecommendsActionType,ProductListType,InputType,RegisterInput,LoginInput} from "actions/hotlist/actionTypes"
const defaultState={
    floorList:[],
    manProduct:[],
    manClassfiy:[],
    inputVal:[],
    recommends:[],
    productList:[],
    registerInfo:[],
    loginInfo:[],
    userInfo:[]
}

export default handleActions({
    [hotAsyncType]:(state,action)=>{
        let HotState = JSON.parse(JSON.stringify(state));
        HotState.floorList=[...HotState.floorList,...action.payload.data.data.blockList[0].block];
        return HotState;
    },
    [ManCateProductsType]:(state,action)=>{
        let ManState = JSON.parse(JSON.stringify(state));
        ManState.manProduct = action.payload.data.blockList[0].block;
        ManState.manClassfiy= action.payload.data.subCategory.threeLevelcategoryList;
       
        return ManState;
    },
    [RecommendsActionType]:(state,action)=>{
        let RecommendsState = JSON.parse(JSON.stringify(state));
        RecommendsState.recommends = [...RecommendsState.recommends,...action.payload.data.blockList[0].block];
        return RecommendsState;
    },
    [ProductListType]:(state,action)=>{
        let proState = JSON.parse(JSON.stringify(state));
        proState.productList = action.payload.data.blockList[0].block;
        return proState;
    },
    [InputType]:(state,action)=>{
        let inputState = JSON.parse(JSON.stringify(state));
        inputState.inputVal = action.payload.data.suggestionwords;
        return inputState;
    },
    [RegisterInput]:(state,action)=>{
        let registerState = JSON.parse(JSON.stringify(state));
        registerState.registerInfo = action.payload.data;
        // console.log(registerState.registerInfo)
        return registerState;
    },
    [LoginInput]:(state,action)=>{
        let loginSate = JSON.parse(JSON.stringify(state));
        loginSate.loginInfo = action.payload;
        return loginSate;
    }
    
},defaultState)
    
