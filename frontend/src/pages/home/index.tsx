import React from 'react'
import { useAppSelector } from '../../hooks'
import { selectPage } from '../../state/features/view'
import Worksite from '../../components/utility/worksite'

export default function Home() {

    //State access
	const page = useAppSelector(selectPage)


    let visibility = page === 'home' ? 'flex' : 'none'

    return (
		<div style={{display: visibility}} className='page'>
			<h1 className='page-title'>Home</h1>
			<Worksite />	
		</div>
		
    )
}