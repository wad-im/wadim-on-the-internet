export interface IBlogpost {
    frontmatter: IBlogpostFrontmatter,
    body: any,
    excerpt: string
    id: string
    timeToRead: number
    remoteHeroImage: any
}

export interface IBlogpostFrontmatter {
    title: string,
    date: string,
    slug: string,
    description?: string,
    localHeroImage: any,
    remoteHeroImage: any,
    heroImageAlt: string,
    ogImage: string
}