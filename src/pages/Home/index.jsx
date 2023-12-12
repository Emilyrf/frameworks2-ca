import { useState } from "react";
import Banner from "../../components/Banner";
import useApi from '../../hooks/useApi';
import SearchInput from "../../components/Search";
import ProductsGrid from "../../components/ProductsGrid";


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
            <SearchInput value={searchTerm} onChange={handleSearchChange} />
            <ProductsGrid products={filteredProducts} />
        </main>
    )
}