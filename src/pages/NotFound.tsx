import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation onDemoClick={() => {}} />
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center" data-aos="fade-up">
          <h1 className="text-8xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">404</h1>
          <p className="text-2xl text-gray-600 mb-8">Oops! Page not found</p>
          <a 
            href="/" 
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Return to Home
          </a>
        </div>
      </div>
      <Footer onDemoClick={() => {}} />
    </div>
  );
};

export default NotFound;
