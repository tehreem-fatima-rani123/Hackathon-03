"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useRouter } from "next/navigation";

interface ProductType {
  _id: number;
  title: string;
  price: number;
  image: string;
  inventory: number;
}

interface LocalStorageType {
  item: ProductType;
  quantity: number;
}

export default function Carts() {
  const [cartItem, setCartItem] = useState<LocalStorageType[]>([]);
  const [confirmOrder, setConfirmOrder] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const dataFromLocalStorage = localStorage.getItem("carts");
      setCartItem(dataFromLocalStorage ? JSON.parse(dataFromLocalStorage) : []);
    }
  }, []);

  const handleQuantityChange = (id: number, increment: boolean) => {
    const updatedCart = cartItem.map((item) => {
      if (item.item._id === id) {
        if (increment) {
          if (item.quantity >= item.item.inventory) {
            alert("Out of Stock!");
            return item;
          }
          return { ...item, quantity: item.quantity + 1 };
        } else {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
      }
      return item;
    });
    setCartItem(updatedCart);
    localStorage.setItem("carts", JSON.stringify(updatedCart));
  };

  const handleRemove = (id: number) => {
    const updatedCart = cartItem.filter((item) => item.item._id !== id);
    setCartItem(updatedCart);
    localStorage.setItem("carts", JSON.stringify(updatedCart));
  };

  const calculateSubtotal = () => {
    return cartItem.reduce((total, item) => total + item.item.price * item.quantity, 0);
  };

  const SHIPPING_COST = 120;
  const total = calculateSubtotal() + SHIPPING_COST;

  const handleCheckout = () => {
    setConfirmOrder(true);
    router.push("/checkout");
  };

  return (
    <main className="h-full max-w-full mx-auto flex justify-center bg-gray-100">
      {cartItem.length > 0 ? (
        !confirmOrder && (
          <section className="w-full my-12 p-4 flex flex-col mx-auto lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="lg:col-span-2">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Your Cart</h2>
                {cartItem.map((item, index) => (
                  <div key={index} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4">
                    <div className="flex items-center space-x-4">
                      <Image src={item.item.image} alt={item.item.title} height={100} width={150} className="rounded-md" />
                      <div className="font-medium">
                        <h3 className="text-lg sm:text-xl text-gray-800 mb-2">{item.item.title}</h3>
                        <div className="flex items-center gap-2">
                          <button onClick={() => handleQuantityChange(item.item._id, false)} className="w-8 h-8 flex items-center justify-center rounded bg-gray-300">-</button>
                          <p className="text-lg font-semibold">{item.quantity}</p>
                          <button onClick={() => handleQuantityChange(item.item._id, true)} className="w-8 h-8 flex items-center justify-center rounded bg-gray-300">+</button>
                        </div>
                        <div className="flex gap-3 mt-3">
                          <CiHeart size={20} className="text-red-500" />
                          <RiDeleteBin6Line size={20} onClick={() => handleRemove(item.item._id)} className="cursor-pointer" />
                        </div>
                      </div>
                    </div>
                    <p className="text-lg font-semibold">${(item.item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl mb-6 font-semibold">Summary</h2>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-between mb-4">
                    <p className="text-lg font-medium">Subtotal</p>
                    <p className="text-lg font-semibold">${calculateSubtotal().toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between mb-4">
                    <p className="text-lg font-medium">Estimated Delivery</p>
                    <p className="text-lg font-semibold">${SHIPPING_COST.toFixed(2)}</p>
                  </div>
                  <hr className="mb-4" />
                  <div className="flex justify-between mb-6">
                    <p className="text-xl font-bold">Total</p>
                    <p className="text-xl font-bold">${total.toFixed(2)}</p>
                  </div>
                  <button className="w-full h-[50px] rounded-full text-white bg-[#029FAE] font-medium" onClick={handleCheckout}>Checkout</button>
                </div>
              </div>
            </div>
          </section>
        )
      ) : (
        <section className="h-screen flex justify-center items-center">
          <div className="text-center max-w-lg shadow-lg rounded-xl py-6 px-4">
            <h2 className="text-[#007580] font-extrabold text-2xl sm:text-3xl">🛒 No items in the cart</h2>
            <p className="text-gray-600 text-lg sm:text-xl font-semibold">Looks like you haven’t added anything yet.</p>
            <Link href="/product" className="inline-block bg-[#007580] text-white px-6 py-2 rounded">Continue Shopping🤩</Link>
          </div>
        </section>
      )}
    </main>
  );
}