import Restaurant from "./Restaurant";

function RestaurantsContainer(props) {
  console.log(props);

  return (
    <div className="restaurantContainer">
      {/* Loop through the list of restaurants and render a Restaurant component for each */}
      {props.restaurants.map((restaurant) => (
        // Provide key for React
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}

export default RestaurantsContainer;
