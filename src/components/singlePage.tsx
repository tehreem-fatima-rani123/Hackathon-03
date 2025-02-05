"use client"; 

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

const SinglePagePromotion = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(`*[_type == "products"][0...10]{
        "slug":slug.current,
        title,
        price,
        priceWithoutDiscount,
        badge,
        color,
        "imageUrl": image.asset->url,
      }`);
      setProducts(data);
    };

    fetchData();
  }, []);

  return (
    <div className="lg:mx-20 sm:mx-10 mx-3 lg:mt-10 mt-5  mb-10 lg:mb-24 ">
      <div className="head flex md:flex-row flex-col gap-3 justify-between items-center">
        <h3 className="uppercase lg:text-[28px] text-[18px] font-bold text-black">
          Featured Products
        </h3>
        <Link
          href="/product"
          className="text-black font-bold lg:text-[18px] text-sm lg:border-b-2 border-b lg:pb-1 border-black "
        >
          View All
        </Link>
      </div>
      <div className="images mt-12 gap-7 overflow-x-scroll scrollbar-hide flex">
        {products.map((prod: any) => {
          return (
            <Link href={`/product/${prod.slug}`} key={prod.slug}>
              <div className="w-[220px] h-[220px] hover:drop-shadow-md">
                <img src={prod.imageUrl} alt={prod.title} className="rounded-lg" />
              </div>
              <div className="flex justify-between mt-3">
                <span className="text-[#272343]">{prod.title}</span>
                <span className="text-black font-bold">${prod.price}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SinglePagePromotion;