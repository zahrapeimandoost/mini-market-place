export type CartItem = {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

export const addToCart = (
  product: Omit<CartItem, "quantity">
) => {

  const cartItems: CartItem[] = JSON.parse(
    localStorage.getItem("cart") || "[]"
  );

  const existingProduct = cartItems.find(
    (item) => item.id === product.id
  );

  if (existingProduct) {

    existingProduct.quantity += 1;

  } else {

    cartItems.push({
      ...product,
      quantity: 1,
    });

  }

  localStorage.setItem(
    "cart",
    JSON.stringify(cartItems)
  );
  alert("product added to cart");
};