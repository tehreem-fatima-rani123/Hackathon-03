import React from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

type Products = {
  id: string;
  title: string;
  image: string;
  products: number;
};

const TopCategory = async () => {
  const data = await client.fetch(`*[_type=="categories"]{
      id,
      title,
      image,
      products
  }`);

  return (
    <div id="top-category" className="mx-auto w-full text-[Inter] pb-5 px-4">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto pt-14">
          <h1 className="text-3xl md:text-2xl font-semibold text-left mb-6">
            Top Categories
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {data.map((item: Products, i: number) => (
              <div key={i} className="p-4 hover:scale-105 duration-150 group">
                <Link href={`/${item.id}`} className="block">
                  <div className="relative h-[350px] w-full rounded overflow-hidden">
                    <img
                      src={urlFor(item.image).url()}
                      alt={item.title}
                      width={600}
                      height={900}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-16 hidden group-hover:flex flex-col justify-center transition-all cursor-pointer bg-[#000000b6] text-white px-4 py-2">
                      <p className="text-sm font-semibold">{item.title}</p>
                      <p className="text-xs">{item.products} Products</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopCategory;
