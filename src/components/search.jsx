import { Input } from "@nextui-org/input";

// eslint-disable-next-line react/prop-types
function Search({ searchQuery, setSearchQuery }) {
  return (
    <Input
    isClearable
    type="search"
    variant="bordered"
    placeholder="Search Notes"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    onClear={() => setSearchQuery("")} 
    className="max-w-xs bg-white rounded-xl"
  />
  );
}

export default Search;
