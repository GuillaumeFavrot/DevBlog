import React from 'react';
import { useGetArticlesQuery } from '../../../state/features/api'
import { useAppDispatch } from '../../../hooks'
import ArticleCardComponent from '../articleCard';
import { AbstractArticle, AbstractArticles } from '../../../types';
import Articles from '../../../pages/articles';

export default function ArticleList() {

    // let articles : AbstractArticles = [
    //     {
    //         title : 'Lorem ipsum dolor sit amet, consectetur adipiscing',
	//         content : 'Sed accusantium doloremque. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem?',
    //         tags: [
    //             {
    //                 name: 'Django',
    //                 icon: 'django.png',
    //                 background_color: '#0C4B33',
    //                 text_color: '#FFFFFF'
    //             },
    //             {
    //                 name: 'Kubernetes',
    //                 icon: 'kubernetes.png',
    //                 background_color: '#316ce6',
    //                 text_color: '#FFFFFF'
    //             },
    //             {
    //                 name: 'React',
    //                 icon: 'react.png',
    //                 background_color: '#313335',
    //                 text_color: '#FFFFFF'
    //             },
    //             {
    //                 name: 'TailwindCSS',
    //                 icon: 'tailwind.png',
    //                 background_color: '#1d2434',
    //                 text_color: '#FFFFFF'
    //             },
    //             {
    //                 name: 'Redux',
    //                 icon: 'redux.png',
    //                 background_color: '#FFFFFF',
    //                 text_color: '#000000'
    //             },
    //         ]
    //     }
    // ]

    //Get posts mutation hook setup
    const { data: articles, isLoading, isFetching, isSuccess, isError, error } = useGetArticlesQuery()


    console.log('articles: ', articles)

    //useAppDispatch hook setup
    const dispatch = useAppDispatch()
    
    //Post content setup
    let articleContent: JSX.Element | string = 'No article available in DB'

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
                                {articles.map((article: AbstractArticle) => (
                                    <ArticleCardComponent article={article}/>
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
