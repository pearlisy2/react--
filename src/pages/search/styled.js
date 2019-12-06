import styled from "styled-components";


export const SearchContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background: #fff;
    z-index:1;
    top: 0;
    left: 0;
    .search-pre-head{
        width:100%;
        height:.5rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        background:#fff;
    }
    i{
        width:.3rem;
        height:.3rem;
        text-align:center;
        line-height:.3rem;
    }
    .am-search{
        width:78%;
        display:flex;
        background-color: #fff;
        border:1px solid #ccc;
        height:.3rem;
        border-radius:.1rem;
        margin-right:.04rem;
    }
    .cancel{
        font-size:.12rem;
        padding-right:.08rem;
    }
    .am-search-input {
        flex: 1 ;
        position: relative;
        width: 80%;
        height:.24rem;
        overflow: hidden;
        background-color: #fff;
        background-clip: padding-box;
        border-radius:.1rem;
        border:0;
        border-color:#fff;
        color: #000;
    }
    .search-pre-host-wrap{
        width:100%;
        height:1.67rem;
    }
    .searh-pre-host-head{
        width:100%;
        height:.27rem;
        padding:.05rem 0;
        h2{
            font-size:.15rem;
            color: #333;
        }
    }
    .clear{
        width:100%;
        height:1.4rem;
        background:#fff;

    }
    li {
    float: left;
    /* width: .8rem; */
    height: .26rem;
    line-height: .26rem;
    margin-right: .06rem;
    margin-bottom: .12rem;
    padding: 0 .14rem;
    background: #F5F5F5;
    border-radius: .17rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: .10rem;
    i{
        color:red;
    }
    }
    .searchList{
        width:100%;
        height:3rem;
        p{
            width:100%;
            height:.4rem;
            font-size:.14rem;
            color:#333;
        }
    }

`