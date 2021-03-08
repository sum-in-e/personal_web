import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyle = createGlobalStyle`
    ${reset};
   @font-face {
        font-family: 'ELAND_Choice_M';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts-20-12@1.0/ELAND_Choice_M.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

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
        font-family: 'NanumSquare', sans-serif;  
        font-size : 15px;
        -webkit-text-size-adjust :none;
        line-height : 20px;
        background-color : ${props => props.theme.white};
    }
`;

export default globalStyle;
