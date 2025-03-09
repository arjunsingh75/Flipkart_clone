import React from "react";

const categories = [
  { name: "Top Offers", img: "https://rukminim2.flixcart.com/fk-p-flap/97/97/image/6a99be02898b225d.jpg?q=100" },
  { name: "Mobiles & Tablets", img: "https://rukminim2.flixcart.com/fk-p-flap/97/97/image/6c22d4999cdb4144.jpg?q=100" },
  { name: "TVs & Appliances", img: "https://rukminim2.flixcart.com/fk-p-flap/97/97/image/4a5fb0c8e0461335.jpg?q=100" },
  { name: "Electronics", img: "https://rukminim2.flixcart.com/fk-p-flap/97/97/image/2e30d5fac47eff64.jpg?q=100" },
  { name: "Fashion", img: "https://rukminim2.flixcart.com/fk-p-flap/97/97/image/46de73feaefc28cd.jpg?q=100" },
  { name: "Beauty, Food..", img: "https://rukminim2.flixcart.com/fk-p-flap/97/97/image/800e00a6322c6985.jpg?q=100" },
  { name: "Home & Kitchen", img: "https://rukminim2.flixcart.com/fk-p-flap/97/97/image/8538d487cd2bc8b7.jpg?q=100" },
  { name: "Furniture", img: "https://rukminim2.flixcart.com/fk-p-flap/97/97/image/e7947cc0cc4a6b7c.jpg?q=100" },
  { name: "Travel", img: "https://rukminim2.flixcart.com/fk-p-flap/97/97/image/49f31863cc17d101.jpg?q=100" },
  { name: "Grocery", img: "https://rukminim2.flixcart.com/fk-p-flap/97/97/image/1400d6186b839cde.jpg?q=100" },
];

const CategorySection = () => {
  return (
    <div className="category-section">
      {categories.map((category, index) => (
        <div key={index} className="category-card">
          <img src={category.img} alt={category.name} />
          <p>{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
