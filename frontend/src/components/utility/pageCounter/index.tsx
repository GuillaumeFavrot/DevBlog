import React from 'react'
import { useAppSelector } from '../../../hooks'
import { selectArticleTotalPages, selectArticlePage, updateArticlePage} from '../../../state/features/view'
import Button from '../button/Button'
import { ButtonParams } from '../../../types'
import { useAppDispatch } from '../../../hooks'
import { c } from 'msw/lib/glossary-de6278a9'

export default function PageCounter() {

    //State access
    const total_pages = useAppSelector(selectArticleTotalPages)
    const page = useAppSelector(selectArticlePage)

    //dispatch
    const dispatch = useAppDispatch()


    //Button functions
    const toFirst = () => {
        dispatch(updateArticlePage({articlePage : 1}))
    }

    const toNext = () => {
        if (page < total_pages) {
            dispatch(updateArticlePage({articlePage : page + 1}))
        }
    }

    const toPrevious = () => {
        if (page > 1) {
            dispatch(updateArticlePage({articlePage : page - 1}))
        }
    }

    const toLast = () => {
        dispatch(updateArticlePage({articlePage : total_pages}))
    }

    //Button params setup

    const firstButtonParams : ButtonParams = {
		content : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-double-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    <path fillRule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>,
		onClickFunction: toFirst,
		ariaLabel: "first_page",
	}

    const previousButtonParams : ButtonParams = {
		content : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>,
		onClickFunction: toPrevious,
		ariaLabel: "previous_page",
	}

    const nextButtonParams : ButtonParams = {
		content : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>,
		onClickFunction: toNext,
		ariaLabel: "next_page",
	}

    const lastButtonParams : ButtonParams = {
		content : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-double-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                    <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>,
		onClickFunction: toLast,
		ariaLabel: "last_page",
	}

    return (
        <div className='page-counter'>
            <Button buttonParams={firstButtonParams}/>
            <Button buttonParams={previousButtonParams}/>
            <p>{page}</p>
            <Button buttonParams={nextButtonParams}/>
            <Button buttonParams={lastButtonParams}/>
        </div>
    )
    }