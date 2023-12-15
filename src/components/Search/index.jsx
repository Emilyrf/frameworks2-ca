
const SearchInput = ({ value, onChange }) => (
    <input
      type="text"
      placeholder="Search products..."
      value={value}
      onChange={onChange}
      className="input input-bordered input-primary w-full max-w-xs sm:max-w-md ml-4"
    />
  );
  
  export default SearchInput;


// import { useState } from "react";
// import { Link } from 'react-router-dom';
// import useApi from '../../hooks/useApi'

// const SearchInput = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const { products } = useApi('https://api.noroff.dev/api/v1/online-shop');

//   // Filter products based on the search input
//   const filteredProducts = products.filter((product) =>
//     product.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="relative flex items-center">
//       <input
//         type="text"
//         placeholder="Search products..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="input input-bordered input-primary  w-48 md:w-auto"
//       />

//       {searchTerm && (
//         <div className="absolute z-10 mt-2 bg-white  rounded-md shadow-md w-48 md:w-auto">
//           {filteredProducts.map((product) => (
//             <Link
//               key={product.id}
//               to={`/product/${product.id}`}
//               className="block px-4 py-2 hover:bg-gray-100"
//             >
//               {product.title}
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

