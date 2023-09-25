import React, { useEffect } from 'react';
import { useGetArticlesQuery } from '../../../state/features/api'
import ArticleCardComponent from '../articleCard';
import { AbstractArticle } from '../../../types';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { updateArticleTotalPages } from '../../../state/features/view';
import { selectArticlePage, selectLanguage } from '../../../state/features/view';
import { a } from 'msw/lib/glossary-de6278a9';

export default function ArticleList() {
    //State access
    const page = useAppSelector(selectArticlePage)
    const lang = useAppSelector(selectLanguage)

    //Get posts mutation hook setup
    const { data: articles, isLoading, isFetching, isSuccess, isError, error } = useGetArticlesQuery({page: page, lang: lang})

    console.log(isSuccess, articles)

    //Post content setup
    let articleContent: JSX.Element | string = 'No article available in DB'

    //Disptach setup
    const dispatch = useAppDispatch()

    //Update total pages in state
    useEffect(() => {
        if (isSuccess && articles) {
            dispatch(updateArticleTotalPages({articleTotalPages : articles.total_pages}))
        }
    }, [isSuccess, articles, dispatch])

    //Post list content setup
    ////If the request is loading, display a loading message
    if (isLoading) {
        articleContent = 'Loading...'
    } 

    
    
    ////If the request is successful...
    else if (isSuccess && articles && articles.articles && articles.articles.length > 0) {
        ////and there are posts in the DB, display the posts
        articleContent =   <>
                            {articles.articles.map((article: AbstractArticle) => (
                                <ArticleCardComponent key={article.title} article={article}/>
                             ))}        
                        </>
    }

    ////If a refetch is triggered by another request, display a loading message
    if (isFetching) {
        articleContent = 'Updating...' 
    }

    return (
        <>
            <div className={isFetching ? 'opacity-40' : ''} aria-label='article-list'>
                {articles && articleContent}
            </div>
        </>
    );
}
