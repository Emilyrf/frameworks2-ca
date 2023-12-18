import Banner from "../../components/Banner";
import useApi from '../../hooks/useApi';
import useProductSearch from "../../hooks/useProductSearch";
import SearchInput from "../../components/Search";
import ProductsGrid from "../../components/ProductsGrid";


export default function Homepage() {
    const { products, isLoading, isError } = useApi(
        'https://api.noroff.dev/api/v1/online-shop',
    );

    const { searchTerm, filteredProducts, handleSearchChange } = useProductSearch(
        products
      );

    if (isLoading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if (isError) {
        return <div>Error</div>;
    }
    return (
        <main>
            <Banner />
            <div className="flex justify-between items-center m-5">
                <h1 className="text-3xl font-bold text-primary ">Homepage</h1>
                <SearchInput value={searchTerm} onChange={handleSearchChange} />
            </div>
            {filteredProducts.length === 0 ? (
                <div className="flex items-center justify-center">
                    <p className="text-gray-600">
                        Product not found.
                    </p>
                </div>

            ) : (
                <ProductsGrid products={filteredProducts} />
            )}
        </main>
    )
}