import styled from "styled-components";

export const SettingCon = styled.div`
    width: 100%;
    height: 100%;
    background:#f0f0f0;
    .page-title{
        width: 100%;
        text-align: center;
        line-height: .44rem;
        color: #333;
        font-size: .18rem;
        background-color: #fff;
        border-bottom: 1px solid #f4f4f4;
        display:flex;
    } 
    .page-title h1 {
        color: #494949;
        font-size: .16rem;
        width:90%;
        margin:0;
    }
    .servicelist{
        width:100%;   
        margin-top: 0.1rem;
        height:5.11rem;
        background: #f4f4f4;
        display:flex;
        flex-direction:column;
        align-items:center;
        li{
            width:100%;
            height:.42rem;
            background:#fff;
            display:flex;
            padding:0 10px;
            align-items:center;
            justify-content:space-between;
            margin-bottom:.03rem;
        }
        span{
            font-size:.14rem;
        }
        p{
            font-size:.14rem;
        }
        .back{
            width:90%;
            margin-top:.1rem;
            height:.4rem;
            background:#fff;
            color:#7F4395;
            font-size:.16rem;
            display:flex;
            align-items:center;
            justify-content:center;
        }
    } 
`