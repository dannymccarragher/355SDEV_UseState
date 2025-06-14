import { useState } from "react";

function Restaurant(props) {
  const [hours, setHours] = useState(false);
  const [menu, setMenu] = useState(false);

  // Toggle visibility of the menu
  const handleMenu = () => {
    setMenu((prev) => !prev);
  };

  // Toggle visibility of the hours
  const handleHours = () => {
    setHours((prev) => !prev);
  };

  return (
    <div className="restaurant">
      {/* Display restaurant image with proper alt text */}
      <img src={props.restaurant.image} alt={props.restaurant.name} />

      {/* Restaurant name */}
      <h2>{props.restaurant.name}</h2>

      {/* Restaurant basic details */}
      <ul>
        <li>{props.restaurant.address}</li>
        <li>{props.restaurant.phone}</li>
        <li>{props.restaurant.cuisine}</li>
        <li>{props.restaurant.rating}</li>
      </ul>

      {/* Buttons to toggle hours and menu */}
      <button onClick={handleHours}>Hours</button>
      <button onClick={handleMenu}>Menu</button>

      {/* render menu if toggled on */}
      {menu && (
        <ul>
          {props.restaurant.menu.map((menuItem, index) => (
            <li key={index}>
              {menuItem.item} ${menuItem.price.toFixed(2)}
            </li>
          ))}
        </ul>
      )}

      {/*render hours if toggled on */}
      {hours && (
        <ul>
          {Object.entries(props.restaurant.hours).map(([day, time]) => (
            <li key={day}>
              <strong>{day.charAt(0).toUpperCase() + day.slice(1)}:</strong>{" "}
              {time}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Restaurant;
