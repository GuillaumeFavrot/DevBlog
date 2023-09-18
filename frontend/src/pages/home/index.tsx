import React from 'react'
import { useAppSelector } from '../../hooks'
import { selectPage } from '../../state/features/view'

export default function Home() {

    //State access
	const page = useAppSelector(selectPage)

    let visibility = page === 'home' ? 'flex' : 'none'

    return (
		<div style={{display: visibility}} className='h-screen w-screen flex flex-col items-center bg-slate-600'>		
			<h1 className='page-title' aria-label='main-title'>Home</h1>
		</div>
    )
}