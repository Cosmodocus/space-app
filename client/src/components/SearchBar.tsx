import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Search } from 'lucide-react';

type SearchBarProps = {
  onSearch: (query: string) => void;
};

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
      setQuery('');
    }
  };

  const renderInput = () => (
    <Input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search anything space related (e.g. earth, moon, etc)..."
      className="w-full border border-gray-300 rounded-l-2xl rounded-r-none p-3 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all duration-300 bg-white text-gray-800 placeholder-gray-400"
    />
  );

  const renderButton = () => (
    <Button
      type="submit"
      className="bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-300 rounded-r-2xl p-3 shadow-lg transform rounded-l-none"
    >
      <Search style={{ width: '24px', height: '24px' }} />
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
