import styled from "styled-components";

export const ItemWomonCon = styled.div`
      width:80%;
        height:4.8rem;
        float:right;
        background:#fff;
        font-size:.18rem;
        margin-top:.4rem;
        ul{
        height:100%;
        width:100%;
        .cateList-second{
            height:2.8rem;
            width:100%;
            /* background:#f90; */
            display:flex;
            flex-direction:column;
        }
        .cateList-second .list-hd-wrap {
            height: .44rem;
            position: relative;
            font-size: .12rem;
            font-family: PingFangSC-Semibold;
            color: #4A4A4A;
            box-sizing: border-box;
            padding: 0 .16rem .1rem .14rem;
        }
        .list-hd {
            height: 100%;
            border-bottom: .01rem solid #f3f3f3;
            line-height: .34rem;
            display:flex;
            justify-content:space-between;
            align-items:center;
        }
        .list-hd-name{
            width:1.2rem;
            font-size:.12rem;
        }
        i{
            font-size:.12rem;
            padding-left:.03rem;
        }
        .cateList{
            padding-left:.14rem;
            dl{
                width:.64rem;
                height:.82rem;
                text-align: center;
                float:left;
                margin-left:.08rem;
                margin-top:.2rem;
            }
            dt{
                width:.64rem;
                height:.60rem;
                img{
                    width:100%;
                    height:100%;
                }
            }
             dd {
                margin-top: .12rem;
                color: #666;
                font-size: .12rem;
                word-break: break-all;
                line-height: .15rem;
            }
        }
        }
`