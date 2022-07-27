import styled from "styled-components";

export const StItemCarrinho = styled.div`
    
    max-width: 370px;
    padding: 10px;
    display: flex;
    background-color: var(--cinza-3);
    justify-content: space-around;
    align-items:center;

    figure {
        background-color: var(--cinza-2);
        width: 70px;
        height: 56px;
        display: flex;
        justify-content:center;
        align-items: center; 
    }

    figure > img {
        width: 50%;
        height: 50%;
    }

    .item-textos {
        display: flex;
        flex-direction: column;
        align-content: center;
        gap: 10px

    }

    h4 {
        margin-top: 5px;
    }

    p {
        font-size: 13px;
        color: #828282;
    }

    button {
        height: 50px;
        width: 110px;
        left: 20px;
        top: 20px;
        border-radius: 8px;
        padding: 0px, 20px, 0px, 20px;
        border: none;
        background-color: var(--cinza-3);
        color: #828282;
        cursor: pointer;
    }

`;