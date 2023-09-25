import React from 'react'
import { useAppSelector } from '../../../hooks'
import { selectLanguage } from '../../../state/features/view'

function Worksite() {

	const language = useAppSelector(selectLanguage)

    let content = ''

	language === 'en' ? content = 'This page is under construction.' : content = 'Cette page est en cours de construction.'
	
	return (
		<div className='worksite'>
			<img className='worksite-image' src="data:image/png;base64,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" alt="chantier"></img>
			<p className='worksite-text'>{content}</p>
		</div>
	)
}

export default Worksite