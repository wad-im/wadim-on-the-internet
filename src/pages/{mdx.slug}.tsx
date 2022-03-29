import { graphql, useStaticQuery } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'

const Blogpost = ()=>{

    const data = useStaticQuery(graphql`
        query Blogpost($id: String) {
            mdx(id: {eq: $id}) {
            frontmatter {
                title
                author
                created_at
            }
            body
            }
        }
    `)

    return (
        <Layout>
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>
        </Layout>
    )
}

export default Blogpost