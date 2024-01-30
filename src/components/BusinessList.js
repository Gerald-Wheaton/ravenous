import React from "react"
import { useState, useEffect } from "react"

import Business from "./Business.js"
import businesses from "./BusinessData.js"

import "../styles/business.css"

const BusinessList = (props) => {
  const { searchedBusiness, searchedCity } = props
  const [bSearch, setBSearch] = useState()

  const filteredData = businesses.filter((business) =>
    business.name.includes(bSearch)
  )

  useEffect(() => {
    setBSearch(searchedBusiness)
    let t = []
    businesses.filter((business) => {
      if (business.name.includes("Fr")) {
        t.push(business)
      }
    })

    console.log(t)
  }, [searchedBusiness])

  return (
    <div className="container">
      {businesses.map((business, key) => (
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
