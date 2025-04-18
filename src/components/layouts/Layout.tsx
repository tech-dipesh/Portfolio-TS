import React from 'react';
import Navbar from '../common/navBar.tsx';
import Footer from '../common/Footer.tsx';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
