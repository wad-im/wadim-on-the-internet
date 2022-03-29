import { createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: 0;
    }
    html{
        scroll-behavior: smooth;
    }
    body, html {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }
    p, h1 {
        line-height: 1.5;
    }
`


export default GlobalStyle