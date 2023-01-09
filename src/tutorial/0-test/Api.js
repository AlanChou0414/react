import React, { useState, useEffect } from 'react'

// * css :
import './Table.css'

// * components :
import axios from 'axios'

// ? URL :
/*
  url : 'https://hn.algolia.com/api/v1/search?query=redux'
  user : 'https://reqres.in/api/users'
*/

const Api = () => {
  // use setData() to get API data ==>
  const [data, setData] = useState([])
  // use setQuery() to event input change ==>
  const [query, setQuery] = useState('')
  // use setUrl to get query value ==>
  const [url, setUrl] = useState('https://hn.algolia.com/api/v1/search?query=redux')
  // set isLoading state true || false to display Loading message ==>
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      const res = await axios(url)
      const data = await res.data.hits
      setData(data)
      setIsLoading(false)
    }
    getData()
  }, [url])

  const handleQuery = (event) => {
    setQuery(event.target.value)
  }

  const handleSearch = () => {
    setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
  }

  return (
    <>
      <h1>API</h1>
      <input
        type="text"
        placeholder='Redux'
        onChange={handleQuery}
      />
      <input
        type="button"
        value="Search"
        onClick={handleSearch}
      />
      <table>
        <thead>
          <tr>
            <th>TITLE</th>
            <th>LINK</th>
          </tr>
        </thead>
        <tbody>
          {
            isLoading
              ? (<h1>Loading...</h1>)
              : (
                  data.map(item => {
                    return (
                    <tr key={item.objectID}>
                      <td>{item.title}</td>
                      <td>{item.url}</td>
                    </tr>
                    )
                  })
                )
          }
        </tbody>
      </table>
    </>
  )
}

export default Api
