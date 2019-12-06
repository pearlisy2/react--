import http from "utils/request";

export const homeHotListApi = (pageIndex,pageId) => http.post({
    url: "/ajax/floorList",
    data: {
        pageIndex: pageIndex,
        pageId: pageId,
        pvid: "1973dfc8-1575095583327-f9224a2ea5",
        platform:"mweb",
        ctp: "%7B%22pf%22%3A%22mweb%22%2C%22u%22%3A%2213831995%22%2C%22av%22%3A%22%22%2C%22avn%22%3A%22%22%2C%22d%22%3A%22%22%2C%22os%22%3A%22%22%2C%22dw%22%3A320%2C%22dh%22%3A568%2C%22b%22%3A%22safari%22%2C%22stid%22%3A%221%22%2C%22utm%22%3A%22%22%2C%22did%22%3A%22de7304e876ab4eb6%22%2C%22uu%22%3A%22cdad4601-0460-44a5-8bd5-06426cc98e08%22%2C%22ssid%22%3A%221973dfc8c8649be0-1575095378820%22%2C%22p%22%3A%221-100000-500005%22%2C%22pvid%22%3A%221973dfc8-1575095583327-f9224a2ea5%22%7D",
        uuid: "cdad4601-0460-44a5-8bd5-06426cc98e08",
        isTab: 1
    }
})

export const categoryListApi = (categoryId,productId)=>http.get({
    url:"/ajax/classify/categoryList",
    data:{
        categoryId:categoryId,
        stp:"%7B%22spm%22%3A%221.500005.home_category_nava.0_1%22%2C%22rpvid%22%3A%221973dfc8-1575114982797-f018a74d37%22%7D&",
        productId:productId
    }
})

export const ManProductsApi = (categoryId,onclickIndex)=>http.post({
    url:"/ajax/classify/getCateProductsList",
    data:{
        pageIndex: 1,
        pageSize: 20,
        categoryId:categoryId,
        onclickIndex:onclickIndex,
        sortType: 0,
        sortValue: 0
    }
})

export const SearchApi = (inputquery)=>http.post({
    url:"/ajax/search/queryAstlWords",
    data:{
        inputquery:inputquery
    }
})

export const AccountApi = (pageIndex,pageId)=>http.post({
    url:"/ajax/account/accountRecommends",
    data:{
        pageIndex: pageIndex,
        pageId: pageId,
        pvid: "26a10a47-1575181332485-b1ce8eaa3c",
        platform: "mweb",
        ctp:"%7B%22pf%22%3A%22mweb%22%2C%22u%22%3A%2213831995%22%2C%22av%22%3A%22%22%2C%22avn%22%3A%22%22%2C%22d%22%3A%22%22%2C%22os%22%3A%22%22%2C%22dw%22%3A320%2C%22dh%22%3A568%2C%22b%22%3A%22safari%22%2C%22stid%22%3A%221%22%2C%22utm%22%3A%22%22%2C%22did%22%3A%22522eef4dd891426e%22%2C%22uu%22%3A%22116de136dyy1201hh21480000000%22%2C%22ssid%22%3A%2226a10a4705c497e5-1575187013447%22%2C%22p%22%3A%221-100000-500004%22%2C%22pvid%22%3A%2226a10a47-1575181332485-b1ce8eaa3c%22%7D",
        uuid: "116de136dyy1201hh21480000000",
        source: "s1",
        isTab: 1
    }
})

export const ProductListApi = (categoryId,onclickIndex)=>http.post({
    url:"/ajax/classify/categoryListNew",
    data:{
        categoryId: categoryId,
        pageIndex: 2,
        pageSize: 20,
        pageType: 1,
        onclickIndex:onclickIndex,
        sortType: 0,
        sortValue: 0,
        pageId: "moses:pid_1",
        topicId: 10300148,
    }
})

export const RegisterApi = (username, password )=>http.post({
    url:"/api/users/register",
    data:{
        username,
        password 
    }
})

export const LoginApi = (username, password)=>http.post({
    url:"/api/users/login",
    data:{
        username,
        password 
    }
})

export const PwdChangeApi = (password , id )=>http.post({
    url:"/api/users/updateInfo",
    data:{
        password ,
        id   
    }
})