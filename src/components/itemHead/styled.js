import styled from "styled-components";
import Line from "static/line.png"
import Line2 from "static/line2.png"
export const ItemHeadCon = styled.div`
        width:100%;
        height:.4rem;
     .head{
        width:100%;
        height:.4rem;
        background:#fff;
        text-align:center;
        line-height:.4rem;
        display:flex;
        justify-content:center;
        align-items:center;
       .first-cateList-name-before{
            height: .01rem;
            width: .24rem;  
           background-image:url(${Line})
       }
       p{
           font-size:.12rem;
           padding:0 .02rem;
           color: #4A4A4A;
       }
       .first-cateList-name-after{
            height: .01rem;
            width: .24rem;  
           background-image:url(${Line2})
       }
    }

`