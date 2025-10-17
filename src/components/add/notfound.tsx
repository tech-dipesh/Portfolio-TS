import Footer from "../common/Footer";
import Navbar from "../common/navBar";
import { ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
const NotFound = () => {

  // for making the not found with addding the icon from the lucide-react
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center p-4 text-center">
        <div className="max-w-md w-full space-y-6">
          <div className="flex justify-center">
            <ShieldAlert className="h-16 w-16 text-red-500" />
          </div>
          
          <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-100">404</h1>
          <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-300">
            Page Not Found
          </h2>
          
          <p className="text-gray-500 dark:text-gray-400">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          
          <button><Link to="/"> Go to Homepage</Link></button>
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default NotFound;