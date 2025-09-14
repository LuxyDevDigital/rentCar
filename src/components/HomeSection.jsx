import React from 'react'
import LinkItem from './LinkItem'

const HomeSection = ({title , linkLabel, linkPath, children,className}) => {
  return (
    <section className="section">
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
          {linkLabel && <LinkItem path={linkPath}>{linkLabel}</LinkItem>}
        </div>
        <div className={`section-grid ${className}`}>
          {children}
        </div>
      </section>
  )
}

export default HomeSection