import { useState, useEffect } from 'react'

export default function useApi(url) {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true)
        setIsError(false)
        const fetchedData = await fetch(url)
        if (!fetchedData.ok) {
          throw new Error(`HTTP error! Status: ${fetchedData.status}`)
        }
        const json = await fetchedData.json()
        setProducts(json)
      } catch (error) {
        console.log(error)
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    getData()
  }, [url])
  return { products, isLoading, isError }
}
