import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Bookmark = () => {
  return (
    <div className='bookmark-badge'>
        <FontAwesomeIcon icon={faBookmark} />
    </div>
  )
}

export default Bookmark