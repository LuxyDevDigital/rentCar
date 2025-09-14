import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const TestimonialCard = ({title,description,authorName,authorRole,authorImage}) => {
  return (
      <div className="testimonial-card">
           <FontAwesomeIcon className='quote-icon ' icon={faQuoteLeft} size='3x'/>
            <h3 className='testimonial-title'>{title}</h3>
            <p className="testimonial-description">
              {description}
            </p>
            <div className="testimonial-author">
              <img
                src={authorImage}
                alt={authorName}
              />
              <div>
                <div className="author-name">{authorName}</div>
                <div className="author-role">{authorRole}</div>
              </div>
            </div>
          </div>
  )
}

export default TestimonialCard