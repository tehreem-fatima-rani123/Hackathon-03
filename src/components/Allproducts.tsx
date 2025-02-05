"use client";
import { useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  originalPrice?: number;
  isNew?: boolean;
  isSale?: boolean;
};

const ProductCard = ({ product }: { product: Product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      key={product.id}
      className="group relative rounded-lg bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden rounded-lg">
        {product.isNew && (
          <Badge className="absolute left-3 top-3 bg-emerald-500 hover:bg-emerald-600">
            New
          </Badge>
        )}
        {product.isSale && (
          <Badge className="absolute left-3 top-3 bg-orange-500 hover:bg-orange-600">
            Sale
          </Badge>
        )}
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.image}
            alt={product.title}
            height={400}
            width={400}
            className={`h-full w-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-110 group-hover:border-2 group-hover:border-indigo-500 group-hover:shadow-xl`}
            aria-label={`View details of ${product.title}`}
          />
        </Link>
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <Link href={`/product/${product.id}`}>
              <button
                className="rounded-lg px-4 py-2 text-white shadow-lg text-2xl transition-all hover:scale-110"
                aria-label={`Quick View ${product.title}`}
              >
                {product.title}
              </button>
            </Link>
          </div>
        )}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <h3 className="text-sm text-[#1C1B1F]">{product.title}</h3>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-lg font-medium text-[#1C1B1F]">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>
        <Link href="/cart">
          <button
            className="rounded-lg bg-[#00B5A5] p-2 text-white transition-colors hover:bg-[#00A294] transform duration-300 group-hover:translate-y-1"
            aria-label={`Go to cart`}
          >
            <LuShoppingCart size={20} className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default function AllProduct() {
  const products: Product[] = [
    { id: 1, title: "Library Stool Chair", price: 20, image: "/Products (2).png" },
    {
      id: 2,
      title: "Vintage Armchair",
      price: 20,
      image: "/Image (1).png",
      originalPrice: 60,
    },
    { id: 3, title: "Ergonomic Office Chair", price: 20, image: "/image 123.jpeg" },
    { id: 4, title: "Modern Dining Chair", price: 20, image: "/naina.png" },
    {
      id: 5,
      title: "Reclining Lounge Chair",
      price: 20,
      image: "/imageee.png",
      isSale: true,
    },
    {
      id: 6,
      title: "Adjustable Desk Chair",
      price: 20,
      image: "/card (1).png",
      isNew: true,
    },
    { id: 7, title: "Classic Bar Stool", price: 20, image: "/Image (2).png" },
    {
      id: 8,
      title: "Sleek High Chair",
      price: 20,
      image: "/Products (2).png",
      isSale: true,
    },
    { id: 9, title: "Foldable Outdoor Chair", price: 10, image: "/green.jpeg" },
    {
      id: 10,
      title: "Leather Recliner Chair",
      price: 150,
      image: "/Frame (1).png",
      isSale: true,
      originalPrice: 200,
    },
    { id: 11, title: "Foldable Outdoor Chair", price: 40, image: "/black.jpeg" },
    { id: 12, title: "Foldable Outdoor Chair", price: 40, image: "/image (00).png" },
    { id: 13, title: "Foldable Outdoor Chair", price: 40, image: "/product card.png" },
    { id: 14, title: "Foldable Outdoor Chair", price: 40, image: "/blue.jpeg" },
    { id: 15, title: "Foldable Outdoor Chair", price: 40, image: "/naina.png" },
    { id: 15, title: "Foldable Outdoor Chair", price: 40, image: "/Image (2).png" },
  ];

  return (
    <div className="max-w-[1321px] container mx-auto px-4 py-20">
      <h1 className="text-3xl text-start font-semibold text-[#1C1B1F] tracking-tight mb-8">
        ALL PRODUCTS
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
