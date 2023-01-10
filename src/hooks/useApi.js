import { useState, useEffect } from 'react'
import axios from 'axios'

const useApi = (initUrl, initData) => {
  const [data, setData] = useState(initData)
  const [url, setUrl] = useState(initUrl)
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const getApi = async () => {
      setIsLoading(true)
      setIsError(false)
      try {
        const result = await axios(url)
        setData(result.data)
      } catch (error) {
        setIsError(true)
      }
      setIsLoading(false)
    }
    getApi()
  }, [])
  return [{ data, isError, isLoading }, setUrl]
}

export default useApi
