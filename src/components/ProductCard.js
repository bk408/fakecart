// ProductCard.js
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="  bg-white shadow-md  flex flex-wrap rounded-e-full">
      <img
        className="w-full h-48 object-cover"
        src={product.image}
        alt={product.title}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          {product.title}
        </h3>
        <p className="text-gray-700 mb-4">${product.price.toFixed(2)}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
