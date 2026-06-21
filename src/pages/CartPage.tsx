import { useState } from "react";

type CartItem = {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

const CartPage = () => {

  const [cartItems , setCartItem] = useState<CartItem[]>(() => {
    return JSON.parse(
      localStorage.getItem("cart") || "[]"
    );
  });
  const handleDelet = (id:number) =>{
    const updateItem = cartItems.filter(
      (item) => item.id !== id
    );
    localStorage.setItem(
      "cart", 
      JSON.stringify(updateItem)
    );
     setCartItem(updateItem);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5 text-orange-400">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Shopping cart is empty</p>
      ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
           {cartItems.map((item) => (
            <div key={item.id} className="bg-gray-50 shadow-lg rounded-lg p-3">
          
             <img 
              src={item.image}
              alt={item.name}
              width={200}
              className="mx-auto"
             />

            <h2 className="mt-2 font-semibold">{item.name}</h2>
            <h3>{item.price}$</h3>
          
          
            <p>Quantity: {item.quantity}</p>
            <button
             onClick={()=> handleDelet(item.id)}
             className="bg-gray-100 rounded-md p-1.5 mt-3 shadow-lg cursor-pointer hover:text-orange-400 font-semibold"
             >
              Delete
             </button>
          
         </div>
      ))}
      </div>
      )}
    </div>
  );
};

export default CartPage;