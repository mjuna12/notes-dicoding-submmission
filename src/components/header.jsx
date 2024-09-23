import { Input } from "@nextui-org/input";

function Header() {
  return (
    <header className="bg-blue-600 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-100">MY NOTES</h1>
        <Input
          isClearable
          type="search"
          variant="flat"
          placeholder="Search Notes"
          onClear={() => console.log("input cleared")}
          className="max-w-xs bg-white rounded-xl"
        />
        
      </div>
    </header>
  );
}

export default Header;
