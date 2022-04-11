import React from "react";
import styled from "styled-components";
import Footer from "./footer";
import Header from "./header";
import Seo, { SeoProps } from "./seo";

interface LayoutProps extends SeoProps {
    children: any
}

const Layout = ({children, title, description, slug}: LayoutProps)=>{
    return (
        <LayoutContainer>
            <Seo title={title} description={description} slug={slug}/>
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
    @media screen and (max-width: 40rem){
        padding: 0 1rem;
    }
`

