import React, { Component } from "react";
import axios from "axios";
import RestaurantList from "./components/RestaurantList";
import AddRestaurant from "./components/AddRestaurant";

class App extends Component {
  state = {
    restaurants: []
  }

  componentDidMount() {
    axios.get("/api/restaurant").then(results => this.setState({
      restaurants: results.data
    }));
  }

  render() {
    return (
      <div className="container">
        {
          this.state.restaurants.length === 0 ?
            <h1>No restaurants</h1> : <RestaurantList list={this.state.restaurants} />

        }

        <AddRestaurant />

     
      </div>
    );
  }
}

export default App;
