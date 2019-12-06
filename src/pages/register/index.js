import React, { Component } from "react";
import { LoginContainer } from "../login/styled"
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
            inputName:"",
            inputPwd:"",

        }
    }
    render() {
        // console.log(registerInfo);
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
                            <input type="text" onChange={this.handleChangeName.bind(this)}/>
                        </div>
                       <div className="inputBox">
                        <label>密　码</label>
                        <input type="text"  onChange={this.handleChangePwd.bind(this)}/>
                       </div>
                   </form>
                    <WingBlank>
                        <Button type="primary" onClick={this.handleSubmit.bind(this)}>注册</Button>
                    </WingBlank>
                </div>

            </LoginContainer>
        )
    }
    handleBack() {
        this.props.history.push("/login")
    }
    handleChangeName(e){
        let name = e.target.value;
        this.setState({
            inputName:name
        })
    }
    handleChangePwd(e){
        let pwd = e.target.value;
        this.setState({
            inputPwd:pwd
        })
    }
    handleSubmit(){
        let username = this.state.inputName;
        let  password  = this.state.inputPwd;
        let {registerInfo} = this.props;
        console.log(registerInfo )
        this.props.handleRegisterSub(username,password)
        this.props.history.push("/login")
    }
}

export default Login