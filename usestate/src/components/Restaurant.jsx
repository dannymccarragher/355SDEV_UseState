import { useState } from "react";

function Restaurant(props) {
  const [hours, setHours] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu((prev) => !prev);
  }

  const handleHours = () => {
    setHours((prev) => !prev);
  }

  return (
    <div className="restaurant">
      <img src={props.restaurant.image} alt={props.name} />
      <h2>{props.restaurant.name}</h2>
      <ul>
        <li>{props.restaurant.address}</li>
        <li>{props.restaurant.phone}</li>
        <li>{props.restaurant.cuisine}</li>
        <li>{props.restaurant.rating}</li>
      </ul>
      <button onClick={handleHours}>Hours</button>
      <button onClick={handleMenu}>Menu</button>
      {menu && (
        <ul>
          {props.restaurant.menu.map((menuItem) => (
            <li>{`${menuItem.item} $${menuItem.price}`}</li>
          ))}
        </ul>
      )}
      {/* needed help from the solution when working with Object.entries */}
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
