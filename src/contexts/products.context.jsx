import { useState, useEffect, createContext } from "react";
import PRODUCTS_DATA from "../shop-data.json";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS_DATA);
  const value = { products };

  useEffect(() => {
    setProducts(PRODUCTS_DATA);
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
