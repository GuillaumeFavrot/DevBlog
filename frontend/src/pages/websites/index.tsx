import React from 'react'
import { useAppSelector } from '../../hooks'
import { selectPage } from '../../state/features/view'
import Worksite from '../../components/utility/worksite'

export default function Websites() {

    //State access
	const page = useAppSelector(selectPage)

    let visibility = page === 'websites' ? 'flex' : 'none'
    
    return (
		<div style={{display: visibility}} className='page'>
      <h1 className='page-title'>Websites</h1>
      <Worksite />
		</div>
    )
}