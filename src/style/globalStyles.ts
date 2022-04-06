import { createGlobalStyle} from "styled-components"
import PublicSans from '../font/PublicSans[wght].ttf'


const GlobalStyle = createGlobalStyle`

    @font-face {
    font-family: 'Public Sans';
    src: url(${PublicSans}) format('ttf'),
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: 0;
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
        margin-bottom: 1.5rem;
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
        line-height: ${({theme}) => theme.lineheight.relaxed};
        margin-bottom: 1.75rem;

    }
    h2 {
        font-size: ${({theme}) => theme.text.h2};
        line-height: ${({theme}) => theme.lineheight.tight};
        margin-bottom: 1.125rem;
        margin-top: 1.125rem;
    }
    h3 {
        font-size: ${({theme}) => theme.text.h3};
        line-height: ${({theme}) => theme.lineheight.snug};
        margin-top: 1.4rem;
        margin-bottom: .75rem;
    }
    h4 {
        line-height: ${({theme}) => theme.lineheight.relaxed};
    }
    a {
        color: ${({theme}) => theme.color.text};
    }
`


export default GlobalStyle