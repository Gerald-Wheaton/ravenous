import React from "react"
import { useState } from "react"

import "../styles/search.css"

const SearchBar = (props) => {
  const { searchResults } = props

  const [searchData, setSearchData] = useState({
    business: "",
    place: "",
  })

  const handleInputChange = (e) => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    searchResults(searchData)
  }

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <div className="search-input-container">
        <input
          name="business"
          type="text"
          className="business-search"
          placeholder="Search Business"
          onChange={handleInputChange}
        />
        <input
          name="place"
          type="text"
          className="where-search"
          placeholder="Where?"
          onChange={handleInputChange}
        />
      </div>
      <div>
        <div className="button-container">
          <button
            type="submit"
            className="search-button"
            style={{ outline: "none" }}
            // onClick={() => {}}
          >
            Let's Go
          </button>
        </div>
      </div>
    </form>
  )
}

export default SearchBar
