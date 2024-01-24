import logo from "./logo.svg"
import "./styles/App.css"

import { useState, useEffect } from "react"

import BusinessList from "./components/BusinessList.js"
import SearchBar from "./components/SearchBar.js"

function App() {
  const [desiredBusiness, setDesiredBusiness] = useState()
  const [desiredCity, setDesiredCity] = useState()

  const [b, setB] = useState()

  const searchBusiness = (business) => {
    setDesiredBusiness(business)
  }

  const searchCity = (city) => {
    setDesiredCity(city)
  }

  useEffect(() => {})

  return (
    <div className="App">
      <header className="App-header">
        {/* <img className="App-bg-image" /> */}
      </header>
      <body className="App-search-bars">
        <SearchBar searchBusiness={searchBusiness} searchCity={searchCity} />
        <BusinessList business={b} city={desiredCity} />
      </body>
    </div>
  )
}

export default App
