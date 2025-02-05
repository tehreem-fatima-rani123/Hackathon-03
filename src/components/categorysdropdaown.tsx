import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const categories = ["Sofa", "Stool", "Wooden Chair", "Desk Chair","Wing Chair"];

  return (
    <div className="relative justify-start inline-block">
      <button
        className="text-lg mr-[750px] px-4 py-2 rounded-lg hover:bg-gray-100 transition flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        Categories
        <FaChevronDown className={`ml-2 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-lg">
          <ul className="py-2">
            {categories.map((category, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-100 transition cursor-pointer"
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
