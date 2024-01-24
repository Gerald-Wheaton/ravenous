import React from "react"

import "../styles/business.css"

const Business = (props) => {
  const { name, address, city, state, zipCode, category, rating, reviewCount } =
    props

  return (
    <div className="column">
      {/*<img src={image} />*/}
      <h1>{name}</h1>
      <div className="business-card">
        <p>{address}</p>
        <p>{city}</p>
        <p>
          {state} {zipCode}
        </p>
      </div>
      <div>
        <h1>{category}</h1>
        <p>{rating}</p>
        <p>{reviewCount}</p>
      </div>
    </div>
  )
}

export default Business
