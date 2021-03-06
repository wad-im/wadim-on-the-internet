import { createGlobalStyle} from "styled-components"
import PublicSans from '../font/PublicSans[wght].ttf'
import PublicSansItalic from '../font/PublicSans-Italic[wght].ttf'

const GlobalStyle = createGlobalStyle`

    @font-face {
    font-family: 'Public Sans';
    src: url(${PublicSans}) format('ttf'), url(${PublicSansItalic}) format('ttf')
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html{
        scroll-behavior: smooth;
    }
    body, html {
        font-family: "Public Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        color: ${({theme}) => theme.color.text};
        background-color: ${({theme}) => theme.color.background.main};
        font-size: ${({theme}) => theme.text.base};
    }
    p, ul, ol {
        line-height: ${({theme}) => theme.lineheight.relaxed};
        margin-bottom: 1rem;
        font-weight: 300;
    }
    ul, ol {
        margin-left: 2rem;
        list-style-position: outside;
    }
    li {
        padding-left: .5rem;
    }
    h1 {
        font-size: ${({theme}) => theme.text.h1};
        line-height: ${({theme}) => theme.lineheight.normal};
        margin-bottom: 1.75rem;
        font-weight: 600;

    }
    h2 {
        font-size: ${({theme}) => theme.text.h2};
        line-height: ${({theme}) => theme.lineheight.normal};
        margin-bottom: 1.125rem;
        margin-top: 1.125rem;
        font-weight: 500;
    }
    h3 {
        font-size: ${({theme}) => theme.text.h3};
        line-height: ${({theme}) => theme.lineheight.snug};
        margin-top: 1.4rem;
        margin-bottom: .75rem;
        font-weight: 500;
    }
    h4 {
        line-height: ${({theme}) => theme.lineheight.relaxed};
    }
    a {
        color: ${({theme}) => theme.color.text};
    }
    strong {
        font-weight: 500;
    }
    @media screen and (max-width: 37rem){
        h1 {
            font-weight:700;
        }
        h2, h3 {
            font-weight:600;
        }
    }
    
`


export default GlobalStyle