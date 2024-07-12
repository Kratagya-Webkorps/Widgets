import React, { useState, useEffect } from "react";
import {
  ProductWidget as ProductWidgetType,
  ProductWidgetColor,
} from "../interfaces";

interface ProductWidgetProps {
  widget: ProductWidgetType;
  onUpdate: (settings: Partial<ProductWidgetType>) => void;
}

const ProductWidget: React.FC<ProductWidgetProps> = ({ widget, onUpdate }) => {
  const [localActive, setLocalActive] = useState<boolean>(widget.active);
  const [localLinked, setLocalLinked] = useState<boolean>(widget.linked);
  const [localSelectedColor, setLocalSelectedColor] =
    useState<ProductWidgetColor>(widget.selectedColor);

  useEffect(() => {
    setLocalActive(widget.active);
  }, [widget.active]); 

  const handleToggleChange = () => {
    const updatedActive = !localActive;
    setLocalActive(updatedActive);
    onUpdate({ active: updatedActive });
  };

  const handleLinkedChange = () => {
    const updatedLinked = !localLinked;
    setLocalLinked(updatedLinked);
    onUpdate({ linked: updatedLinked });
  };

  const handleColorChange = (color: ProductWidgetColor) => {
    setLocalSelectedColor(color);
    onUpdate({ selectedColor: color });
  };

  const colorPalette: ProductWidgetColor[] = [
    "white",
    "black",
    "blue",
    "#3B755F",
    "#2E3A8C",
    "#F2EBDB",
    "purple",
  ];

  const isLightColor =
    localSelectedColor === "white" || localSelectedColor === "#F2EBDB";
  const textColor = isLightColor ? "text-black" : "text-white";

  return (
    <div className="border p-4 m-4 rounded shadow-md">
      <h2
        className={`p-2 rounded ${textColor}`}
        style={{ backgroundColor: localSelectedColor }}
      >
        This product {widget.action} {widget.amount} {widget.type}
      </h2>

      <div className="my-2">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={localLinked}
            onChange={handleLinkedChange}
            className="sr-only peer"
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-400 peer-checked:bg-blue-600"></div>
        </label>
        <span className="ms-3 text-sm font-medium">Link to Public Profile</span>
      </div>

      <div className="my-2">
        <label className="block mb-1">Badge color:</label>
        <div className="flex">
          {colorPalette.map((color) => (
            <div
              key={color}
              className={`color-swatch w-5 h-5 mr-4 cursor-pointer border border-gray-300 ${
                localSelectedColor === color ? "border-2 border-white" : ""
              }`}
              style={{ backgroundColor: color }}
              onClick={() => handleColorChange(color)}
            />
          ))}
        </div>
      </div>

      <div className="mt-5">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={localActive}
            onChange={handleToggleChange}
            className="sr-only peer"
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-400 peer-checked:bg-blue-600"></div>
        </label>
        <span className="ms-3 text-sm font-medium">Activate badge</span>
      </div>
    </div>
  );
};

export default ProductWidget;
