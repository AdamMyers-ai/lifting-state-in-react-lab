import Ingredient from "../Ingredient/Ingredient";

const IngredientList = ({ ingredients, addToBurger }) => {
  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <Ingredient
          key={index}
          ingredient={ingredient}
          action={addToBurger}
          actionLabel="+"
        />
      ))}
    </ul>
  );
};

export default IngredientList;
