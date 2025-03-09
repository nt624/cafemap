import React from "react";
import { useNavigate } from "react-router-dom";

console.log("Navbar.tsx is running");

const Navbar: React.FC = () => {
    return (
    <nav>
      <p><a href="/coffees/">保存したコーヒー</a></p>
      <p><a href="/coffees/new">新しいコーヒーを追加</a></p>
    </nav>
  );
};

export default Navbar;
