import Loadable from "react-loadable";
import Loading from "common/loading";

export const Home = Loadable({
    loader:_=>import("./home"),
    loading:Loading
})

export const Classfiy = Loadable({
    loader:_=>import("./classfiy"),
    loading:Loading
})

export const Cart = Loadable({
    loader:_=>import("./cart"),
    loading:Loading
})

export const Mine = Loadable({
    loader:_=>import("./mine"),
    loading:Loading
})

export const Login = Loadable({
    loader:_=>import("./login"),
    loading:Loading
})


export const Hot = Loadable({
    loader:_=>import("./hot"),
    loading:Loading
})



export const Man = Loadable({
    loader:_=>import("./man"),
    loading:Loading
})

export const Search = Loadable({
    loader:_=>import("./search"),
    loading:Loading
})

export const Register = Loadable({
    loader:_=>import("./register"),
    loading:Loading
})

export const ProType = Loadable({
    loader:_=>import("./manProductType"),
    loading:Loading
})

export const ClassItemMan = Loadable({
    loader:_=>import("./classItemMan"),
    loading:Loading
})

export const ClassItemWomon = Loadable({
    loader:_=>import("./classItemWomon"),
    loading:Loading
})

export const Woman = Loadable({
    loader:_=>import("./woman"),
    loading:Loading
})

export const Beauty=Loadable({
    loader:_=>import("./beauty"),
    loading:Loading
})

export const Setting = Loadable({
    loader:_=>import("./setting"),
    loading:Loading
})

export const Setpwd = Loadable({
    loader:_=>import("./setPwd"),
    loading:Loading
})