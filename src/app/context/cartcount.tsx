
"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  stock: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem, maxStock: number) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  addToWishlist: (item: CartItem) => void;
  moveToWishlist: (id: number) => void;
  removeFromWishlist: (id: number) => void;
  wishlist: CartItem[];
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  });

  const [wishlist, setWishlist] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      const storedWishlist = localStorage.getItem("wishlist");
      return storedWishlist ? JSON.parse(storedWishlist) : [];
    }
    return [];
  });

  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const items = cart.reduce((sum, item) => sum + item.quantity, 0);
    const price = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalItems(items);
    setTotalPrice(price);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (item: CartItem, maxStock: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.id === item.id);
  
      if (existingItem) {
        if (existingItem.quantity < maxStock) {
          return prevCart.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          );
        } else {
          toast.error("You have reached the maximum stock for this item.", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          return prevCart;
        }
      }
  
      if (item.quantity <= maxStock) {
        return [...prevCart, { ...item, quantity: 1, stock: maxStock }];
      } else {
        toast.error("Cannot add item to cart. Exceeds available stock.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        return prevCart;
      }
    });
  };

  const addToWishlist = (item: CartItem) => {
    if (item.stock > 0) {
      toast.info("This item is in stock. Please add it to cart instead.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }
    
    const existingItem = wishlist.find((i) => i.id === item.id);
    if (!existingItem) {
      setWishlist((prev) => [...prev, item]);
      toast.success("Item successfully added to your wishlist!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      toast.info("Item is already in your wishlist!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const moveToWishlist = (id: number) => {
    const item = cart.find((i) => i.id === id);
    if (item) {
      if (item.stock > 0) {
        return;
      }
      
      const existingInWishlist = wishlist.find((i) => i.id === id);
      if (!existingInWishlist) {
        setWishlist((prev) => [...prev, item]);
        removeFromCart(id);
        toast.success("Item moved to wishlist!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        toast.info("Item is already in your wishlist!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    }
  };

  const removeFromWishlist = (id: number) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
    toast.error("Item removed from wishlist!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        addToWishlist,
        moveToWishlist,
        removeFromWishlist,
        wishlist,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}