
import React from "react";
import SearchBar from "../components/SearchBar.jsx";
import Cart from "../components/Cart.jsx";

export default function Home() {
  return (
    <div>
      <h1> 🛍️ShopConnect </h1>
      <p>Abraham MK. Kollie boutique de vêtements en ligne !</p>

      <SearchBar />
      <Cart />
    </div>
  );
}
