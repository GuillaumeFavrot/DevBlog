import React from 'react'
import { TagComponentProp } from '../../../types'

function TagComponent({ tag }: TagComponentProp) {

    
    return (
        <div className={`tag-container`} style={{backgroundColor: tag.background_color}}>
            <img className='tag-image' src={process.env.PUBLIC_URL + 'images/tags/' + tag.icon} alt="tag" />
            <h5 className='tag-name' style={{color: tag.text_color}}>{tag.name}</h5>
        </div>
    )
}

export default TagComponent