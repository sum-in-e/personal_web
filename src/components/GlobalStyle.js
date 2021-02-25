import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyle = createGlobalStyle`
    ${reset};
    
    a{
        text-decoration : none;
        color : inherit;
    }
    *{
        box-sizing : border-box;
        word-break : keep-all;
        word-wrap : break-word;
    }
    html, body{
        overflow : hidden;
        margin : 0;
        font-size : 25px;
        font-family: 'Gothic A1', sans-serif;
        font-weight : 200;
        line-height : 25px;
    }
`;

export default globalStyle;
