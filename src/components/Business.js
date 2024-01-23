import React from "react"

const Business = (props) => {
  const {
    name,
    address,
    city,
    state,
    zipCode,
    category,
    rating,
    reviewCount,
  } = props


  return (
    <div>
      {/*<img src={image} />*/}
      <h1>{name}</h1>
      <div>
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
