import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

type SearchBarProps = {
  onSearch: (query: string) => void;
};

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
      setQuery("");
    }
  };

  const renderInput = () => (
    <Input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search anything space related (e.g. earth, moon, etc)..."
      className="w-full rounded-r-none"
    />
  );

  const renderButton = () => (
    <Button
      type="submit"
      className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 rounded-l-none"
    >
      Search
    </Button>
  );

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-lg mx-auto">
      {renderInput()}
      {renderButton()}
    </form>
  );
};

export default SearchBar;
