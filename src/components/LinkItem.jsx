import React from 'react'
import { Link } from 'react-router-dom'

const LinkItem = ({path,children, className}) => {
  return (
   <Link className={`nav_link ${className}`} to={path}>{children}</Link>
  )
}

export default LinkItem