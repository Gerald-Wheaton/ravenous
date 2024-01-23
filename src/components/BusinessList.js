import React from "react"
import { useState, useEffect } from "react"

import Business from "./Business.js"
import businesses from "./BusinessData.js"

const BusinessList = (props) => {
  const { searchedBusiness, searchedCity } = props

  useEffect(() => {
    console.log(searchedBusiness)
  })

  return businesses.map((business, key) => (
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
  ))
}

export default BusinessList
