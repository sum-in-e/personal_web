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
    }
    html, body{
        margin : 0;
        font-size : 16px;
    }
`;

export default globalStyle;
