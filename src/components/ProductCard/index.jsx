import MainButton from "../MainButton";
import { Link } from "react-router-dom";


export default function ProductCard({ product }) {

    return (
        <>
            <img className='rounded-md h-48' src={product.imageUrl} alt={product.title} />
            <div className='mt-4'>
                <h2 className='text-lg uppercase font-bold'>{product.title}</h2>
                <p className='mt-2 text-gray-600 text-sm'>{product.description.slice(0, 40)}...</p>
                <p className='mt-2 text-gray-600'>${product.price}</p>
            </div>
            <div className='mt-6 flex justify-between items-center'>
                <Link to={`/product/${product.id}`}>
                    <MainButton>View Product</MainButton>
                </Link>
            </div>

        </>
    )
}