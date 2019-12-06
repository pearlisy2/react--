import React from "react";
import { SearchContainer } from "./styled"
// import { SearchBar, WingBlank } from 'antd-mobile';
import {withRouter} from "react-router-dom";
import {mapStateToProps,mapDispatchToProps} from "./mapStore";
import {connect} from "react-redux";
@connect(mapStateToProps,mapDispatchToProps)
@withRouter
class Search extends React.Component {
    constructor(){
        super()
        this.state={
            searchButton:[
                {
                    hot_icon:"\ue647",
                    tip:"疯狂上新",
                },
                {
                    hot_icon:"\ue647",
                    tip:"皮带男自动扣",
                },
                {
                    hot_icon:"\ue647",
                    tip:"袜子男商务",
                },
                {
                    tip:"洗面奶清洁",
                },
                {
                    tip:"加绒女裤",
                },
                {
                    tip:"行李箱20",
                },
                {
                    tip:"香水男",
                },
                {
                    tip:"唇膏保湿",
                },
                {
                    tip:"牛排",
                },
                {
                    tip:"护手霜女",
                },
                {
                    tip:"护手霜欧舒丹",
                }
                
            ],
            flag:true,
            
        }
    }
    render() {
        let {searchButton,flag,}=this.state;
        let {inputVal} = this.props;
        console.log(inputVal)
        return (
            <SearchContainer>
               <div className="search-pre-head">  
                    <i className="iconfont" onClick={this.handleBack.bind(this)}>&#xe6cd;</i>
                    <form class="am-search" action="#"> 
                        <input type="search" className="am-search-input"  onChange={this.handleInput.bind(this,flag)}/>
                    </form> 
                    <div className="cancel" onClick={this.handleCancel.bind(this,flag)}>取消</div>
                </div>
                <div className="search-pre-host-wrap" style={{display:flag?'block':'none'}}>
                    <div className="searh-pre-host-head">
                        <h2>大家都在搜</h2>
                    </div>
                    <ul class="clear" id="hotWordsUl" >    
                    {
                        searchButton.map((item,index)=>(
                            <li data-index="0" class="fx fx-c-c">
                                <i className="iconfont">{item.hot_icon}</i>
                                <span>{item.tip}</span>
                            </li>
                        ))
                    }                         
                    </ul>
                   
                </div>
                <ul className="searchList" style={{display:flag?'none':'block'}}>
                    {
                        inputVal.map((item,index)=>(
                            inputVal?<p key={index}>{item.sw}</p>:''
                        ))
                    }
                </ul>

            </SearchContainer>
        )
    }
    handleInput(flag,e){
        this.setState({
            flag:false,
        })
        let val = e.target.value;
        this.props.handleSearch(val)
        console.log(val)
    }
    handleBack(){
        this.props.history.goBack()
    }
    handleCancel(flag){
        this.setState({
            flag:true,
        })
    }
}

export default Search;