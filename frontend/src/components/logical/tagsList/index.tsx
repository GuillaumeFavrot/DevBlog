import React from 'react'
import { TagsListProp, Tag } from '../../../types'
import TagComponent from '../tag'

function TagsList({ tags } : TagsListProp) {
  return (
    <div className='tags-container'>
        {tags.map((tag: Tag) => (
            <TagComponent key={tag.name} tag={tag}/>
        ))}        
    </div>
  )
}

export default TagsList