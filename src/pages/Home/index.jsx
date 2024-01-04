import Banner from '../../components/Banner'
import useApi from '../../hooks/useApi'
import { API_BASE_URL } from '../../components/constants/api'
import useProductSearch from '../../hooks/useProductSearch'
import SearchInput from '../../components/Search'
import ProductsGrid from '../../components/ProductsGrid'
import { LoadingSpinner } from '../../components/LoadingSpinner'

export default function Homepage() {
  const { products, isLoading, isError } = useApi(API_BASE_URL)

  const { searchTerm, filteredProducts, handleSearchChange } =
    useProductSearch(products)

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (isError) {
    return (
      <div role='alert' className='alert alert-error'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='stroke-current shrink-0 h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
        <span>An error occurred while loading the page.</span>
      </div>
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
