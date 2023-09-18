/* istanbul ignore file */

// Article types

export interface AbstractArticle {
    title: string
    tags: Tag[]
    content: string
}

export type AbstractArticles = AbstractArticle[]

export interface ArticleCardProp {
    article: AbstractArticle
}


// Tag types

export interface Tag {
    icon: string,
    name: string,
    background_color: string
    text_color: string
}

export type Tags = Tag[]

export interface TagsListProp {
    tags: Tags
}

export interface TagComponentProp {
    tag: Tag
}