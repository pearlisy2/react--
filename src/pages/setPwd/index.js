import React from "react";
import { SetpwdCon } from "./styled";
import { withRouter, Link } from "react-router-dom"
import {mapStateToProps,mapDispatchToProps} from "./mapStore";
import {connect} from "react-redux";
@connect(mapStateToProps,mapDispatchToProps)
@withRouter
class Setpwd extends React.Component {
    constructor(){
        super()
        this.state={
            oldPwd:"",
            newpwd:""
        }
    }
    render() {
        return (
            <SetpwdCon>
                <div class="page-title">
                    <Link to="/setting"><span class="iconfont" >&#xe6cd;</span></Link>
                    <h1>修改密码</h1>
                </div>
                <div className="inputCon">
                    <form>
                        <div className="inputBox">
                            <label>原密码</label>
                            <input type="text" />
                        </div>
                        <div className="inputBox">
                            <label>新密码</label>
                            <input type="text" onChange={this.handleChangeNew.bind(this)}/>
                        </div>
                        <div className="submit">
                            <button onClick={this.handleSub.bind(this)}>确定</button>
                        </div>
                    </form>
                   
                </div>
               
            </SetpwdCon>
        )
    }
    handleChangeNew(e){
        let newInput = e.target.value;
        this.setState({
            newpwd:newInput
        })
        
    }
    handleSub(){
        let newPwd = this.state.newpwd;
        let id = JSON.parse(localStorage.getItem("userIf"));
        // console.log(id.id)
        this.props.handleChangePwd(newPwd,id.id)
    }
}

export default Setpwd;