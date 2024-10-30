import React from 'react';
import { BackgroundGradient } from './ui/background-gradient';

interface SearchOptionsProps {
  items: string[];
  onSearch: (item: string) => void;
  className?: string;
}

const SearchOptions: React.FC<SearchOptionsProps> = ({
  items,
  onSearch,
  className
}) => {
  const renderButton = (item: string) => {
    return (
      <BackgroundGradient key={item}>
        <button
          onClick={() => onSearch(item)}
          className={`px-3 py-1 rounded transition duration-300`}
        >
          {item}
        </button>
      </BackgroundGradient>
    );
  };

  const renderOptions = () => (
    <div
      className={`hidden md:flex flex-wrap gap-2 mb-3 items-center justify-center ${className}`}
    >
      {items.map((item) => renderButton(item))}
    </div>
  );

  return renderOptions();
};

export default SearchOptions;
