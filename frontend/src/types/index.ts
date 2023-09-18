/* istanbul ignore file */
export interface Article {
    id: number,
    title_fr: string
    title_en: string
    header_image: string
    tags: Tag[]
    user: string
    content_fr: string
    content_en: string
    abstract_fr: string
    abstract_en: string
}

export type Articles = Article[]

export interface Tag {
    id: number,
    name_fr: string,
    name_en: string
}