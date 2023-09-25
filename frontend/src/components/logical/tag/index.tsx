import React from 'react'
import { TagComponentProp } from '../../../types'

function TagComponent({ tag }: TagComponentProp) {

    return (
        <div className={`tag-container`} style={{backgroundColor: tag.background_color}} aria-label='tag-container'>
            <img className='tag-image' src={`http://127.0.0.1:8000/posts/icons/?q=${tag.icon}`} alt="tag" />
            <h5 className='tag-name' style={{color: tag.text_color}}>{tag.name}</h5>
        </div>
    )
}

export default TagComponent