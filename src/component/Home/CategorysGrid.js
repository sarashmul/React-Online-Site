
 


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryCard from './CategoryCard';

import ImgGirls from "../screens/Image/Girlss.jpg";
import ImgBoys from "../screens/Image/boy.jpg";
import ImgBasic from "../screens/Image/basic.jpg";


export default function CategorysGrid() {
  const navigate = useNavigate();

  const routes = {
    products: "/products"
  };

  const [categorys, setCategorys] = useState([
    { name: "בנות", img: ImgGirls },
    { name: "בנים", img: ImgBoys },
    { name: "basic", img: ImgBasic },


  ]);

  const handleCategoryClick = (category) => {
    const categoryParam = encodeURIComponent(category.name);
    navigate(`${routes.products}?category=${categoryParam}`);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {categorys.map((category) => (
          <div className="col-md-4 mb-4" key={category.name}>
            <CategoryCard
              category={category}
              onClick={() => handleCategoryClick(category)}
            />
          </div>
        ))}
      </div>
    </div>
  );

}

