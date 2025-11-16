import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

interface ShopHeaderProps {
  onCartClick: () => void;
}

const ShopHeader = ({ onCartClick }: ShopHeaderProps) => {
  const { cartCount } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-gray-600 hover:text-gray-800 transition-colors">
            Back to Home
          </Link>

          <div className="text-center">
            <h1 className="text-2xl font-bold text-blue-600">Jersey Store</h1>
          </div>

          <button
            onClick={onCartClick}
            className="relative bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
          >
            <ShoppingCart className="h-6 w-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default ShopHeader;
