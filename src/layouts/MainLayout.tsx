import { ReactNode } from 'react';

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-900 overflow-hidden">
      <header className="w-full p-6 bg-gradient-to-r from-teal-500 to-indigo-500 text-white shadow-lg">
        <h1 className="text-3xl font-bold text-center">NASA Search</h1>
      </header>
      <main className="w-full max-w-8xl p-4">{children}</main>
    </div>
  );
};

export default MainLayout;
