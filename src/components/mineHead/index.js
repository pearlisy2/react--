import React from "react";
import { MineHeaderStyle } from "./styled"
import { withRouter,Link } from "react-router-dom";
@withRouter
class MineHead extends React.Component {
    constructor(){
        super()
        this.state={
            data:""
        }
    }
    render() {
        let name =JSON.parse(localStorage.getItem("userIf")) ;
       console.log(name)
        return (
            <MineHeaderStyle>
                <div className="personal">
                    <div className="personal-pic">
                        <img src={name.urlPic} />
                    </div>
                    <div className="person-info">
                        <div className="person-name">
                            <p>{name.name}</p>
                            <div className="person-message">
                                <a href="#message">
                                    <img src="https://static.biyao.com/mnew/img/master/personalCenter/icon_nav_message@2x_750ba6a.png" />
                                </a>
                            </div>
                        </div>
                        <div className="person-level">
                            <img src="https://static.biyao.com/mnew/img/master/personalCenter/icon_v@2x_3b946f4.png" />
                        </div>
                    </div>
                    <ul>
                        <li>

                            <img src="https://static.biyao.com/mnew/img/master/personalCenter/icon_nav_service@2x_c068323.png" />
                            <p>平台服务</p>

                        </li>
                        <Link to="/setting">
                        <li>
                            <img src="https://static.biyao.com/mnew/img/master/personalCenter/icon_nav_setting@2x_bb1c3de.png" />
                            <p>设置</p>

                        </li>
                        </Link>
                    </ul>
                </div>
            </MineHeaderStyle>
        )
    }
    componentDidMount(){
        this.setState({
            data:localStorage.getItem("userIf")
        })
        
        
    }
}

export default MineHead;