// ! Custom Hook
import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetchApi = (initUrl, initData) => {
  const [data, setDate] = useState(initData)
  const [url, setUrl] = useState(initUrl)
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const fetchApi = async () => {
      setIsLoading(true)
      setIsError(false)
      try {
        const result = await axios(url)
        setDate(result.data)
      } catch (error) {
        setIsError(true)
      }
      setIsLoading(false)
    }
    fetchApi()
  }, [url])
  return [{ data, isError, isLoading }, setUrl]
}

export default useFetchApi
