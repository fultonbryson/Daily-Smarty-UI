import React, { Component } from "react";

import Logo from "./logo";
import SearchBar from "./searchBar";
import ResultsPosts from "./resultsPosts";

import { connect } from "react-redux";
import * as actions from "../actions";

class Results extends Component {
  handleSearchBarSubmit(query) {
    this.props.fetchPostsWithQuery(query);
    console.log("results submit: ");
  }

  render() {
    return (
      <div>
        <Logo size={55} />
        <SearchBar
          page={"results"}
          onSubmit={(query) => this.handleSearchBarSubmit(query)}
        />
        <ResultsPosts />
      </div>
    );
  }
}

export default connect(null, actions)(Results);
