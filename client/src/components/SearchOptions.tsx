import { BackgroundGradient } from "./ui/background-gradient";

interface SearchOptionsProps {
  items: string[];
  onSearch: (query: string) => void;
  className?: string;
}

const SearchOptions: React.FC<SearchOptionsProps> = ({
  items,
  onSearch,
  className,
}) => {
  return (
    <div className={`flex flex-wrap gap-2 mb-3 items-center justify-center ${className}`}>
      {items.map((item) => (
        <BackgroundGradient key={item}>
          <button
            onClick={() => onSearch(item)}
            className={`px-3 py-1 rounded transition duration-300`}
          >
            {item}
          </button>
        </BackgroundGradient>
      ))}
    </div>
  );
};

export default SearchOptions;
