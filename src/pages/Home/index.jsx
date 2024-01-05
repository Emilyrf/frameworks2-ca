import Banner from '../../components/Banner'
import useApi from '../../hooks/useApi'
import { API_BASE_URL } from '../../components/constants/api'
import SearchInput from '../../components/Search'
import ProductsGrid from '../../components/ProductsGrid'
import { LoadingSpinner } from '../../components/LoadingSpinner'
import AlertError from '../../components/AlertError'


export default function Homepage() {
  const { products, isLoading, isError } = useApi(API_BASE_URL)

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
        <SearchInput products={products} />
      </div>
      <ProductsGrid products={products} />
      )
    </main>
  )
}
