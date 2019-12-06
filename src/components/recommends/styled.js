import styled from "styled-components";

export const RecommendsContainer = styled.div`
        width:100%;
        /* height:100%; */
        margin-top:.1rem;
        background:#fff;
        .recommend-title{
            width:100%;
            height:.4rem;
            display:flex;
            justify-content:space-between;
            justify-content:center;
            align-items:center;
            flex-direction:column;
            line-height:.4rem;
            p{
                font-size:.15rem;
            }
            .line{
                width: .61rem;
                height: 0;
                border-bottom: .01rem solid #4A4A4A;
            }
        }
        .section-cateList{
            width:100%;
            height:100%;
            display:flex;
            flex-direction:column;
            margin-top:.1rem;
            .doubleRowList{
                width:100%;
                height:2.6rem;
                display:flex;        
            }
            .module-list{
                    width:50%;
                    border-bottom: .01rem solid #F4F4F4;
                    border-right: .01rem solid #F4F4F4;
                    background: #fff;
                    padding-bottom: .14rem;
                    display:flex;
                    flex-direction:column;

            }
            a{
            width:100%;;
            height:100%;
            text-decoration:none;
            color:#333;
        }
        .module-list a>img {
            display: block;
            width: 100%;
            height: 1.4rem;
            margin-bottom: .08rem;
            margin-left:.02rem;
        }
        .module-list a>dl dd, dt {
            margin-left: .12rem;
            margin-bottom:.04rem;
        }
        .module-list a>dl {
            width: 100% !important;
            font-size: .12rem;
        }
        .module-list .price {
            color:#F7A701;
            margin-bottom: .08rem;
            font-size:.17rem;
            display: flex;
            margin-left:.12rem;
        }
        .labels{
            font-size:.09rem;
            display:inline-block;
            color: #FB4C81;
            border: 0.01rem solid #FB4C81;
            border-radius: .01rem;
        }
        .module-list a>dl .module-subtitle {
            color: #BF9E6B;
            margin-bottom: .04rem;
            font-size: .12rem;
        }
        .module-list a>dl .module-title {
            margin-bottom: .06rem;
            color: #4A4A4A;
        }
        .escp {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        } 
        .module-list a>dl .comment {
            color: #BBB;
        font-size: .1rem;
        padding-top: .06rem;
        }
        }

`