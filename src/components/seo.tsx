import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"
import theme from "../style/theme"
import { ISeo } from "../types/seo.types"


export interface SeoProps {
    title?: string,
    description?: string,
}

const Seo = ({title, description}: SeoProps)=>{

    const { href } = useLocation()
    const { site } = useStaticQuery(seoData)

    const {
        defaultTitle,
        defaultDescription,
        defaultAuthor,
        siteUrl,
    } = site.siteMetadata

    const seo: ISeo = {
        title: title ? `${title} | ${defaultTitle}` : defaultTitle,
        description: description || defaultDescription,
        author: defaultAuthor,
        siteUrl: siteUrl,
      }

    return (
        <Helmet htmlAttributes={{ lang: "en" }} title={seo.title}>
            
            <meta name="description" content={seo.description}/>
            <meta name="author" content={seo.author}></meta>

            {/* <link rel="base" href={seo.baseUrl} /> */}

            <meta property="og:title" content={seo.author} />
            <meta property="og:description" content={seo.description} />

            {/* <meta property="og:image" content={seo.image} /> */}
            <meta property="og:url" content={href} />
            <meta property="og:type" content="website" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo.author} />
            <meta name="twitter:description" content={seo.description}/>
            {/* <meta name="twitter:image" content={seo.image} /> */}

            <meta itemProp="name" content='wadim' />
            <meta itemProp="description" content={seo.description} />
            {/* <meta itemProp="image" content={seo.image} /> */}

            <meta name="theme-color" content={theme.color.primary} />
            <meta name="msapplication-navbutton-color" content={theme.color.primary} />
            <meta name="apple-mobile-web-app-status-bar-style" content={theme.color.primary} />
        </Helmet>
    )
}

export default Seo

const seoData = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultAuthor: author
        siteUrl
      }
    }
  }
`