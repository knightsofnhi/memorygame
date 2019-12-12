import React from "react";

// I've destructured the props
const Restaurant = (props) => (
    <div>
        {
            props.list.map(restaurant => <div key={restaurant._id}>{restaurant.restaurantName}</div>)
        }
    </div>
);

export default Restaurant;