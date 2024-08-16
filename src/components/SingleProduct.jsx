import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";

const SingleProduct = () => {
  const [oneProduct, setOneProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://bafutofakeproducts.onrender.com/products/${id}`)
      .then((response) => response.json())
      .then((json) => setOneProduct(json))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="">
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        {/* Product Title */}
        <h1 className="text-3xl font-bold mb-4">{oneProduct.name}</h1>

        {/* Product Content Wrapper */}
        <div className="flex flex-col lg:flex-row">
          {/* Product Image */}
          <div className="flex-1">
            <img
              src={oneProduct.imageUrl}
              alt={oneProduct.name}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1 lg:ml-8 mt-6 lg:mt-0">
            <p className="text-gray-700 mb-4">{oneProduct.description}</p>

            {/* Pricing */}
            <div className="text-2xl font-semibold mb-4">
              <span className="text-red-500">${oneProduct.price}</span>
              <span className="line-through ml-3 text-gray-500">
                ${oneProduct.slashedPrice}
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center mb-4">
              {[...Array(oneProduct.rating)].map((_, index) => (
                <svg
                  key={index}
                  className="w-6 h-6 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
              <span className="ml-2 text-gray-600">
                ({oneProduct.rating} / 5)
              </span>
            </div>

            {/* Category */}
            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-md">
                {oneProduct.category}
              </span>
            </div>

            {/* Stock Information */}
            <div className="text-green-600 font-semibold mb-4">
              {oneProduct.stock > 0
                ? `In Stock: ${oneProduct.stock} items`
                : "Out of Stock"}
            </div>

            {/* Add to Cart Button */}
            <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
