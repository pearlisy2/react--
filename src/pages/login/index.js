import React, { Component } from "react";
import { LoginContainer } from "./styled"
import { Button, WingBlank } from 'antd-mobile';
import {mapStateToProps,mapDispatchToProps} from "./mapStore";
import {connect} from "react-redux"
import { withRouter } from "react-router-dom";

@connect(mapStateToProps,mapDispatchToProps)
@withRouter
class Login extends Component {
    constructor(){
        super()
        this.state={
            inputText:"",
            pwdText:""
        }
    }
    render() {
        // console.log(this.props)
        return (
            <LoginContainer>
                <div className="Login_head">
                    <i className="iconfont" onClick={this.handleBack.bind(this)}>&#xe6cd;</i>
                    <h2>必要商城</h2>
                </div>
                <div className="login_box">
                   <form>
                        <div className="inputBox">
                            <label>用户名</label>
                            <input type="text" onClick={this.handleNameChange.bind(this)}/>
                        </div>
                       <div className="inputBox">
                        <label>密　码</label>
                        <input type="text" onClick={this.handlePwdChange.bind(this)}/>
                       </div>
                       <div className="register">
                           <p onClick={this.handleToRegister.bind(this)}>没有账号，立即注册</p>
                       </div>
                   </form>
                    <WingBlank>
                        <Button type="primary" onClick={this.handleLogin.bind(this)}>登录</Button>
                    </WingBlank>
                </div>

            </LoginContainer>
        )
    }
    handleBack() {
        this.props.history.push("/home")
    }
    handleToRegister(){
        this.props.history.push("/register")
    }
    handleNameChange(e){
        let data = e.target.value;
        this.setState({
            inputText:data
        })
    }
    handlePwdChange(e){
        let data = e.target.value;
        this.setState({
            pwdText:data
        })
    }
    handleLogin(){
        let username = this.state.inputText;
        let  password  = this.state.pwdText;
        this.props.handleLogin(username,password);
       
    }
   
}

export default Login;