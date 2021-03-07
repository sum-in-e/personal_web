import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyle = createGlobalStyle`
    ${reset};
    @font-face {
        font-family: 'NanumBarunGothic';
        font-style: normal;
        font-weight: 400;
        src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot');
        src: url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot?#iefix') format('embedded-opentype'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.woff') format('woff'), url('//cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.ttf') format('truetype');
    }
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
        word-break :normal;
        word-wrap : break-word;
    }
    html, body{
        overflow-x : hidden;
        font-family: 'NanumSquare', sans-serif;  
        font-size : 18px;
        line-height : 25px;
        background-color : ${props => props.theme.white};
    }
`;

export default globalStyle;
