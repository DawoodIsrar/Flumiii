import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="pt-10 px-20 pb-14 w-full h-[52px] flex justify-between items-center">
        <h1 className="text-xl  font-bold text-text-purple">MyBrand</h1>
        <ul className="flex space-x-6 font-medium">
          <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
        </ul>
        <button className="w-[183px] h-[52px]">
              Get Started
        </button>
      </div>
    </nav>
  );
}
