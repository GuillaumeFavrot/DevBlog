import React from 'react';
import ArticleList from '../../components/logical/articleList';
import PageCounter from '../../components/utility/pageCounter';
import { useAppSelector } from '../../hooks'
import { selectPage } from '../../state/features/view'



export default function Articles() {

    //State access
	const page = useAppSelector(selectPage)

	let visibility = page === 'articles' ? 'flex' : 'none'

    return (
		<div style={{display: visibility}} className='pt-2 h-100 min-h-screen w-screen flex flex-col items-center bg-slate-600'>
				
					<ArticleList />

					<PageCounter />
		</div>

    )
}

