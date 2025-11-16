import { useState } from 'react';
import ShopHeader from '../components/ShopHeader';
import ProductCard from '../components/ProductCard';
import CartDrawer from '../components/CartDrawer';
import SuccessNotification from '../components/SuccessNotification';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { Product } from '../context/CartContext';

const Shop = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (product: Product, size: string) => {
    addToCart(product, size);
    setShowSuccess(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <ShopHeader onCartClick={() => setIsCartOpen(true)} />

      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Jersey Store
            </h1>
            <p className="text-xl text-gray-600">
              Choose your size and style
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </div>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      <SuccessNotification
        message="Item added to cart!"
        isVisible={showSuccess}
        onClose={() => setShowSuccess(false)}
      />
    </div>
  );
};

export default Shop;
