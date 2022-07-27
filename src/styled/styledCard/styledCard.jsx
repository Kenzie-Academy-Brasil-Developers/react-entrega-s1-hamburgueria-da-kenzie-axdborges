import styled from "styled-components";

export const CardSt = styled.div`

    height: 206px;
    width: 200px;
    left: 115px;
    top: 112px;
    border-radius: 5px;
    border: groove 1px var(--cinza-2);
    background-color: var(--cinza-4);

    figure {
        max-height: 40%;
        max-width: 100%;
        background-color: var(--cinza-3);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;

    }

    img {
        height: 100%;
        max-width: 65%;
    }

    div {
        display: flex;
        flex-direction: column;
        margin-left: 15px;
        gap: 3px;
        margin-top: 10px;
        font-size: 15px;
    }

    .categoria {
        color: var(--cinza-2);
    }

    .preco {
        font-weight: 700;
        color: var(--verde-3);
    }

    button {
        height: 30px;
        width: 90px;
        left: 20px;
        top: 20px;
        border-radius: 8px;
        padding: 0px, 20px, 0px, 20px;
        border: none;
        background-color: #27AE60;
        color: #F5F5F5;
        cursor: pointer;
    }
`;