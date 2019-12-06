import styled from "styled-components"

export const Main = styled.div`
    width:100%;
    /* height:100%; */
    position:absolute; 
    top:0;
    left:0;
    bottom:0;
    right:0;
    padding-top:.82rem;
    padding-bottom:.4rem; 
    overflow:auto;
    .swiper{
        width:100%;
        height:1.1rem;
    }
    .ant-carousel .slick-slide {
        text-align: center;
        height: 1.1rem;
        background: #364d79;
        overflow: hidden;
        margin:0;padding:0;
    }

        .ant-carousel .slick-slide h3 {
        color: #fff;
    }
    img{
        width:100%;
        height:1.1rem;
        border:0;
    }
    .guarantee_g{
        width:100%;
        height: .352rem;
        background-color: #fff;
        padding: 0 .15rem;
        p,a{
            width:100%;
            height:100%;
            display:flex;
            justify-content:space-around;
            align-items:center;
            color:#9687A4;
            span{
                display:inline-block;
                font-size:.12rem;
                color:#9687A4;
                text-overflow:ellipsis;
                white-space:nowrap;
       
            }
        }
    }
    .am-wingblank.am-wingblank-lg {
    margin-left: 0; 
     margin-right: 0; 
}
    .operate_g{
        width:100%;
        height:.74rem;
        background-color: #fff;
        padding: .1rem .076rem;
        ul{
            width:100%;
            height:100%;
            display:flex;
            li{
                width:20%;
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;
                margin-top:.05rem;
                font-size:.10rem;
               position: relative;
                p{
                    padding-top:.08rem;
                }
            }
            .bg{
            width:.2rem;
            height:.2rem;
            border:0;
            }
        }
    }
    .blockline{
        width:100%;
        height:0.1rem;
        background:#F4F4F4;
    }
`

export const ManList = styled.div`
    width:100%;
    position:absolute;
    top:0;
    bottom:0;
    right:0;
    left:0;
    padding-top:.82rem;
    padding-bottom:.4rem;
    overflow:auto;
    .home-three-nav{
        background: #fff;
        width:100%;
        padding-top: .12rem;
        margin-bottom: .1rem;
    }
    ul.type4{
        width:100%;
        height:2.6rem;
        padding:0 .05rem;
    }
    .aLinkJump{
        width:20%;
        height:30%;
        margin-bottom:.1rem;
        float: left;
        .content{
            width:100%;
            height:100%;
            margin:0 .05rem;
            display:flex;
            flex-direction:column;
        }
        .content img {
            width: .44rem;
            height: .46rem;
            border-radius: .22rem;
            display: block;
            margin: auto;
        }
        p {
            font-family: PingFangSC-Regular;
            font-size: .11rem;
            color: #4A4A4A;
            line-height: .23rem;
            width: 100%;
            text-align: center;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis
        }
    }

`

export const LoginBox = styled.div`
    width:100%;
    height:3rem;
    background:pink;
    .Login_head{
        width:100%;
        height:.4rem;
        background:#7d39a0;
        padding:0 .1rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        i{
            font-size:.12rem;
            display:block;
            
        }
        h2{
            width:90%;
            text-align:center;
            font-size:.16rem;
        }
    }
    
`

export const CartStyle = styled.div`
    width:100%;
    height:100%;
    overflow:auto;
    background-color: #f2f2f2;
    padding-bottom: .4rem;
    .cartHead{
        width:100%;
        height:.4rem;
        padding:0 .08rem;
        position: relative;
        background: #fff;
        border-bottom: #ccc solid .01rem;
        .icon{
            position: absolute;
            top: 0;
            left: .1rem;
            z-index: 2;
            display: block;
            width: .3rem;
            height: .3rem;
            font-size: .24rem;
        }
        p{
            line-height: .4rem;
            width: 2.4rem;
            margin: 0 auto;
            font-size: .16rem;
            text-align: center;
            color: #333;
        }
    }
    .shopcar-empty{
        position: absolute;
        left: 50%;
        top: .8rem;
        width: 2.4rem;
        margin-left: -1.2rem;
        height:2.4rem;
        text-align: center;
        img {
            display: inline-block;
            width: .44rem;
            height: .44rem;
        }
        .empty-til {
            font-size: .15rem;
            color: #666;
            line-height: .2rem;
        }
        a {
            display: inline-block;
            width: 100%;
            height: .4rem;
            line-height: .4rem;
            color: #fff;
            text-align: center;
            font-size: .12rem;
            background-color: #B768A5;
            -webkit-border-radius: .03rem;
            border-radius: .03rem;
            }
        }
        .none{
            display:none
        }
        .shopcar-has{
            width:100%;
            height:100%;
            .shop-panel {
                width:100%;
                height:1.24rem;
                margin-bottom: .1rem;
                background-color: #fff;
            }
            .shop-panel-store {
                width:100%;
                height:.35rem;
                display:flex;
                justify-content:space-between;
                align-items:center;
                border-bottom:.01rem solid #ccc;
                padding-left:.1rem;
                p{
                    margin-bottom:0;
                }
            }
            .float-right{
                padding-right:.1rem;
            }
            .float-right span{
                font-size: .15rem;
                line-height: .35rem;
                color: #333;
            }
            .float-left{
                display:flex;
                height:.35rem;
                font-size:.15rem;
                color: #7f4395;
                align-items:center;
            }
            .checked i{
                font-size:.22rem;
            }
            .store-logo {
                vertical-align: bottom;
                margin-left: .1rem;
                display: inline-block;
                width: .16rem;
                height: .16rem;
                position: relative;
                top: -.02rem;
            }
            .store-name {
                display: inline-block;
                font-size: .15rem;
                color: #7f4395;
                margin-left: .1rem;
                margin-right: .1rem;
                max-width: 2.2rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                vertical-align: bottom;
                position: relative; 
                top: -.02rem; 
            }
            .shop-product-item{
                width:100%;
                height:.88rem;
                display:flex;
                align-items:center;
                padding:0.08rem .1rem;
            }
            .product-pic{
                width:.6rem;
                height:.6rem;
            }
            .product-pic img{
                width:100%;
                height:100%;
            }
            .product-detail {
                float: left;
                width: 2.4rem;
                height:100%;
                overflow: hidden;
                margin-left:.1rem;
                .product-name {
                    width: 100%;
                    font-size: .15rem;
                    color: #333;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    margin-bottom: 0;
                }
                .product-dec {
                    width: 100%;
                    font-size: .12rem;
                    color: gray;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    padding: .02rem 0;
                }
                .product-price {
                    color: #f33;
                    margin-right: .16rem;
                }
            }
        }
`

export const MineStyle = styled.div`
    width:100%;
    height:100%;
    overflow:auto;
    position:absolute;
    background:#f0f0f0;
    padding-bottom:.4rem;
    .order-panel {
        width: 100%;
        height: .8rem;
        background: #FFF;
        padding: .1rem .1rem;
        display: flex;
        box-sizing: border-box;
        margin-bottom: .08rem;
        .order-all{
            width: .62rem;
            height: .6rem;
            text-align: center;
            /* padding-top: .13rem */
            img{
                width:.2rem;
                height:.2rem;
                margin-left:.2rem;
            }
            .all{
                font-size:.12rem;
                color: #666;
                margin-top: .03rem;
                margin-bottom:0;
            }
            .orders{
                font-size: .10rem;
                color: #999;
            }
        }
        }
        .order-panel .order-line {
            width: .1rem;
            height:.6rem;
            img{
                width:100%;
                height:100%;
            }
        }
        .operate_items{
            display:flex;
            align-items:center;
            margin-bottom:0;
            justify-content:space-between;
            li {
                height: .6rem;
                text-align: center;
                padding-top: .1rem;
                /* margin: 0 .06rem; */
                width:.6rem;
                position: relative;
            }
            a {
                text-decoration: none;
                color: #333;
                display:flex;
                align-items:center;
                flex-direction:column;
                justify-content:center;
            }
            li img {
                width: .2rem;
                height: .2rem;
            }
            li p{
                font-size: .10rem;
                color: #666;
                margin-top: .06rem;
            }
        }
        .entry-wrapper{
            width:100%;
            height:.8rem;
            background:#FFF;
        }
        ul{
            width:100%;
            height:100%;
            display:flex;
            align-items:center;
            li{
                width:.8rem;
                height:.8rem;
                display:flex;
                flex-direction:column;
                align-items:center;
                justify-content:center;
            }
            .entry-icon {
                position: relative;
                margin: 0 auto;
                width: .2rem;
                height: .2rem;
                .icon {
                    width: .2rem;
                    height: .2rem;
                }
                .red-point {
                    position: absolute;
                    right: -.03rem;
                    top: -.03rem;
                    width: .06rem;
                    height: .06rem;
                    background: #F84242;
                    border-radius: 50%;
                }
            }
            .entry-text {
                margin-top: .08rem;
                height: .16rem;
                line-height: .16rem;
                font-size: .12rem;
                color: #666;
                text-align: center;
            }
        }
        

`