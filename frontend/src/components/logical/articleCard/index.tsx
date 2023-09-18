import React from 'react'
import TagsList from '../tagsList'
import { ArticleCardProp } from '../../../types'

export default function ArticleCardComponent({ article }: ArticleCardProp) {

	return (
		<div className='article-card-container bg-slate-400' aria-label="post" >
			<h3 className='article-card-title' aria-label="post-title">{article.title}</h3>

			<p className='article-card-content' aria-label="post-content">{article.content}</p>

			<TagsList tags={article.tags} />
		</div>
		
	)
}