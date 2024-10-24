"use client";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="relative z-20 w-full p-6 text-white flex justify-between items-center">
      <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white">
        {title}
      </h1>
    </header>
  );
};

export default Header;
