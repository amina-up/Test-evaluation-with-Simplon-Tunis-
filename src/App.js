import React, { Component } from "react";
import ListUsers from "./components/ListUsers";
import ListPostes from "./components/listPosts/ListPostes";
import Details from "./components/details/Details";
import { BrowserRouter, Route, Switch } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route exact path="/" component={ListUsers} />
              <Route exact path="/posts/:id" component={ListPostes} />
              <Route exact path="/details/:id" component={Details} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
