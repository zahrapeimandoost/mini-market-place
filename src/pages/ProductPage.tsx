
import { useEffect , useState } from "react";
import ProductCard from "../components/ProductCard";

type Product = {
  id: number;
  thumbnail:string;
  title:string;
  price:number;
}

const ProductPage = () => {
  const [products , setProducts] = useState <Product[]>([]);

  useEffect(() => {
  fetch("https://dummyjson.com/products/category/sports-accessories")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setProducts(data.products);
    });

  }, []);

  return (
    <div>
      <h1 className="text-4xl font-semibold text-orange-500 mb-3">Products</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.thumbnail}
            name={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  )
};

export default ProductPage;