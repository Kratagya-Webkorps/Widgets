
import React from "react";
import "./index.css";
import ProductWidgetList from "./components/products/ProductWidgetList";

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <ProductWidgetList />
    </div>
  );
};

export default App;
