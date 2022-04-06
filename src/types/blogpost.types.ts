export interface IBlogpost {
    frontmatter: IBlogpostFrontmatter,
    body: any,
    excerpt: string
    id: string
    timeToRead: number
}

export interface IBlogpostFrontmatter {
    title: string,
    author: string,
    date: string,
    slug: string,
    hero_image: any,
    hero_image_alt: string
}