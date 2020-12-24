import React, { Component } from "react";
import "./Main.css";
import logo from "./logo.svg";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <div id="cover">
              <div className="tb">
                <div className="td">
                  <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="td" id="s-cover">
                  <button>
                    <div id="s-circle"></div>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
            {/* <div>
              <Container>
                <SearchValues data={this.state.searchResults} />
              </Container>
            </div> */}
            {/* model */}
            {/* <CardFunction /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
