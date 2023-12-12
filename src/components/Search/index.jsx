const SearchInput = ({ value, onChange }) => (
    <input
      type="text"
      placeholder="Search products..."
      value={value}
      onChange={onChange}
      className="mt-3 p-2 border border-gray-300 rounded-md"
    />
  );
  
  export default SearchInput;