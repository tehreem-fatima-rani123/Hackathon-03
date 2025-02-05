import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json([
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
    { id: 9, title: "Foldable Outdoor Chair", price: 10, image: "/card (1).png" },
    {
      id: 10,
      title: "Leather Recliner Chair",
      price: 150,
      image: "/Image (2).png",
      isSale: true,
      originalPrice: 200,
    },
  ]);
}