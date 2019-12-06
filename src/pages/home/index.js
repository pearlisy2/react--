import React,{Component} from "react";
import {PageContainer} from "common/styled";
import Header from "components/head"
export default class Home extends Component{
    render(){
        return(
            <PageContainer>
                <Header/>
            </PageContainer>
        )
    }
}