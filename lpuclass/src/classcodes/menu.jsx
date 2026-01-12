import React from "react";

const PizzaCard = () => <div>🍕 Pizza</div>;
const BurgerCard = () => <div>🍔 Burger</div>;
const SaladCard = () => <div>🥗 Salad</div>;

const Menu = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => {
        if (item.type === "pizza") return <PizzaCard key={index} />;
        if (item.type === "burger") return <BurgerCard key={index} />;
        if (item.type === "salad") return <SaladCard key={index} />;
        return null;
      })}
    </div>
  );
};

export default Menu;
