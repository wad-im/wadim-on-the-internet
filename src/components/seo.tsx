import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"
import theme from "../style/theme"
import { ISeo } from "../types/seo.types"


export interface SeoProps {
    title?: string,
    description?: string,
    slug?: string,
    seoImage?: string
}

const Seo = ({title, description, slug, seoImage}: SeoProps)=>{

    const { site } = useStaticQuery(seoData)

    const {
        defaultTitle,
        defaultDescription,
        defaultAuthor,
        defaultSeoImage,
        siteUrl,
    } = site.siteMetadata

    const seo: ISeo = {
        title: title ? `${title}` : defaultTitle,
        description: description || defaultDescription,
        author: defaultAuthor,
        siteUrl: slug ? `${siteUrl}${slug}/` : `${siteUrl}/`,
        seoImage: seoImage ? seoImage : defaultSeoImage
      }


    return (
        <Helmet htmlAttributes={{ lang: "en" }} title={seo.title}>

            <script defer data-domain="wadimbaslow.com" src="https://plausible.io/js/plausible.js"></script>

            <meta name="description" content={seo.description}/>
            <meta name="author" content={seo.author}></meta>
            <link rel="canonical" href={seo.siteUrl}/>

            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />

            {<meta property="og:image" content={seo.seoImage} />}
            <meta property="og:url" content={seo.siteUrl} />
            <meta property="og:type" content="website" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description}/>
            <meta name="twitter:image" content={seo.seoImage} />

            <meta itemProp="name" content='wadim' />
            <meta itemProp="description" content={seo.description} />
            <meta itemProp="image" content={seo.seoImage} />

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
        defaultSeoImage: seoImageUrl
      }
    }
  }
`