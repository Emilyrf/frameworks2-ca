const SearchInput = ({ value, onChange }) => (
    <input
      type="text"
      placeholder="Search products..."
      value={value}
      onChange={onChange}
      className="input input-bordered input-primary w-full max-w-xs"
    />
  );
  
  export default SearchInput;