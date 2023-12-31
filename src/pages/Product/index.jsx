import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import useApi from '../../hooks/useApi'
import { API_BASE_URL } from '../../components/constants/api'
import useDiscountPercentage from '../../hooks/useDiscountPercentage'
import NotFound from '../NotFound'
import { CartContext } from '../../context/cart'
import { FaStar } from 'react-icons/fa'
import { LoadingSpinner } from '../../components/LoadingSpinner'
import AlertSuccess from '../../components/AlertSuccess'

export default function ProductPage() {
  const { id } = useParams()
  const productApiUrl = `${API_BASE_URL}${id}`

  const { products, isLoading, isError } = useApi(productApiUrl)

  const discountPercentage = useDiscountPercentage(
    products.discountedPrice,
    products.price,
  )

  const { addToCart, showSuccessAlert, isAddToCartDisabled } =
    useContext(CartContext)

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (isError) {
    return <NotFound />
  }

  return (
    <>
      <div className='hero-content flex-col lg:flex-row gap-12'>
        <img
          className='max-w-full rounded-lg shadow-2xl mb-8 lg:mb-0 lg:w-1/2'
          src={products.imageUrl}
          alt={products.title}
        />
        <div>
          <h1 className='text-2xl font-bold mt-4'>{products.title}</h1>
          <span className='text-gray-500 inline-flex items-center'>
            {products.rating} <FaStar className='ml-1 text-warning' />
          </span>
          <p className='py-6'>{products.description}</p>

          {products.discountedPrice > 0 &&
          products.discountedPrice < products.price ? (
            <>
              <p className='text-lg font-bold'>
                Discounted Price: ${products.discountedPrice}
              </p>
              <div className='flex items-center'>
                <span className='mr-2 text-gray-500'>Originally: </span>
                <span className='line-through text-gray-500'>
                  ${products.price}
                </span>
                {discountPercentage && (
                  <span className='text-green-600 ml-2'>
                    Save {discountPercentage}
                  </span>
                )}
              </div>
            </>
          ) : (
            <p className='text-lg font-bold'>Price: ${products.price}</p>
          )}

          {showSuccessAlert && (
            <AlertSuccess message='Product added to cart!' />
          )}

          <div className='card-actions justify-end'>
            <button
              className='btn btn-primary'
              onClick={() => addToCart(products)}
              disabled={isAddToCartDisabled}
            >
              {isAddToCartDisabled ? 'Adding to cart...' : 'Add to cart'}
            </button>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center  mx-auto p-4'>
        <h2 className='text-2xl font-bold mb-4 text-primary'>Reviews</h2>

        {products.reviews && products.reviews.length > 0 ? (
          <div className='grid gap-4'>
            {products.reviews.map((review) => (
              <div
                key={review.id}
                className='card w-full bg-base-100 shadow-xl'
              >
                <div className='card-body'>
                  <p className='card-title'>
                    {review.username} rated it {review.rating} stars:
                  </p>
                  <p>{review.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className='grid gap-4'>
            <div className='card w-full bg-base-100 shadow-xl'>
              <div className='card-body'>
                <p className='card-title'>
                  There are no reviews for this product yet.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
