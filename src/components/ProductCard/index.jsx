import MainButton from "../MainButton";
import { Link } from "react-router-dom";


export default function ProductCard({ product }) {

    return (
        <>
            <figure><img src={product.imageUrl} alt={product.title} /></figure>
            <div className="card-body">
                <h2 className='card-title'>{product.title}</h2>
                <p>{product.description.slice(0, 40)}...</p>
                <p>${product.price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/product/${product.id}`}>
                        <button className="btn btn-primary">Buy Now</button>
                    </Link>
                </div>
            </div>


        </>
    )
}