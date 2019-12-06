import {
    Home,
    Classfiy,
    Cart,
    Mine,
    Login,
    Hot,
    Man,
    Search,
    Register,
    ProType,
    ClassItemMan,
    ClassItemWomon,
    Woman,
    Beauty,
    Setting,
    Setpwd
} from "pages"

export const TabBarRoute = [
    {
        path:"/home",
        component:Home,
        meta:{
            flag:true
        },
        icon:"\ue6b3",
        text:"首页",
        children:[
            {
                path:"/home/hot",
                component:Hot,
                meta:{
                    flag:true,
                    
                },
            },
            {
                path:"/home/man/:categoryId/:onclickIndex",
                component:Man,
                meta:{
                    flag:true,
                    
                },
            },
            {
                path:"/home/woman/:categoryId/:onclickIndex",
                component:Woman,
                meta:{
                    flag:true,
                    
                },
            },
            {
                path:"/home/beauty",
                component: Beauty,
                meta:{
                    flag:true,
                    
                },
            }
        ]
    },
    {
        path:"/classfiy",
        component:Classfiy,
        meta:{
            flag:true
        },
        icon:"\ue60d",
        text:"分类",
        children:[
          
            {
                path:"/classfiy/classItemMan",
                component:ClassItemMan,
                meta:{
                    flag:true
                }
            },
            {
                path:"/classfiy/classItemWomon",
                component:ClassItemWomon,
                meta:{
                    flag:true
                }
            }
        ]
    },
    {
        path:"/cart",
        component:Cart,
        meta:{
            flag:true
        },
        icon:"\ue636",
        text:"购物车"
    },
    {
        path:"/mine",
        component:Mine,
        meta:{
            flag:true,
            requiredAuth:true
        },
        icon:"\ue61d",
        text:"我的"
    },

];

export const NoTabBarRoute = [
    {
        path:"/login",
        component:Login,
        meta:{}
    },
    {
        path:"/search",
        component:Search,
        meta:{}
    },
    {
        path:"/register",
        component:Register,
        meta:{}
    },
    {
        path:"/manProductType/:categoryId/:stp/:productId",
        component:ProType,
        meta:{}
    },{
        path:"/setting",
        component:Setting,
        meta:{
            requiredAuth:true
        }
    },
    {
        path:"/Setpwd",
        component:Setpwd,
        meta:{
            requiredAuth:true
        }
    }
];

export const RouteConfig = TabBarRoute.concat(NoTabBarRoute)