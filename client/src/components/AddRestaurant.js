import React from "react";
import Axios from "axios";
/*
 {
    "restaurantName": "Mida", 
    "restaurantDescription": "Italian Restaurant known for it's great wine",
    "restaurantAddress": "782 Tremont St., Boston MA 90210",
    "restaurantPhone": "5555553454", 
    "restaurantCatagory": "Italian",
    "restaurantPriceRange": 3
}
*/
export default class AddRestaurant extends React.Component {
    state = {
        "restaurantName": "",
        "restaurantDescription": "",
        "restaurantAddress": "",
        "restaurantPhone": "",
        "restaurantCatagory": "",
        "restaurantPriceRange": void 0
    }
    handleSubmit = (e) => { 
        e.preventDefault();
        Axios.post("/api/restaurant", this.state).then(response => console.log(response));
    }
    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <div>
                <input
                    className="form-control"
                    onChange={this.handleInputChange}
                    value={this.state.restaurantName}
                    type="text"
                    name="restaurantName"
                    placeholder="Restaurant Name" />
                <input
                    className="form-control"
                    onChange={this.handleInputChange}
                    value={this.state.restaurantAddress}
                    type="text"
                    name="restaurantAddress"
                    placeholder="Restaurant Address" />
                <input
                    className="form-control"
                    onChange={this.handleInputChange}
                    value={this.state.restaurantPhone}
                    type="text"
                    name="restaurantPhone"
                    placeholder="Restaurant Phone" />
                <input
                    className="form-control"
                    onChange={this.handleInputChange}
                    value={this.state.restaurantCategory}
                    type="text"
                    name="restaurantCategory"
                    placeholder="Restaurant Category" />
                <input
                    className="form-control"
                    onChange={this.handleInputChange}
                    value={this.state.restaurantPriceRange}
                    type="number"
                    name="restaurantPriceRange"
                    min="1"
                    max="5"
                    placeholder="Restaurant Price Range" />
                <textarea
                    className="form-control"
                    onChange={this.handleInputChange}
                    value={this.state.restaurantDescription}
                    name="restaurantDescription"
                    placeholder="Restaurant Description"></textarea>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}