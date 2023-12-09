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
            <h1>Homepage</h1>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10'>
                {products.map((product) => (
                    <div key={product.id} className='bg-white shadow-md rounded-lg px-10 py-10'>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </main>
    )
}