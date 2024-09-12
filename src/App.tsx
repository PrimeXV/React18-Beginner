import { useState } from "react";
import Button from "./component/Button";

const App = () => {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    const newDrink = {
      title: drink.title,
      price: 6,
    };
    setDrink(drink);
  };

  return (
    <div>
      {drink.price}
      <Button color="secondary" onClick={handleClick}>
        My Click
      </Button>
    </div>
  );
};
export default App;
