import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Wadim Baslow`,
    siteUrl: `https://wadimbaslow.com`,
    description: `Hi, I am Wadim. I am a senior project manager in sustainability with expertise in multi-stakeholder project design, management & facilitation.`,
    author: `Wadim Baslow`,
    seoImageUrl: 'https://res.cloudinary.com/wadimbaslow-com/image/upload/v1652437341/seoImage-wadimBaslowCom_1_kfrn5l.jpg'
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          formats: ["auto", "webp"],
          placeholder: "blurred",
          quality: 80,
        }
      }
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `./blog`,
      },
    },
  ],
  trailingSlash: "always",
};

export default config;
