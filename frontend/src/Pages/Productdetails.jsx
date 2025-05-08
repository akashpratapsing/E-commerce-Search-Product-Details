import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch product details using API
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error('Error fetching product:', error);
        toast.error('Failed to fetch product. Please try again later.');
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading product details...</p>;
  if (!product) return <p className="text-center text-red-600 mt-10">Product not found.</p>;

  return (
    <div className="min-h-screen bg-[#e5d8fd] flex justify-center items-center p-6">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 text-center">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-64 h-64 mx-auto object-contain mb-4"
        />
        <h1 className="text-xl font-bold">{product.name}</h1>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <p className="mt-2"><strong>Brand:</strong> {product.brand}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p className="text-lg text-green-600 font-bold mt-3">${product.price.toFixed(2)}</p>

        <button
          onClick={() => navigate('/')}
          className="mt-6 px-5 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition"
        >
          Back to Search
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
