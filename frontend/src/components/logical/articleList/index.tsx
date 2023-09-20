import React from 'react';
import { useGetArticlesQuery } from '../../../state/features/api'
import ArticleCardComponent from '../articleCard';
import { AbstractArticle } from '../../../types';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { updateArticlePage, updateArticleTotalPages } from '../../../state/features/view';
import { selectArticlePage } from '../../../state/features/view';

export default function ArticleList() {
    //State access
    const page = useAppSelector(selectArticlePage)

    //Get posts mutation hook setup
    const { data: articles, isLoading, isFetching, isSuccess, isError, error } = useGetArticlesQuery(page)

    //Post content setup
    let articleContent: JSX.Element | string = 'No article available in DB'

    //Disptch setup
    const dispatch = useAppDispatch()

    //Post list content setup
    ////If the request is loading, display a loading message
    if (isLoading) {
        articleContent = 'Loading...'
    } 
    
    ////If the request is successful...
    else if (isSuccess) {
        ////and there are posts in the DB, display the posts
        if (articles.articles && articles.articles.length > 0) {
            articleContent =   <>
                                {articles.articles.map((article: AbstractArticle) => (
                                    <ArticleCardComponent key={article.title} article={article}/>
                                 ))}        
                            </>
            // dispatch(updateArticlePage({articlePage : articles.page}))
            dispatch(updateArticleTotalPages({articleTotalPages : articles.total_pages}))
        }
        ////If a refetch is triggered by another request, display a loading message
        if (isFetching) {
            articleContent = 'Updating...' 
        }
    }

    return (
        <>
            <div className={isFetching ? 'opacity-40' : ''}>{articleContent}</div>
            
        </>
    );
}
