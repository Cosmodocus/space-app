"use client";
import { Sidebar, SidebarBody, SidebarLink } from "../components/ui/sidebar";
import { ReactNode } from "react";
import { Home, Search, Info } from "lucide-react"; // Importing icons from lucide-react

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  const links = [
    { label: 'Home', href: '/', icon: <Home size={20} /> },   // Home icon
    { label: 'Search', href: '/search', icon: <Search size={20} /> }, // Search icon
    { label: 'About', href: '/about', icon: <Info size={20} /> }, // Info icon
  ];

  return (
    <div className="min-h-screen flex bg-gray-900">
      {/* Sidebar on the left */}
      <Sidebar>
        <SidebarBody className="overflow-y-auto">
          {links.map((link) => (
            <SidebarLink key={link.href} link={link} />
          ))}
        </SidebarBody>
      </Sidebar>

      {/* Main content on the right */}
      <div className="flex-1 flex flex-col items-center justify-start overflow-y-auto h-screen">
        <header className="w-full p-6 bg-gradient-to-r from-teal-500 to-indigo-500 text-white shadow-lg">
          <h1 className="text-3xl font-bold text-center">NASA Search</h1>
        </header>
        <main className="w-full max-w-8xl p-4">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
