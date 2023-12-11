import Banner from "../../components/Banner";
import useApi from '../../hooks/useApi';
import ProductCard from "../../components/ProductCard";

export default function Homepage() {
    const { products, isLoading, isError } = useApi(
        'https://api.noroff.dev/api/v1/online-shop',
    );

    if (isLoading) {
        return <div>Loading</div>;
    }

    if (isError) {
        return <div>Error</div>;
    }
    return (
        <main>
            <Banner />
            <h1 className="text-3xl font-bold m-5">Homepage</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8">
                {products.map((product) => (
                    <div key={product.id} className="card card-compact bg-base-100 shadow-xl h-96">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </main>
    )
}