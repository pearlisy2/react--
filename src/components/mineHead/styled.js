import styled from "styled-components";
import bg from "static/minebg.jpg"
export const MineHeaderStyle = styled.div`
    width:100%;
    height:.8rem;
    background-image:url(${bg});
    padding: .16rem;
    box-sizing: border-box;
    display: flex;
    align-items:center;
    .personal{
        width:100%;
        height:100%;
        display:flex;
        align-items:center;
    }
    .personal .personal-pic {
        display: inline-block;
        width: .44rem;
        height: .44rem;
        border-radius: 50%;
    }
    .personal .personal-pic img {
        width: .44rem;
        height: .44rem;
        border-radius: 50%;
    }
    .person-info {
        width: 1.8rem;
        height: .4rem;
        padding-top: .02rem;
        margin-left: .06rem;
    }
    .person-name {
        width: 100%;
        height: .21rem;
        display:flex;
         p {
            max-width: 1.8rem;
            height: .21rem;
            line-height: .21rem;
            font-size: .15rem;
            color: #FFF;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-bottom: 1em;
        }
        .person-message {
            width: .24rem;
            height: .24rem;
            margin-left: .06rem;
            position: relative;
        }
        a {
            text-decoration: none;
            color: #333;
        }
        .person-message img {
            width:100%;
            height:100%;
        }
        }
        .person-level {
            width: .16rem;
            padding-top: .07rem;
            height:.12rem;
            img{
                width: .16rem;
                height:.12rem;
            }
    }
    .personal ul {
        width: 1.2rem;
        height: auto;
        /* padding-top: .02rem; */
        display: flex;
        margin-bottom: 0;
    }
    li {
        width: .5rem;
        text-align: center;
        /* margin-left: .12rem; */
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
    }
    img{
        width:.2rem;
        height:.2rem;
    }
    .personal ul li p {
        width: 100%;
        height: .14rem;
        line-height: .14rem;
        font-size: .10rem;
        color: #FFF;
        text-align: center;
        margin-top: .05rem;
    }
`