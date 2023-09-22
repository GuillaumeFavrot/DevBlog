import React from 'react';
import { useGetArticleQuery } from '../../state/features/api'
import { useAppSelector } from '../../hooks';
import { selectArticleId, selectLanguage, selectPage } from '../../state/features/view';
import parser from 'html-react-parser';

export default function Article() {
    //State access
    const lang = useAppSelector(selectLanguage)
    const id = useAppSelector(selectArticleId)
	const page = useAppSelector(selectPage)

    //Get posts mutation hook setup
    const { data: article, isLoading, isFetching, isSuccess, isError, error } = useGetArticleQuery({id: id, lang: lang})

    //Article content setup
    let content = '';
    
    ////If the request is loading, display a loading message
    if (isLoading) {
        content = 'Loading...'
    } 
    
    ////If the request is successful...
    else if (isSuccess && article) {
        ////and there are posts in the DB, display the posts
        content = article.content
    }

    ////If a refetch is triggered by another request, display a loading message
    if (isFetching) {
        content = 'Fetching...' 
    }
    
    let visibility = page === 'article' ? 'flex' : 'none'
    
    return (
		<div style={{display: visibility}} className='pt-2 h-100 min-h-screen w-screen flex flex-col items-center bg-slate-600'>
            <div className='article-container'>
                <h1 className='article-title'>{article?.title}</h1>
                <div>
                    {parser(content)}
                </div>
            </div>
		</div>
	)
}