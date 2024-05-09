import { Food } from "./app/shared/models/Food";
import { Tag } from "./app/shared/models/Tag";

export const sample_foods: Food[] = [
    {
      id: "1",
      name: "Pizza",
      price: 12.99,
      tags: ["Italian", "Fast Food"],
      favorite: true,
      stars: 4,
      imageUrl: "assets/food-1.jpg",
      origins: ["Italy"],
      cookTime: "30-40"
    },
    {
      id: "2",
      name: "Sushi",
      price: 18.50,
      tags: ["Japanese", "Seafood"],
      favorite: false,
      stars: 5,
      imageUrl: "assets/food-2.jpg",
      origins: ["Japan", "Diwata Pares"],
      cookTime: "45-50"
    },
    {
      id: "3",
      name: "Burger",
      price: 9.99,
      favorite: true,
      stars: 4,
      imageUrl: "assets/food-3.jpg",
      origins: ["United States"],
      cookTime: "20-40"
    },
    {
      id: "4",
      name: "Fries",
      price: 14.99,
      tags: ["Thai", "Noodles", "Fast Food"],
      favorite: false,
      stars: 4,
      imageUrl: "assets/food-4.jpg",
      origins: ["Thailand"],
      cookTime: "35-40"
    },
    {
      id: "5",
      name: "Chicken Soup",
      price: 10.50,
      tags: ["Mexican"],
      favorite: true,
      stars: 4,
      imageUrl: "assets/food-5.jpg",
      origins: ["Mexico"],
      cookTime: "25-40"
    },
    {
      id: "6",
      name: "Vegetables Pizza",
      price: 15.99,
      tags: ["Japanese", "Seafood", "Vegetarian"],
      favorite: true,
      stars: 5,
      imageUrl: "assets/food-6.jpg",
      origins: ["Japan"],
      cookTime: "40-45"
    }
  ];

export const sample_tags:Tag[] = [
  { name: "Italian", count: 25 },
  { name: "Japanese", count: 18 },
  { name: "Fast Food", count: 30 },
  { name: "Mexican", count: 15 },
  { name: "Lunch", count: 12 },
  { name: "Thai", count: 10 },
  { name: "Bakery", count: 20 },
  { name: "Vegetarian", count: 8 }
]