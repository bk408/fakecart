
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Product = () => {
  
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json()
    console.log(json);
    setProducts(json)
  }

  useEffect(() => {
    getProducts()
  }, [])
  
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}


export default Product;