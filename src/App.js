import React from "react"
import "./styles/App.css"

import { useState, useEffect } from "react"

import BusinessList from "./components/BusinessList.js"
import SearchBar from "./components/SearchBar.js"

function App() {
  const [search, setSearch] = useState()

  const searchResults = (business) => {
    setSearch(business)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-banner">
          <h1 className="header-text">BE/\CH eats </h1>
        </div>
        <div className="header-search">
          <SearchBar searchResults={searchResults} />
        </div>
      </header>
      <body className="app-content-container">
        <BusinessList search={search} />
      </body>
    </div>
  )
}

export default App
