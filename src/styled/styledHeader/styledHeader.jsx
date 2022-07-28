import styled from "styled-components";

export const HeaderSt = styled.header`
    
    width: 100vw;
    height: 80px;
    margin: none;
    background-color: var(--cinza-3);
    display: flex;
    justify-content: space-between;
    align-items: center;
    

    .header-titulos {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-left: 50px;
        color: var(--cinza-1)
    }

    div > h3 {
        font-weight: 800;
        font-size: 19px;
    }

    div > small {
        font-weight: 800;
        color: var(--laranja);
        font-size: 14px;
    }

    form {
        margin-right: 50px;
        display: flex;
        gap: 10px;
    }

    input {
        height: 35px;
        width: 280px;
        left: 1120px;
        top: 10px;
        border-radius: 8px;
        padding: 0px, 10px, 0px, 15px;
        justify: space-between;
        padding-left: 10px;

    }

    button {
        height: 35px;
        width: 110px;
        left: 20px;
        top: 20px;
        border-radius: 8px;
        padding: 0px, 20px, 0px, 20px;
        border: none;

        background-color: #27AE60;
        color: #F5F5F5;
        cursor: pointer;
    }

    @media screen and (max-width: 900px){

        display: flex; 
        flex-direction: column;
        justify-content: space-around;
        height: 90px;

        form {
            margin-right: 0px;
            display: flex;
            gap: 0px;
            padding: 1px;
            width: 90%;
            justify-content: space-evenly;
        }

        .header-titulos {
            gap: 10px;
            margin-left: 0px;
            
        }

        button, input {
            /* display: none; */
            /*  */
        }
    }

`;