import { graphql } from "gatsby";

export const allBlogposts = graphql`
    query Blogposts {
        allMdx (sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
            frontmatter {
                author
                date (formatString: "DD MMMM YYYY")
                slug
                title
                hero_image {
                    childImageSharp {
                    gatsbyImageData (
                        width: 624
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                        aspectRatio: 1.3333333
                        quality: 80
                    )
                    }
                }
                hero_image_alt
            }
            excerpt
            id
            timeToRead
            }
        }
    }
`