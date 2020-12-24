import React, { Component } from "react";
import "./Main.css";
import logo from "./logo.svg";
import SearchValues from "./components/searchValues";
import axios from "axios";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", searchResults: [], previousApiCall: "" };

    this.handleChange = this.handleChange.bind(this);
    this.getUsers = this.getUsers.bind(this);
  }

  handleChange(event) {
    // console.log(event.target.value);
    if (event.target.value === "") {
      this.setState({ searchResults: [] });
    }
    this.setState({ value: event.target.value });
    setTimeout(() => {
      this.getUsers();
    }, 1000);
  }

  async getUsers() {
    if (
      this.state.value.length === 0 ||
      this.state.previousApiCall === this.state.value
    )
      return;

    this.setState({ previousApiCall: this.state.value });
    const result = await axios(
      ` https://api.github.com/search/users?q=${this.state.value}+in:user`
    );
    // console.log(result.data.items);
    this.setState({ searchResults: result.data.items });

    // this.setState(this.state.searchResults, result);
  }

  render() {
    return (
      <div className="body">
        <div className="App">
          <img src={logo} alt="logo" className="App-logo" />
          <div className="searchbox">
            <input onChange={this.handleChange} className="searchbox" />
          </div>
        </div>
        <div className="container m-5">
          <SearchValues data={this.state.searchResults} />
        </div>
      </div>
    );
  }
}

export default Main;
