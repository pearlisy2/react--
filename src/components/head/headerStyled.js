import styled from "styled-components";

export const HeaderBox = styled.div`
    width:100%;
    height:.8rem;
    position: relative;
    background:#fff;
    .header_fix{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 99;
        width: 100%;
        height: .8rem;
        border-bottom: .02rem solid #f4f4f4;
        background:#fff;
        .header_search{
            padding:0 .15rem;
            width:95%;
            height:.31rem;
            display: block;
            margin: .1rem auto 0;
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
`
export const NavNodrop = styled.div`
            width:100%;
            height:.3rem;
            margin-top:.08rem;
            padding:0 .08rem;
            display:flex;
            justify-content:space-between;
            align-items:center;
            ul{
                width:98%;
                height:100%;
                display:flex;
                justify-content:space-around;
                align-items:center;
                margin-bottom:0;
                overflow-x:hidden;
                li{
                    font-size:.12rem;
                    line-height:.3rem;
                    color: #4A4A4A;
                }
            }
            i{
                font-size:.10rem;    
            }
            .active{
                border-bottom: .01rem solid #7f4395;
                font-family: PingFangSC-Medium;
                color: #7f4395;
            }
`
export const NavDrop = styled.div`
    width:100%;
    display:flex;
    height:3rem;
    background:#fff;
    flex-direction:column;
    .nav_title{
        width:100%;
        height:.3rem;
        margin-top:.08rem;
        padding:0 .08rem;
        border-bottom: .02rem solid #f4f4f4;
        display:flex;
        justify-content:space-between;
        align-items:center;
        p{
            font-size: .12rem;
            color: gray;
        }
        em{
            font-size:.16rem;
            color: gray;
        }
    }
    .items{
        width:100%;
        height:260px;
        font-size:.12rem;
        li{
            float: left;
            display: inline-block;
            border: .008rem solid gray;
            border-radius: .24rem;
            height: .24rem;
            min-width:.64rem;
            text-align: center;
            line-height: .24rem;
            font-size: .12rem;
            margin-bottom: .06rem;
            margin-top: .06rem;
            margin-left: .1rem;
        }
    }
    .active{
        color: #7f4395;
        border-color:#7f4395;
    }
`