import Banner from '../../components/Banner'
import useApi from '../../hooks/useApi'
import { API_BASE_URL } from '../../components/constants/api'
import useProductSearch from '../../hooks/useProductSearch'
import SearchInput from '../../components/Search'
import ProductsGrid from '../../components/ProductsGrid'
import { LoadingSpinner } from '../../components/LoadingSpinner'
import AlertError from '../../components/AlertError'

export default function Homepage() {
  const { products, isLoading, isError } = useApi(API_BASE_URL)

  const { searchTerm, filteredProducts, handleSearchChange } =
    useProductSearch(products)

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (isError) {
    return (
     <AlertError message='An error occurred while loading the page.' />
    )
  }
  return (
    <main>
      <Banner />
      <div className='flex justify-between items-center m-5'>
        <h1 className='text-3xl font-bold text-primary '>Homepage</h1>
        <SearchInput value={searchTerm} onChange={handleSearchChange} />
      </div>
      {filteredProducts.length === 0 ? (
        <div className='flex items-center justify-center'>
          <p className='text-gray-600'>Product not found.</p>
        </div>
      ) : (
        <ProductsGrid products={filteredProducts} />
      )}
    </main>
  )
}
