import React, { useState } from "react";
import styled from "styled-components";
import Footer from "./footer";
import Header from "./header";
import MobileMenu from "./mobile-menu";
import Seo, { SeoProps } from "./seo";
import {PageProps} from 'gatsby'

interface LayoutProps extends SeoProps {
    children: any,
}

const Layout = ({children, title, description, slug, seoImage}: LayoutProps)=>{

    const [openMenu, setOpenMenu] =useState(false)

    return (
        <LayoutContainer>
            <Seo title={title} description={description} slug={slug} seoImage={seoImage}/>
            <Header open={openMenu} setOpen={setOpenMenu}/>
            <MobileMenu open={openMenu} setOpen={setOpenMenu}/>
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

