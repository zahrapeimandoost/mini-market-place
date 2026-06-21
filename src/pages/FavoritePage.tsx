import { useState } from "react";
import trash from "../assets/Vector.png"

type FavoriteItem = {
  id: number;
  name: string;
  image: string;
  price: number;
};

const FavoritePage = () => {

  const [favorites, setFavorites] =
    useState<FavoriteItem[]>(() => {

      return JSON.parse(
        localStorage.getItem("favorites") || "[]"
      );

    });

  const removeFavorite = (id: number) => {

    const updatedFavorites = favorites.filter(
      (item) => item.id !== id
    );

    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites)
    );

    setFavorites(updatedFavorites);
  };

  return (
    <div className="p-5">

      <h1 className="text-2xl font-bold mb-5 text-orange-400">
        Favorite Products 
      </h1>

      {favorites.length === 0 ? (
        <p>No favorite products found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

          {favorites.map((item) => (

            <div 
              key={item.id}
              className="bg-gray-50 shadow-lg rounded-lg p-3"
            >

              <img
                src={item.image}
                alt={item.name}
                width={200}
                className="mx-auto"
              />

              <h3 className="mt-2 font-semibold">
                {item.name}
              </h3>

              <p>{item.price}$</p>

              <button
                onClick={() => removeFavorite(item.id)}
                className='bg-gray-100 rounded-md p-2 mt-2 shadow-lg cursor-pointer hover:shadow-gray-400 font-semibold'
              >
                <img src={trash} alt="delet"/>
              </button>

            </div>

          ))}

        </div>
      )}

    </div>
  );
};

export default FavoritePage;