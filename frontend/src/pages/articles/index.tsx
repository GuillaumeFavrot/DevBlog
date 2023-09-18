import React from 'react';
import ArticleList from '../../components/logical/articleList';



export default function Articles() {

    return (
		<div className='h-screen w-screen flex flex-col items-center bg-slate-600'>
				
					<h1 className='page-title' aria-label='main-title'>Articles</h1>

					<hr />

					<ArticleList />
		</div>

    )
}

