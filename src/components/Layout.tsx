import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import CoffeeList from "./CoffeeList";
import CoffeeForm from "./CoffeeForm";

const Layout: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/coffees" element={<CoffeeList />} /> 
        <Route path="/coffees/new" element={<CoffeeForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
