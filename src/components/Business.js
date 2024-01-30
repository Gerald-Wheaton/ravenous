import React from "react"

import "../styles/business.css"

const Business = (props) => {
  const {
    image,
    name,
    address,
    city,
    state,
    zipCode,
    category,
    rating,
    reviewCount,
  } = props

  console.log(image)

  return (
    <div className="column">
      <div className="image-container">
        <img src={image} />
      </div>
      <h1 className="title">{name}</h1>
      <div className="business-info-container">
        <div className="business-info-column left-column">
          <p>{address}</p>
          <p>{city}</p>
          <p>
            {state} {zipCode}
          </p>
        </div>
        <div className="business-info-column right-column">
          <p className="business-category">{category}</p>
          <p style={{ color: "#152636", fontWeight: 800 }}> {rating} stars</p>
          <p>{reviewCount} reviews</p>
        </div>
      </div>
    </div>
  )
}

export default Business
