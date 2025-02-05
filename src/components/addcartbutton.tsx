"use client";
import { ProductType } from "../app/product/[id]/page"

// Create interface for props type
interface ButtonProps {
  Product: ProductType;
  Text: string;
}

// Create interface for sending data to localStorage
export interface LocalStorageType {
  item: ProductType;
  quantity: number;
}

export default function CartButton({ Product, Text }: ButtonProps) {
  // Item quantity
  const quantity = 1;

  // Create object and pass two entities for sending data to localStorage
  const items: LocalStorageType = {
    item: Product,
    quantity: quantity,
  };

  // Function to add item to cart
  const addToCart = (product: LocalStorageType) => {
    // Check if data already exists in localStorage
    const existingCart = localStorage.getItem("carts");
    // Convert JSON to object if data exists, otherwise create an empty array
    const carts = existingCart ? JSON.parse(existingCart) : [];

    // Check if the item already exists in the cart
    const existingItem = carts.find(
      (cartItem: LocalStorageType) => cartItem.item._id === product.item._id
    );

    if (existingItem) {
      // If the item exists, increase its quantity
      existingItem.quantity += product.quantity;
    } else {
      // If the item doesn't exist, add the new item to the cart
      carts.push(product);
    }

    // Save updated cart to localStorage
    localStorage.setItem("carts", JSON.stringify(carts));
    console.log("Updated Cart:", carts);
  };

  return (
    <button
      className="mt-4 bg-[#029FAE] text-white font-semibold py-2 px-4 rounded-3xl"
      onClick={() => addToCart(items)}
    >
      {Text}
    </button>
  );
}
