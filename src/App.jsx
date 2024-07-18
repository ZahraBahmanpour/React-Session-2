import { useState } from "react";
import FilterableProductTable from "./components/FilterableProductTable";
import data from "../data";
import CreateNewProduct from "./components/CreateNewProduct";

function App() {
  const [products, setProducts] = useState(data);
  const handleCreateNew = (newProduct) => {
    //console.log(newProduct);
    setProducts([...products, newProduct]);
  };
  return (
    <>
      <FilterableProductTable products={products} />
      <CreateNewProduct onCreateNew={handleCreateNew} />
    </>
  );
}

export default App;
