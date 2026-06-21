import { Link } from "react-router-dom";
import { useState} from "react";
import { addToCart } from "../utils/Cart";
import { toggleFavorite , isFavorite } from "../utils/Favorites";

interface ProductCardProps {
  id: number;
  image: string;
  name: string;
  price: number;
}

const ProductCard = ({
  id,
  image,
  name,
  price,
}: ProductCardProps) => {

  const [isLike, setIsLike] = useState(
  () => isFavorite(id)
  );
 
  const handleLike = () => {

  const result = toggleFavorite({
    id,
    image,
    name,
    price,
  });

  setIsLike(result);

};

  return (
    <div className="flex bg-gray-50 shadow-lg shadow-gray-200 rounded-lg p-2">

      <div className="flex-1">
        <img
          className="mx-auto"
          src={image}
          alt={name}
        />
        <p>{name}</p>
        <p>{price}$</p>
        <Link to={`/products/${id}`}>
          <button
            className="bg-gray-100 cursor-pointer p-1.5 mt-1 rounded-lg text-orange-500 hover:shadow-md"
          >
            Details
          </button>
        </Link>
      </div>

      <div className="flex flex-col justify-between">
        <button 
         onClick={handleLike}
         className="cursor-pointer"
         >
          {isLike ? "❤" : "🤍"}
        </button>
        <button
          onClick={() => addToCart({id , image , name , price})}
          className="cursor-pointer text-lg"
        >
          🛒
        </button>
      </div>

    </div>
  );
};

export default ProductCard;