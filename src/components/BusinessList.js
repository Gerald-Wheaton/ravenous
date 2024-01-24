import React from "react"
import { useState, useEffect } from "react"

import Business from "./Business.js"
import businesses from "./BusinessData.js"

import "../styles/business.css"

const BusinessList = (props) => {
  const { searchedBusiness, searchedCity } = props

  useEffect(() => {
    console.log(searchedBusiness)
  })

  return (
    <div className="container">
      {businesses.map((business, key) => (
        <Business
          key={key}
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
