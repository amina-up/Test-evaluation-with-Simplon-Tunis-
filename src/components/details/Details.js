import React, { Component } from "react";
import axios from "axios";
import DetailCard from "./detailCard";

class Details extends Component {
  state = {
    details: []
  };

  componentDidMount() {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/comments?postId=${this.props.match.params.id}`
      )
      .then(res => {
        const detail = res.data;
        this.setState({ details: detail });
      });
  }

  render() {
    return (
      <div className="cards">
        {this.state.details.map((detail, key) => (
          <div key={key}>
            <DetailCard detail={detail} />
          </div>
        ))}
      </div>
    );
  }
}
export default Details;
