import { useState } from "react"; 
const ShoppingCart = () => {  
  const [cart, setCart] = useState([]); 
  const addItem = () => setCart([...cart, "Item"]); 
  const removeItem = () => setCart(cart.slice(0, -1));  
  return ( 
    <div>
      <button onClick={addItem}>Add Item</button>
      <button onClick={removeItem}>Remove Item</button>
      <p>Total Items:{cart.length}</p>
    </div>
  );
};
export default ShoppingCart; 
