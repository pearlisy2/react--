import styled from "styled-components";

export const CommonHeadContainer = styled.div`
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

`