import { useState } from 'react'
import { Link } from 'react-router-dom'

function SearchInput({ products = [] }) {
  const [searchTerm, setSearchTerm] = useState('')
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )
  return (
    <div className='ml-2'>
      <input
        type='text'
        placeholder='Search products...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='input input-bordered input-primary w-full max-w-md'
      />
      {searchTerm && (
        <ul
          tabIndex={0}
          className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 absolute'
        >
          {filteredProducts.map((product) => (
            <li key={product.id}>
              <Link
                to={`/product/${product.id}`}
                className='block px-4 py-2 hover:bg-gray-100'
              >
                {product.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
export default SearchInput
