import styled from "styled-components";

export const StCarrinho = styled.div`
    
    width: 360px;
    max-height: 100vh;

    .carrinho-header {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-left: 10px;
        background-color: var(--verde-1);
        height: 40px;
        color: var(--cinza-4);
        border-radius: 7px 7px 0px 0px
    }

    .carrinho-vazio {
        padding: 5px;
        height: 160px;
        background-color: var(--cinza-3);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        font-weight: 700;
        flex-direction: column;
        gap: 20px;
    }

    small {
        font-weight: 400;
        color: #828282;
    }

    .carrinho-total {
        max-width: 100%;
        background-color: var(--cinza-3);
        padding: 13px;
        border-radius: 0px 0px 7px 7px;
        display: flex;
        flex-direction: column;

    }

    .organizar-total {
        display: flex;
        justify-content: space-between;
        padding-top: 15px;
        padding-bottom: 10px;
        border-top: solid 2px var(--cinza-2);
    }

    .carrinho-p {
        font-weight: 700;
    }

    .carrinho-preco{
        color: var(--cinza-2)
    }

    .carrinho-remover {
        align-self: center;
        height: 40px;
        width: 100%;
        left: 20px;
        top: 20px;
        border-radius: 8px;
        padding: 0px, 20px, 0px, 20px;
        border: none;
        background-color: var(--cinza-2);
        color: var(--cinza-3);
        cursor: pointer;

    }


`;