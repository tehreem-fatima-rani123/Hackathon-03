"use client";
import SinglePagePromotion from "@/components/singlePage";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation"; 
import CartButton from "@/components/addcartbutton";
import Link from "next/link";
import Head from "next/head";

// Correct Product Type Interface
export interface ProductType {
  _id: string;
  name: string;
  price: number;
  image: string;
}

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  originalPrice?: number;
  isNew?: boolean;
  isSale?: boolean;
  description?: string;
}

const localProducts: Product[] = [
  { id: 1, title: "Library Stool Chair", price: 20, image: "/Products (2).png" },
  { id: 2, title: "Vintage Armchair", price: 40, image: "/Image (1).png", originalPrice: 60 },
  { id: 3, title: "Ergonomic Office Chair", price: 50, image: "/image 123.jpeg" },
  { id: 4, title: "Modern Dining Chair", price: 35, image: "/naina.png" },
  { id: 5, title: "Reclining Lounge Chair", price: 60, image: "/imageee.png", isSale: true },
  { id: 6, title: "Adjustable Desk Chair", price: 25, image: "/card (1).png", isNew: true },
  { id: 7, title: "Classic Bar Stool", price: 30, image: "/Image (2).png" },
  { id: 8, title: "Sleek High Chair", price: 15, image: "/Products (2).png", isSale: true },
  { id: 9, title: "Foldable Outdoor Chair", price: 10, image: "/green.jpeg" },
  { id: 10, title: "Leather Recliner Chair", price: 150, image: "/Frame (1).png", isSale: true, originalPrice: 200 },
  { id: 11, title: "Foldable Outdoor Chair", price: 40, image: "/black.jpeg" },
  { id: 12, title: "Foldable Outdoor Chair", price: 40, image: "/image (00).png" },
  { id: 13, title: "Foldable Outdoor Chair", price: 40, image: "/product card.png" },
  { id: 14, title: "Foldable Outdoor Chair", price: 40, image: "/blue.jpeg" },
  { id: 15, title: "Foldable Outdoor Chair", price: 40, image: "/naina.png" },
  { id: 16, title: "Foldable Outdoor Chair", price: 40, image: "/Image (2).png" },
];

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const foundProduct = localProducts.find((p) => p.id === Number(id));
      if (foundProduct) {
        setProduct(foundProduct);
        setError(null);
      } else {
        setError("Product not found");
      }
      setLoading(false);
    }
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <Head>
        <title>{product.title}</title>
        <meta name="description" content={`Buy ${product.title} at the best price`} />
      </Head>
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="flex max-w-4xl w-full flex-col sm:flex-row">
          {/* Image Section */}
          <div className="w-full sm:w-1/2 p-4">
            <Image src={product.image} alt={product.title} width={300} height={500} className="rounded-lg" />
          </div>
          {/* Product Details Section */}
          <div className="w-full sm:w-1/2 p-4">
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <button className="mt-4 mb-4 bg-[#007580] text-white font-semibold py-2 px-4 rounded">
              ${product.price}
            </button>
            {product.originalPrice && (
              <p className="text-sm text-gray-500 line-through mt-2">Original Price: ${product.originalPrice}</p>
            )}
            <p className="text-gray-700 mt-4">
              {product.description || "High-quality and comfortable furniture at the best prices."}
            </p>
            <div className="flex gap-3 mt-4">
              {/* ✅ CartButton ko Link ke andar wrap kar diya */}
              <Link href="/cart">
                <CartButton
                  Product={{
                    _id: product.id.toString(),
                    name: product.title,
                    price: product.price,
                    image: product.image,
                  }}
                  Text="Add to Cart"
                />
              </Link>
            </div>
            {product.isNew && <span className="text-sm text-green-600 font-medium mt-2 block">New Arrival</span>}
            {product.isSale && <span className="block text-sm text-red-600 font-medium mt-2">On Sale!</span>}
          </div>
        </div>
      </div>
      <SinglePagePromotion />
    </div>
  );
};

export default ProductDetail;
