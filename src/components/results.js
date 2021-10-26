import React, { Component } from "react";

import Logo from "./logo";
import SearchBar from "./searchBar";

class Results extends Component {
  handleSearchBarSubmit(query) {
    console.log("results handleSearchBar Submit", query);
    this.props.history.push("/results");
  }

  render() {
    return (
      <div>
        <h1>Results</h1>
        <Logo size={55} />
        <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)} />
      </div>
    );
  }
}

export default Results;
