import { Link } from 'react-router-dom'
import useDiscountPercentage from '../../hooks/useDiscountPercentage'

export default function ProductCard({ product }) {
  const discountPercentage = useDiscountPercentage(
    product.discountedPrice,
    product.price,
  )

  return (
    <>
      <figure>
        <img src={product.imageUrl} alt={product.title} />
      </figure>

      <div className='card-body'>
        <h2 className='card-title'>
          {product.title}
          {discountPercentage && (
            <div className='badge badge-accent ml-2'>-{discountPercentage}</div>
          )}
        </h2>
        <p>{product.description.slice(0, 40)}...</p>

        {product.discountedPrice > 0 &&
        product.discountedPrice < product.price ? (
          <>
            <p>New Price: ${product.discountedPrice}</p>
          </>
        ) : (
          <p>${product.price}</p>
        )}

        <div className='card-actions justify-end'>
          <Link to={`/product/${product.id}`}>
            <button className='btn btn-primary'>View Product</button>
          </Link>
        </div>
      </div>
    </>
  )
}
