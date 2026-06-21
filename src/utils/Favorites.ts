export type FavoriteItem = {
  id: number;
  name: string;
  image: string;
  price: number;
};

export const toggleFavorite = (
  product: FavoriteItem
) => {

  const favorites: FavoriteItem[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  const exists = favorites.find(
    (item) => item.id === product.id
  );

  if (exists) {

    const updatedFavorites = favorites.filter(
      (item) => item.id !== product.id
    );

    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites)
    );

    return false;
  }

  favorites.push(product);

  localStorage.setItem(
    "favorites",
    JSON.stringify(favorites)
  );

  return true;
};
export const isFavorite = (
  productId: number
) => {

  const favorites: FavoriteItem[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  return favorites.some(
    (item) => item.id === productId
  );
};