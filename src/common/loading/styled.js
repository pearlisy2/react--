import styled, { keyframes } from "styled-components";

const skChase = keyframes`
   100% { transform: rotate(360deg)}

`
const   skChaseDot = keyframes`
    80%, 100% { transform: rotate(360deg); } 
`
const    skChaseDotBefore = keyframes`  
    50% {
        transform: scale(0.4); 
    } 100%, 0% {
        transform: scale(1.0); 
    } 
`

     
    
export const LoadingContainer = styled.div`
            position:absolute;
            left:0;
            top:0;
            bottom: 0;
            right:0;
            background:rgba(0,0,0,.2);
            z-index:10;
        .sk-chase {
        width: 40px;
        height: 40px;
        position: relative;
        animation:${skChase} 2.5s infinite linear both;
        margin-left:50%;
        top:50%;
        }

        .sk-chase-dot {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0; 
        animation: ${skChaseDot} 2.0s infinite ease-in-out both; 
        }

        .sk-chase-dot:before {
        content: '';
        display: block;
        width: 25%;
        height: 25%;
        background-color: #000;
        border-radius: 100%;
        animation: ${skChaseDotBefore} 2.0s infinite ease-in-out both; 
        }

        .sk-chase-dot:nth-child(1) { animation-delay: -1.1s; }
        .sk-chase-dot:nth-child(2) { animation-delay: -1.0s; }
        .sk-chase-dot:nth-child(3) { animation-delay: -0.9s; }
        .sk-chase-dot:nth-child(4) { animation-delay: -0.8s; }
        .sk-chase-dot:nth-child(5) { animation-delay: -0.7s; }
        .sk-chase-dot:nth-child(6) { animation-delay: -0.6s; }
        .sk-chase-dot:nth-child(1):before { animation-delay: -1.1s; }
        .sk-chase-dot:nth-child(2):before { animation-delay: -1.0s; }
        .sk-chase-dot:nth-child(3):before { animation-delay: -0.9s; }
        .sk-chase-dot:nth-child(4):before { animation-delay: -0.8s; }
        .sk-chase-dot:nth-child(5):before { animation-delay: -0.7s; }
        .sk-chase-dot:nth-child(6):before { animation-delay: -0.6s; }
 
    
`