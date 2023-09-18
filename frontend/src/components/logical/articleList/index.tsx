import React from 'react';
import { useGetArticlesQuery } from '../../../state/features/api'
import { useAppDispatch } from '../../../hooks'
import ArticleComponent from '../article';
import { Article } from '../../../types';

export default function ArticleList() {

    //Get posts mutation hook setup
    const { data: articles, isLoading, isFetching, isSuccess, isError, error } = useGetArticlesQuery()

    //useAppDispatch hook setup
    const dispatch = useAppDispatch()
    
    //Post content setup
    let articleContent: JSX.Element | string = 'No post available in DB'

    //Post list content setup
    ////If the request is loading, display a loading message
    if (isLoading) {
        articleContent = 'Loading...'
    } 
    
    ////If the request is successful...
    else if (isSuccess) {
        ////and there are posts in the DB, display the posts
        if (articles && articles.length > 0) {
            articleContent =   <>
                                {articles.map((article: Article) => (
                                    <ArticleComponent/>
                                 ))}        
                            </>
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