import Banner from "../../components/Banner";
import useApi from '../../hooks/useApi';
import ProductCard from "../../components/ProductCard";
import { useState } from "react";

export default function Homepage() {
    const { products, isLoading, isError } = useApi(
        'https://api.noroff.dev/api/v1/online-shop',
    );

    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);
    };

    if (isLoading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if (isError) {
        return <div>Error</div>;
    }
    return (
        <main>
            <Banner />
            <h1 className="text-3xl font-bold m-5">Homepage</h1>
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="mt-3 p-2 border border-gray-300 rounded-md"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="card card-compact bg-base-100 shadow-xl h-96">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </main>
    )
}