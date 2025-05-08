import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { toast, Toaster } from 'react-hot-toast';

const LandingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const startTime = Date.now();

      try {
        setLoading(true);
        const res = await axios.get(
          `http://localhost:8080/products${searchTerm ? `?search=${searchTerm}` : ''}`
        );
        setProducts(res.data);
      } catch (err) {
        toast.error('Failed to fetch product. Please try again later.');
        console.error('Failed to fetch products', err);
      } finally {
        // Ensure minimum 2 seconds loading time
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, 1000 - elapsed); // if API is too fast, wait
        setTimeout(() => setLoading(false), remaining);
      }
    };

    fetchProducts();
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-[#e5d8fd] px-4 py-6">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-7xl mx-auto">
        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl font-bold mb-3 sm:mb-0">Top Selection</h2>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-72 px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white transition"
          />
        </div>

        {/* Product Grid or Loader */}
        {loading ? (
          <div className="flex justify-center py-10">
            <ClipLoader size={40} color="#7C3AED" />
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.length > 0 ? (
              products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-md p-3 cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <div className="w-full aspect-square flex items-center justify-center bg-gray-100 rounded">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="mt-2">
                    <h3 className="text-sm font-semibold text-gray-800">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.brand}</p>
                    <p className="text-base font-bold text-gray-900">${product.price.toFixed(2)}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-red-500 font-medium">
                No products found.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
