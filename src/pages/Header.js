import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="flex justify-between items-center p-5 bg-black text-white">
      <div className="text-xl font-bold">certCrypt</div>
      <nav>
        <ul className="flex space-x-8">
          <li>
            <button onClick={() => handleScroll('main')} className="hover:underline">
            <Link to="/">Home</Link>
            
            </button>
          </li>
          <li>
            <button onClick={() => handleScroll('about')} className="hover:underline">
              About
            </button>
          </li>
          <li>
            <button onClick={() => handleScroll('contact')} className="hover:underline">
              Contact us
            </button>
          </li>
        </ul>
      </nav>
      <div>
      <button className="mr-4">
        <Link to="/LoginPage">Login</Link>
          </button>
      <button  className="bg-white text-black px-4 py-2 rounded-lg">
          <Link to="/RegisterPage">Signup</Link>
          </button>
      </div>
    </header>
  );
};

export default Header;
