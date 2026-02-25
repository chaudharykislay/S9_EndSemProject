function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      value={search}
      placeholder="Search products..."
      onChange={(e) => setSearch(e.target.value)}
      className="search"
      aria-label="Search products"
    />
  );
}

export default SearchBar;