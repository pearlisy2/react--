import styled from "styled-components"

export const LoginContainer = styled.div`
      width:100%;
        height:100%;
        /* background:#fff; */
        .login_box{
            width:100%;
            height:4.27rem;
            padding:0 .1rem;
            margin-top:.5rem;

        }
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
   input{
       border:none;
       width:80%;
       height:.35rem;
       margin-bottom:.1rem;
       margin-left:.04rem;
      border-radius:.06rem;
   }
   .am-button{
       /* margin-top:.3rem; */
   }
    .inputBox{
        width:100%;
        height:.5rem;
    }
    .register{
        width:100%;
        height:.3rem;
        margin-top:.08rem;
        padding:0 .1rem;
        p{
            font-size:.12rem;
            color:#B768A5;
        }
    }


`