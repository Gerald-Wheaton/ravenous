import React from "react"

import Business from "./Business.js"
import businessData from "./BusinessData.js"

import "../styles/gridLayout.css"

const BusinessList = (props) => {
  const { search } = props

  const searchIsActive = (obj) => {
    let isActive = false
    if (obj) {
      isActive = !Object.values(obj).every((value) => value === "")
    }
    return isActive
  }

  return (
    <div className="grid-container">
      {searchIsActive(search)
        ? businessData
            .filter(
              (business) =>
                (!search.business || business.name === search.business) &&
                (!search.place || business.city === search.place)
            )
            .map((business, key) => (
              <Business
                key={key}
                image={business.image}
                name={business.name}
                address={business.address}
                city={business.city}
                state={business.state}
                zipCode={business.zipCode}
                category={business.category}
                rating={business.rating}
                reviewCount={business.reviewCount}
              />
            ))
        : businessData.map((business, key) => (
            <Business
              key={key}
              image={business.image}
              name={business.name}
              address={business.address}
              city={business.city}
              state={business.state}
              zipCode={business.zipCode}
              category={business.category}
              rating={business.rating}
              reviewCount={business.reviewCount}
            />
          ))}
    </div>
  )
}

export default BusinessList
