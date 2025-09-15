import React from 'react'
import LinkItem from './components/LinkItem'

const NotFound = () => {
  return (
    <div className='notfound-container'>
        <h1 className='notfound-title'>404 Not Found</h1>
        <LinkItem path={'/'}>Go to Home</LinkItem>
    </div>
  )
}

export default NotFound