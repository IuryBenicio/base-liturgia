import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Quicksand", sans-serif;
        list-style: none;
        
    }
    .container{
        @media screen and (max-width: 480px) {
            width: 100%;
        }
    }
`;
