"use client";

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { BsCartDash } from "react-icons/bs";

const OurProduct = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await client.fetch(`*[_type == "products"][0...8]{
        "slug":slug.current,
        title,
        price,
        priceWithoutDiscount,
        badge,
        color,
        "imageUrl": image.asset->url,
      }`);

      const uniqueProducts = Array.from(
        new Map(data.map((prod: any) => [prod.imageUrl, prod])).values()
      );

      setProducts(uniqueProducts);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 mb-20">
      <h2 className="text-[#272343] text-2xl md:text-3xl font-semibold text-center md:text-left">
        Our Products
      </h2>

      {loading ? (
        <p className="text-center text-xl mt-10">Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {products.map((prod) => (
            <div key={prod.slug} className="w-full max-w-[280px] mx-auto cursor-pointer hover:drop-shadow-md">
              <div className="relative overflow-hidden rounded-xl group aspect-square">
                <Link href={`/product/${prod.slug}`}>
                  <img
                    src={prod.imageUrl}
                    alt={prod.title}
                    className="w-full h-full object-cover rounded-xl transform transition-transform duration-300 group-hover:scale-110 group-hover:brightness-75"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-400 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-lg font-semibold">{prod.title}</span>
                  </div>
                </Link>
                {prod.color && (
                  <span
                    className="absolute top-4 left-4 rounded-lg text-sm px-3 py-1"
                    style={{ backgroundColor: prod.color, color: "white" }}
                  >
                    {prod.badge}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between mt-3">
                <div>
                  <h4 className="text-[#272343] transition-all duration-300 hover:underline">
                    {prod.title}
                  </h4>
                  <div>
                    <span className="text-[#272343] text-lg font-medium">{prod.price}$</span>
                    <del className="ml-1 text-[#9A9CAA]">{prod.priceWithoutDiscount}</del>
                  </div>
                </div>
                <div className="px-3 py-2 bg-[#F0F2F3] hover:shadow-xl hover:bg-[#029FAE] text-[#272343] hover:text-white rounded-lg">
                  <Link href="/cart">
                    <BsCartDash className="size-6 transition-transform duration-300 hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OurProduct;
