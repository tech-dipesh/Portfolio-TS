import React from 'react';
import Navbar from '../common/navBar.tsx';
import Footer from '../common/Footer.tsx';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#06063a]">
      <Navbar />
      <div className="flex-grow w-full">
  <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
    {children}
  </div>
</div>
      <Footer />
    </div>
  );
};

export default Layout;