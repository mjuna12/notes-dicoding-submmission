import { Input } from "@nextui-org/input";

// eslint-disable-next-line react/prop-types
function Search({ searchQuery, setSearchQuery }) {
  return (
    <header className="bg-blue-600 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-100">MY NOTES</h1>
        <Input
          isClearable
          type="search"
          variant="flat"
          placeholder="Search Notes"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onClear={() => setSearchQuery("")} 
          className="max-w-xs bg-white rounded-xl"
        />
      </div>
    </header>
  );
}

export default Search;
