import styled from "styled-components";

export const ManGoodsCss = styled.div`
    width:100%;
    height:100%;
    overflow:auto;
    background:#f0f0f0;
    .doubleRowList{
        width:100%;
        height:2.6rem;
        /* background:pink; */
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

export const ChildHead = styled.div`
    width:100%;
    height:.4rem;
    border-bottom: .01rem solid #F4F4F4;
    background: #fff;
    margin-top:.08rem;
    position:sticky;
    top:0;
    ul{
        display:flex;
        padding:0 .05rem;
        align-items:center;
        justify-content:space-between;
    }
    li.current {
        color: #7f4395;
        font-size:.12rem;
    }
    .goodsNav {
        position: relative;
        height: .4rem;
        line-height: .4rem;
        font-family: PingFangSC-Regular;
        font-size: .14rem;
        color: #666;
        padding: .05rem .1rem;
        i{
            font-size:.11rem;
            margin-left:.02rem;
        }
    }

`