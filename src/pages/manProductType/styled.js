import styled from "styled-components";

export const ProTypeContainer = styled.div`
    width:100%;
    height:100%;
    overflow:auto;
    .doubleRowList{
        width:100%;
        height:2.6rem;
        display:flex;
        .module-item{
            width:50%;
            height:100%;
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
        .module-item a>img {
            display: block;
            width: 100%;
            height: 1.4rem;
            margin-bottom: .08rem;
            margin-left:.02rem;
        }
        .module-item a>dl dd, dt {
            margin-left: .12rem;
            margin-bottom:.04rem;
        }
        .module-item a>dl {
            width: 100% !important;
            font-size: .12rem;
        }
         .module-item .price {
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
        .module-item a>dl .module-subtitle {
            color: #BF9E6B;
            margin-bottom: .04rem;
            font-size: .12rem;
        }
        .module-item a>dl .module-title {
            margin-bottom: .06rem;
            color: #4A4A4A;
        }
        .escp {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        } 
        .module-item a>dl .comment {
            color: #BBB;
        font-size: .1rem;
        padding-top: .06rem;
        }
    }

`