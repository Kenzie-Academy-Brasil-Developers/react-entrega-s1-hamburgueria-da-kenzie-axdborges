import styled from "styled-components";

export const StContainer = styled.div`
    
    display: flex;
    width: 50%;
    height: 80%;
    flex-direction: inline;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    @media screen and (max-width: 900px){
        
        width: 100%;
        height: 250px;
        box-sizing: border-box;
        display: flex;
        gap: 10px;
        justify-content: space-around;
        flex-wrap: nowrap;
        align-items: flex-start;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;

        div {
            scroll-snap-align: start;
            flex-shrink: 0; 
            transform-origin: center center;
            transform: scale(1);
            transition: transform 0.9s;
            position: relative;
        }
    }

`;