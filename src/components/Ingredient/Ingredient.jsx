import React from "react";

const Ingredient = ({ ingredient, action, actionLabel }) => {
  return (
    <li style={{ backgroundColor: ingredient.color }}>
      {ingredient.name}
      <button onClick={() => action(ingredient)}>{actionLabel}</button>
    </li>
  );
};

export default Ingredient;
