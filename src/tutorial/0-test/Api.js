import React, { useState } from 'react'
import useFetchApi from '../../hooks/useFetchApi'

// * css :
import './Table.css'

// ? URL :
/*
  url : 'https://hn.algolia.com/api/v1/search?query=redux'
  user : 'https://reqres.in/api/users'
*/

const url = 'https://hn.algolia.com/api/v1/search?query=redux'

const Api = () => {
  const [query, setQuery] = useState('')
  const [{ data, isLoading, isError }, setUrl] = useFetchApi(url, { hits: [] })

  const handleQuery = (event) => {
    setQuery(event.target.value)
  }
  const handleSearch = (event) => {
    setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
    event.preventDefault()
  }

  return (
    <>
      <h1>API</h1>
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
      {isError
        ? <h1>Something is wrong...</h1>
        : (isLoading
            ? <h1>Loading...</h1>
            : <table>
            <thead>
              <tr>
                <th>TITLE</th>
                <th>LINK</th>
              </tr>
            </thead>
            <tbody>
              {
                data.hits.map(item => {
                  return (
                    <tr key={item.objectID}>
                      <td>{item.title}</td>
                      <td>{item.url}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
          )
      }
    </>
  )
}

export default Api
