import "./App.css";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { AboutPage } from "./components/About.page";
import { HomePage } from "./components/Home.page";
import { ProductsPage } from "./components/Products.page";
import { PizzaPage } from "./components/Pizza.page";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>{" "}
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/products-pizza">Products Pizza</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/about" element={<AboutPage />} />

            <Route path="/" element={<HomePage />} />

            <Route path="/products-pizza" element={<ProductsPage />} />
            <Route path="/products-pizza">
              <Route path=":pizzaId" element={<PizzaPage />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
