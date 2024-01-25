import React from "react"
import "./styles/App.css"

import { useState, useEffect } from "react"

import BusinessList from "./components/BusinessList.js"
import SearchBar from "./components/SearchBar.js"

function App() {
  const [desiredBusiness, setDesiredBusiness] = useState("")
  const [desiredCity, setDesiredCity] = useState("")

  const searchBusiness = (business) => {
    setDesiredBusiness(business)
  }

  const searchCity = (city) => {
    setDesiredCity(city)
  }

  useEffect(() => {
    console.log(desiredBusiness)
  }, [desiredBusiness])

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-bar">
          <h1 className="header-text">BE/\CH eats </h1>
        </div>
        {/* <img className="App-bg-image" /> */}
      </header>
      <body className="App-search-bars">
        <SearchBar searchBusiness={searchBusiness} searchCity={searchCity} />
        <BusinessList business={desiredBusiness} city={desiredCity} />
      </body>
    </div>
  )
}

export default App
