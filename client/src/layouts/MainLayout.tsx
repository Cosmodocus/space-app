"use client";
import { Sidebar, SidebarBody, SidebarLink } from "../components/ui/sidebar";
import { ReactNode } from "react";
import { Home, Search, Info } from "lucide-react";

type MainLayoutProps = {
  children: ReactNode;
};

const links = [
  { label: 'Home', href: '/', icon: <Home size={20} /> },
  { label: 'Search', href: '/search', icon: <Search size={20} /> },
  { label: 'About', href: '/about', icon: <Info size={20} /> },
];

const MainLayout = ({ children }: MainLayoutProps) => {

  const renderSidebar = () => (
    <Sidebar>
      <SidebarBody className="overflow-y-auto">
        {links.map((link) => (
          <SidebarLink key={link.href} link={link} />
        ))}
      </SidebarBody>
    </Sidebar>
  );

  const renderHeader = () => (
    <header className="w-full p-6 bg-gradient-to-r from-teal-500 to-indigo-500 text-white shadow-lg">
      <h1 className="text-3xl font-bold text-center">NASA Search</h1>
    </header>
  );

  const renderMainContent = () => (
    <main className="w-full max-w-8xl p-4">
      {children}
    </main>
  );

  const renderMainContainer = () => (
    <div className="flex-1 flex flex-col items-center justify-start overflow-y-auto h-screen">
      {renderHeader()}
      {renderMainContent()}
    </div>
  );

  const renderLayout = () => (
    <div className="min-h-screen flex bg-gray-900">
      {renderSidebar()}
      {renderMainContainer()}
    </div>
  );

  return renderLayout();
};

export default MainLayout;
