import React, { Component } from "react";
import axios from "axios";
import CardUser from "./CardUser";
import "./cardUsers.css";

class ListUsers extends Component {
  state = {
    list: []
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res =>
        this.setState({
          list: res.data
        })
      )
      .catch(err => console.error(err));
  };

  render() {
    return (
      <div className="cards">
        {this.state.list.map((el, key) => (
          <div key={key}>
            <CardUser contact={el} />
          </div>
        ))}
      </div>
    );
  }
}
export default ListUsers;
