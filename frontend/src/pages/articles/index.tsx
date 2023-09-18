import React from 'react';
import ArticleList from '../../components/logical/articleList';


export default function Articles() {

    return (
		<div className='h-screen w-screen flex items-center bg-slate-600'>
			
				<div className="bg-slate-500 max-w-lg card">
				
					<h1 className='card-title' aria-label='main-title'>Articles</h1>

					<img className='card-image' src='/home/guillaume/Code/devblog/frontend/public/images/django.png' alt='article-image'></img>
					
					<hr />

					<ArticleList />
				
				</div> 

		</div>

    )
}

