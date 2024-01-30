import React from "react"

const SearchBar = (props) => {
  const { searchBusiness, searchCity } = props

  const handleBusiness = (e) => {
    searchBusiness(e.target.value)
  }
  const handleWhere = (e) => {
    searchCity(e.target.value)
  }

  return (
    <div>
      <input
        id="BusinessSearch"
        type="search"
        placeholder="Search Business"
        onChange={handleBusiness}
      />
      <input
        id="WhereSearch"
        type="search"
        placeholder="Where"
        onChange={handleWhere}
      />
    </div>
  )
}

export default SearchBar
