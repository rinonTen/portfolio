import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html, body {
    font-family: "", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: normal;
    padding: 0;
    margin: 0;

    ul {
        list-style: none;
        padding: 0;

     a {
         text-decoration: none;
     }
    }
}
`;

export { GlobalStyles };