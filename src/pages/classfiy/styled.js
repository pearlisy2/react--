import styled from "styled-components";

export const ClassfiyContainer = styled.div`
    width:100%;
    height:100%;
    .classfiy_header{
        width:100%;
        height:.4rem;
        border-bottom: .02rem solid #f4f4f4;
        background:#fff;
        padding-top:.05rem;
        .header_search{
            padding:0 .15rem;
            width:95%;
            height:.31rem;
            display: block;
            margin: auto 0.06rem;
            padding-top: .1rem;
            padding-left: .25rem;
            background: #F4F4F4;
            box-sizing: border-box;
            border-radius: .32rem;
            position:relative;
            line-height:.31rem;
            
            i{
                display: inline-block;
                width: .36rem;
                height: .36rem;
                text-align: center;
                line-height: .36rem;
                font-size: .2rem;
                color: gray;
                position:absolute;
                left:0;
                top:0;
            }
            span{
                font-size:.12rem;
                position:absolute;
                left:.36rem;
                top:0;
            }
        }
    }
    .page-container{
        width:100%;
        height:100%;
        display:flex;
        .page-left{
            width:.72rem;
            height:100%;
            background:#f7f7f7;
            overflow:auto;
            ul{
                width:100%;
                height:100%;
            }
            li{
                font-size:.13rem;
                color:#333;
                height:.4rem;
                line-height:.4rem;
                text-align:center;
            }
        }
    }
    .active{
        color:#7F4395;
        background:#fff;
    }


`