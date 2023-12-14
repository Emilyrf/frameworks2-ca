import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import useApi from '../../hooks/useApi';
import useDiscountPercentage from '../../hooks/useDiscountPercentage'
import NotFound from '../NotFound';
import { CartContext } from '../../context/cart';
import { FaStar } from 'react-icons/fa';


export default function ProductPage() {
  const { id } = useParams();
  const { products, isLoading, isError } = useApi(`https://api.noroff.dev/api/v1/online-shop/${id}`);
  const discountPercentage = useDiscountPercentage(products.discountedPrice, products.price);

  const { addToCart } = useContext(CartContext);

  if (isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  if (isError) {
    return <NotFound />;
  }

  return (
    <>
      <div className="hero-content flex-col lg:flex-row gap-12">
        <img className="max-w-sm rounded-lg shadow-2xl" src={products.imageUrl} alt={products.title} />
        <div>
          <h1 className="text-2xl font-bold mt-4">{products.title}</h1>
          <span className="text-gray-500">{products.rating} <FaStar></FaStar></span>
          <p className="py-6">{products.description}</p>

          {products.discountedPrice > 0 && products.discountedPrice < products.price ? (
            <>
              <p className="text-lg font-bold">Discounted Price: ${products.discountedPrice}</p>
              <div className="flex items-center">
                <span className="mr-2 text-gray-500">Originally: </span>
                <span className="line-through">${products.price}</span>
                {discountPercentage && <span className="text-green-600 ml-2">Save {discountPercentage}</span>}
              </div>
            </>
          ) : (
            <p>${products.price}</p>
          )}

          <button className="btn btn-primary" onClick={() => addToCart(products)}>Add to cart</button>
        </div>

      </div>

      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Product Reviews</h2>
          {products.reviews && products.reviews.length > 0 ? (
            <ul className="mt-4">
              {products.reviews.map((review) => (
                <li key={review.id} className="mb-4">
                  <p className="text-lg font-semibold">{review.username} rated it {review.rating} stars</p>
                  <p className="mt-2">{review.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4">No reviews available for this product.</p>
          )}
        </div>
      </div>
    </>

  );
}
