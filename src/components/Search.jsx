import React from 'react'

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <div className="search-bar">
        <img src="/assets/search.png" alt="search" />
        <input
          placeholder="Search through thousands of movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  )
}

export default Search
