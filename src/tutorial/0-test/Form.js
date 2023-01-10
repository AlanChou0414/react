import React from 'react'

const Form = ({ setQuery, setUrl, query }) => {
  const handleQuery = (event) => {
    setQuery(event.target.value)
  }
  const handleSearch = (event) => {
    setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
    event.preventDefault()
  }
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder='Redux'
        onChange={handleQuery}
      />
      <input
        type="submit"
        value="Search"
      />
    </form>
  )
}

export default Form
