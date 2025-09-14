import React from 'react'
import LinkItem from './LinkItem'
import Bookmark from './Bookmark'

const CarCard = ({image, title, characteristics, price,detailsPath,specialOffer}) => {
  return (
       <div className="car-card">
            <div className="car-image">
              <img src={image} alt={title} />
              {specialOffer && <span className="badge">{specialOffer}</span>}
              <Bookmark />
            </div>
            <div className="car-info">
              <h3>{title}</h3>
              <p>{characteristics.join(" • ")}</p>
              <div className="price">{price}</div>
              <LinkItem path={detailsPath}>
                View Details
              </LinkItem>
            </div>
          </div>
  )
}

export default CarCard