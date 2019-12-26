import React, { Component } from "react";
import axios from "axios";
import CardPost from "./Post";

class ListPostes extends Component {
  state = {
    listposts: []
  };

  componentDidMount() {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?userId=${this.props.match.params.id}`
      )
      .then(res => {
        const posts = res.data;
        this.setState({ listposts: posts });
      });
  }

  render() {
    return (
      <div className="cards">
        {this.state.listposts.map((el, key) => (
          <div key={key}>
            <CardPost posts={el} />
          </div>
        ))}
      </div>
    );
  }
}
export default ListPostes;
