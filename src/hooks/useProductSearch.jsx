import { useState } from 'react'

const useProductSearch = (initialProducts) => {
  const [searchTerm, setSearchTerm] = useState('')

  const matchProduct = (product, searchTerm) => {
    const searchRegex = new RegExp(`\\b${searchTerm}`, 'i')
    return searchRegex.test(product.title)
  }

  const filteredProducts = initialProducts.filter((product) =>
    matchProduct(product, searchTerm),
  )

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return { searchTerm, filteredProducts, handleSearchChange }
}

export default useProductSearch
