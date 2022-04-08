export interface IBlogpost {
    frontmatter: IBlogpostFrontmatter,
    body: any,
    excerpt: string
    id: string
    timeToRead: number
}

export interface IBlogpostFrontmatter {
    title: string,
    date: string,
    slug: string,
    description?: string,
    heroImage: any,
    heroImageAlt: string
}