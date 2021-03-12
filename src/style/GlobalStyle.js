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
        font-family: 'NanumSquare', sans-serif;  
        font-size : 15px;
        -webkit-text-size-adjust :none;
        -webkit-tap-highlight-color:transparent;
        line-height : 20px;
        background-color : ${props => props.theme.white};

        @media ${props => props.theme.l} {
		    font-size : 17px;
            line-height : 23px;
	    }
        @media ${props => props.theme.xxl} {
		    font-size : 18px;
            line-height : 25px;
	    }
    }
`;

export default globalStyle;
