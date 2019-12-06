import React from "react";
import { SettingCon } from "./styled"
import cookies from "js-cookie"
import {withRouter,Link} from "react-router-dom"
@withRouter
class Setting extends React.Component {
    render() {
        return (
            <SettingCon>
                <div class="page-title">
                    <Link to="/mine"><span class="iconfont" >&#xe6cd;</span></Link>
                    <h1>设置</h1>
                </div>
                <div class="servicelist" id="servicelist">
                    <li className="address">
                        <span>地址管理</span>
                        <p>
                            <i class="addressCount">去设置</i>
                            <span class="iconfont">&#xe74b;</span>
                        </p> 
                    </li>
                   <li className="pwdChange" >
                        <span>修改密码</span>
                        <p>
                            <Link to="/setPwd"><span class="iconfont">&#xe74b;</span></Link>
                        </p> 
                    </li>
                    <li className="aboutUs">
                        <span>关于我们</span>
                        <p>
                            <span class="iconfont">&#xe74b;</span>
                        </p> 
                    </li>
                   <li className="back" onClick={this.handleBack.bind(this)}>退出登录</li>
	            </div>
                
            </SettingCon >
        )
    }
    handleBack(){
        cookies.remove('token');
        this.props.history.push("/login")
    }
}

export default Setting;