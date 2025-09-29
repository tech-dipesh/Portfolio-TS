import React from "react";
import Navbar from "../common/navBar.tsx";
import Footer from "../common/Footer.tsx";

interface LayoutProps {
  children: React.ReactNode;
}
// i have import all of the main content like navbar and footer is imported here.
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-[#06063a] flex flex-col">
      <Navbar/>
      <main className="flex-grow w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default Layout;