import React, { useState, useEffect } from 'react'
import axios from 'axios'

const url = 'https://hn.algolia.com/api/v1/search?query=redux'

const Link = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const getAPI = async () => {
      const res = await axios(url)
      setData(res.data.hits)
    }
    getAPI()
  }, [])
  return (
    <>
      <h1>Link</h1>
      <ul>
        {
          data.map(item => {
            return (
              <li key={item.objectID}>
                <a href={item.url}>{item.title}</a>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default Link
