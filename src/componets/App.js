import React, { Component } from "react";
import SearchRecipes from "./SearchRecipes";

class App extends Component {
  render() {
    return (
      <div>
        <h2>Recipe Finder </h2>
        <SearchRecipes></SearchRecipes>
      </div>
    );
  }
}
export default App;
