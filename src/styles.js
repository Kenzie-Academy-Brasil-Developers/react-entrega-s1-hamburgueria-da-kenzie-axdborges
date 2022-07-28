import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        padding: 0px;
        margin: 0px;
        border: 0px;
        font-family: sans-serif;
    }

    #root, .App-header {
        height: 100%;
    }

    body {
        margin: 0;
        font-family: '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /* color: white; */
        width: 100vw;
        height: 100vh;
        background-color:var(--cinza-4)


    }

    main {
        width: 100%;
        height: 100%;
        padding: 1px;
        display: flex; 
        justify-content: space-evenly;
        margin-top: 60px;
        background-color: var(--cinza-4)
        
    }

    @media screen and (max-width: 900px){
        main {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            margin-top: -100px;
        }
    }
 
`;