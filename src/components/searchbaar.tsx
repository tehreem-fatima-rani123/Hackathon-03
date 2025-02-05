"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react"; // Search Icon

const localProducts = [
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

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<typeof localProducts>([]);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (filteredProducts.length > 0) {
      router.push(`/product/${filteredProducts[0].id}`);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.length > 0) {
      const matchedProducts = localProducts.filter((p) =>
        p.title.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredProducts(matchedProducts);
    } else {
      setFilteredProducts([]);
    }
  };

  return (
<div className="relative w-96 mx-auto my-4 hidden sm:block">
<form onSubmit={handleSearch} className="flex items-center border rounded-lg p-2 w-full">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full h-8 outline-none"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button type="submit" className="text-gray-500 bg-gray-100 ml-3 hover:text-gray-700">
          <Search size={20} />
        </button>
      </form>

      {/* Suggestions List */}
      {filteredProducts.length > 0 && (
        <ul className="absolute left-0 right-0 bg-white border rounded-lg shadow-lg mt-1 max-h-60 overflow-auto">
          {filteredProducts.map((product) => (
            <li
              key={product.id}
              onClick={() => router.push(`/product/${product.id}`)}
              className="p-3 flex items-center cursor-pointer hover:bg-gray-100"
            >
              <img src={product.image} alt={product.title} className="w-12 h-12 object-cover rounded mr-3" />
              <div>
                <p className="text-sm font-medium">{product.title}</p>
                <p className="text-xs text-gray-500">${product.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;




