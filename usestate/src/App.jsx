import { useState } from "react";
import RestaurantsContainer from "./components/RestaurantsContainer";
import { restaurants } from "./data/data.js";
import "./App.css";

function App() {
  const [restaurantState, setRestaurants] = useState([...restaurants]);

  return (
    <div className="App">
      {/* Pass the restaurant data to the RestaurantsContainer component */}
      <RestaurantsContainer restaurants={restaurantState} />
    </div>
  );
}

export default App;
