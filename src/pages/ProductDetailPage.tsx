import { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import { addToCart } from "../utils/Cart";
import { toggleFavorite } from "../utils/Favorites";
 
interface Product {
    id:number;
    title: string;
    description: string;
    thumbnail: string;
    price: number;
}

const ProductDetailPage = () => {
    const { id } = useParams();
    const [product , setProduct] = useState<Product | null>(null);

    useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 pb-10 rounded-lg shadow-xl">
      <div className="flex flex-col items-center mb-5">
        <img 
          src={product.thumbnail}
          alt={product.title}
          className="w-64"
         />
         <h1 className="text-2xl font-semibold">{product.title}</h1>
         <p>{product.description}</p>
         <p className="text-xl font-semibold">{product.price}$</p>
      </div>
      <div>
         <button  
          onClick={() => addToCart({
            id: product.id,
            image: product.thumbnail,
            name: product.title,
            price: product.price,
            })}
          className="bg-gray-200 cursor-pointer p-1.5 mr-2 rounded-lg text-orange-500 font-semibold hover:shadow-md"
          >
            Add To Cart
         </button>
         <button 
          onClick={() => {
           if (!product) return;
            toggleFavorite({
            id: product.id,
            image: product.thumbnail,
            name: product.title,
            price: product.price,
           });
          }}
          className="bg-gray-200 cursor-pointer p-1.5 rounded-lg text-orange-500 font-semibold hover:shadow-md"
          >
          Add To Favorites
          </button>
         </div>
    </div>
  )
}

export default ProductDetailPage;