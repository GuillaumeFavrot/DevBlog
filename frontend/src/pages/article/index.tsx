import React from 'react';
import { useGetArticleQuery } from '../../state/features/api'
import { useAppSelector } from '../../hooks';
import { selectArticleId, selectLanguage, selectPage } from '../../state/features/view';
import parser from 'html-react-parser';
import { a } from 'msw/lib/glossary-de6278a9';

export default function Article() {
    //State access
    const lang = useAppSelector(selectLanguage)
    const id = useAppSelector(selectArticleId)
	const page = useAppSelector(selectPage)

    //Get posts mutation hook setup
    const { data: article, isLoading, isFetching, isSuccess, isError, error } = useGetArticleQuery({id: id, lang: lang})

    //Article content setup
    let content: string | JSX.Element | JSX.Element[] = '';

    ////If the request is loading, display a loading message
    if (isLoading) {
        content = 'Loading...'
    } 
    
    ////If the request is successful...
    else if (isSuccess && article) {
        ////and there are posts in the DB, display the posts
        content = parser(article.content)
    }

    ////If a refetch is triggered by another request, display a loading message
    if (isFetching) {
        content = 'Fetching...' 
    }

    //Image
    let image = article?.header_image ? <img className='article-header-image' src={`http://127.0.0.1:8000/posts/images/?q=${article.header_image}`} /> : null
    
    let visibility = page === 'article' ? 'flex' : 'none'
    
    return (
		<div style={{display: visibility}} className='page'>
            <div className='article-container' aria-label="article">
                <h1 className='article-title'>{article?.title}</h1>
                {image}
                <div className='article-content'>
                    {content}
                </div>
            </div>
		</div>
	)
}