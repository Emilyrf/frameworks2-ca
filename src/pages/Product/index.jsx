import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import useApi from '../../hooks/useApi';
import NotFound from '../NotFound';
import { CartContext } from '../../context/cart';
import MainButton from '../../components/MainButton';

export default function ProductPage() {
const { id } = useParams();
const { products, isLoading, isError } = useApi(`https://api.noroff.dev/api/v1/online-shop/${id}`);
// const { addToCart } = useContext(CartContext);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <NotFound />;
  }

  const calculateDiscount = () => {
    if (products.discountedPrice < products.price) {
      const discount = ((products.price - products.discountedPrice) / products.price) * 100;
      return `Save ${discount.toFixed(2)}%`;
    }
    return null;
  };

  return (
    <div className="container mx-auto p-4">
        <img className="rounded-lg" src={products.imageUrl} alt={products.title} />
        <h2 className="text-2xl font-bold mt-4">{products.title}</h2>
        <div className="flex items-center mt-2">
            <span className="text-gray-500">Stars:</span>
            <span className="text-gray-500">Stars:</span>
        </div>
        <p className="mt-4">{products.description}</p>
        <div className="mt-4">
        {calculateDiscount() && (
          <>
            <p className="text-green-600">{calculateDiscount()}</p>
            <p className="line-through text-gray-500">Before ${products.price}</p>
          </>
        )}
            <p className="text-lg font-bold">Now ${products.discountedPrice}</p>
        </div>

        <MainButton onClick={() => addToCart(products)}>Add to cart</MainButton>

        
        <div className="mt-8">
        <h3 className="text-xl font-bold">Reviews</h3>

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




  );
}
