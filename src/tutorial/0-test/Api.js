import React, { useState } from 'react'
import useFetchApi from '../../hooks/useFetchApi'
import Table from './Table'
import Form from './Form'

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

  return (
    <>
      {console.log('component render')}
      <h1>API</h1>
      <Form setQuery={setQuery} setUrl={setUrl} query={query} />
      {isError
        ? <h1>Something is wrong...</h1>
        : (isLoading
            ? <h1>Loading...</h1>
            : <Table data={data} />
          )
      }
    </>
  )
}

export default Api
