import ProductCard from "../ProductCard";

const ProductsGrid = ({ products }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8">
      {products.map((product) => (
        <div key={product.id} className="card card-compact bg-base-100 shadow-xl h-96">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
  
  export default ProductsGrid;