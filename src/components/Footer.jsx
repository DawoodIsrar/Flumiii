import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center flex-col md:flex-row text-center">
        <p>&copy; {new Date().getFullYear()} MyBrand. All rights reserved.</p>
        <div className="space-x-4 mt-2 md:mt-0">
          <Link to="/privacy" className="hover:underline">Privacy</Link>
          <Link to="/terms" className="hover:underline">Terms</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
