'use client';

import { Home, Info, Search } from 'lucide-react';
import Image from 'next/image';
import { ReactNode, useState } from 'react';

import Header from '../components/Header';
import { FloatingDockMobile } from '../components/ui/floating-dock';
import { ShootingStars } from '../components/ui/shooting-stars';
import {
  Logo,
  LogoIcon,
  Sidebar,
  SidebarBody,
  SidebarLink
} from '../components/ui/sidebar';
import { StarsBackground } from '../components/ui/stars-background';
import { ROUTES } from '../constants/routes';

type MainLayoutProps = {
  children: ReactNode;
  headerTitle?: string | null;
};

const links = [
  { title: 'Home', href: ROUTES.HOME, icon: <Home size={20} /> },
  { title: 'Search', href: ROUTES.SEARCH, icon: <Search size={20} /> },
  { title: 'About', href: ROUTES.ABOUT, icon: <Info size={20} /> }
];

const MainLayout = ({ children, headerTitle }: MainLayoutProps) => {
  const [open, setOpen] = useState(false);

  const renderSidebar = () => (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className="bg-neutral-900 bg-opacity-70 hidden md:flex flex-col h-full">
        <div className="flex flex-col items-center mb-10">
          {open ? <Logo /> : <LogoIcon />}
        </div>

        <div className="flex-1">
          {links.map((link) => (
            <SidebarLink key={link.href} link={link} />
          ))}
        </div>

        <div className="flex flex-col items-center mb-4">
          <SidebarLink
            link={{
              title: 'Guest',
              href: '/',
              icon: (
                <Image
                  src="https://via.placeholder.com/50"
                  className="h-7 w-7 flex-shrink-0 rounded-full"
                  width={50}
                  height={50}
                  alt="Avatar"
                />
              )
            }}
          />
        </div>
      </SidebarBody>
    </Sidebar>
  );

  const renderHeader = () => <Header title={headerTitle} />;

  const renderMainContent = () => (
    <main className="relative z-10 w-full max-w-8xl p-4 flex-1 overflow-y-auto">
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
    <div className="min-h-screen flex bg-gray-900 relative">
      <ShootingStars />
      <StarsBackground />
      {renderSidebar()}
      {renderMainContainer()}
      <FloatingDockMobile items={links} />
    </div>
  );

  return renderLayout();
};

export default MainLayout;
