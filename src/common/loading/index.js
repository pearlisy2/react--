import React ,{Component,Fragment} from "react";
import {LoadingContainer} from "./styled"
export default class Loading extends Component{
    render(){
        return(
            <Fragment>
               <LoadingContainer>
                    <div class="sk-chase">
                        <div class="sk-chase-dot"></div>
                        <div class="sk-chase-dot"></div>
                        <div class="sk-chase-dot"></div>
                        <div class="sk-chase-dot"></div>
                        <div class="sk-chase-dot"></div>
                        <div class="sk-chase-dot"></div>
                    </div>
                </LoadingContainer>
            </Fragment>
        )
    }
}