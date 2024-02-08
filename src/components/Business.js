import React from "react"

import "../styles/gridLayout.css"

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

  return (
    <div className="grid-item">
      <div className="image-container">
        <img src={image} />
      </div>
      <h1 className="title">{name}</h1>
      <div className="info-container">
        <div className="info-column" style={{ textAlign: "left" }}>
          <p>{address}</p>
          <p>{city}</p>
          <p>
            {state} {zipCode}
          </p>
        </div>
        <div className="info-column" style={{ textAlign: "right" }}>
          <p className="business-category">{category}</p>
          <p className="business-review"> {rating} stars</p>
          <p>{reviewCount} reviews</p>
        </div>
      </div>
    </div>
    // <div className="column">
    //   <div className="image-container">
    //     <img src={image} />
    //   </div>
    //   <h1 className="title">{name}</h1>
    //   <div className="business-info-container">
    //     <div className="business-info-column left-column">
    //       <p>{address}</p>
    //       <p>{city}</p>
    //       <p>
    //         {state} {zipCode}
    //       </p>
    //     </div>
    //     <div className="business-info-column right-column">
    //       <p className="business-category">{category}</p>
    //       <p style={{ color: "#152636", fontWeight: 800 }}> {rating} stars</p>
    //       <p>{reviewCount} reviews</p>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Business
