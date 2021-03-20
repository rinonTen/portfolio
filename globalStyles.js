import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html, body {
    font-family: 'Heebo', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: normal;
    padding: 0;
    margin: 0;

    p {
        color: #21243D;
    }

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