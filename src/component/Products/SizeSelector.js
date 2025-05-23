import React, { useState } from 'react';
import './SizeSelector.css';

export default function SizeSelector({ product, onSelect }) {
  const [selected, setSelected] = useState(null);
  const sizes = product?.sizes || {};

  const handleClick = (size, quantity) => {
    if (quantity === 0) return;
    setSelected(size);
    onSelect?.(parseInt(size)); // שליחה כמספר
  };

  return (
    <div className="size-selector d-flex flex-wrap justify-content-center gap-2">
      {Object.entries(sizes).map(([size, quantity]) => {
        const isDisabled = quantity === 0;
        return (
          <button
            key={`${product.id}-${size}`} // מפתח ייחודי
            className={`size-button ${selected == size ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}`}
            onClick={() => handleClick(size, quantity)}
            disabled={isDisabled}
            title={isDisabled ? 'לא זמין במלאי' : `נותרו ${quantity} במלאי`}
          >
            {size}
          </button>
        );
      })}
    </div>
  );
}
