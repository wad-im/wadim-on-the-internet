import React from "react";
import styled from "styled-components";
import Footer from "./footer";
import Header from "./header";
import Seo from "./seo";

const Layout = ({children}: any)=>{
    return (
        <LayoutContainer>
            <Seo/>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </LayoutContainer>
    )
}

export default Layout

const LayoutContainer = styled.div`
    max-width: 64rem;
    margin-right: auto;
    margin-left: auto;
    min-height: 100vh;
    padding: 0 2rem;
    display: grid;
    grid-template-rows: auto 1fr auto;
`

