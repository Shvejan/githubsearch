import logo from "./logo.svg";
import "./App.css";
import SearchValues from "./components/searchValues";
// import { useState } from "react";
import React, { Component } from "react";
import axios from "axios";
import Card from "./components/card";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", searchResults: [], previousApiCall: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getUsers = this.getUsers.bind(this);
  }

  handleChange(event) {
    // alert(event.target.value);

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
    console.log(result.data.items);
    this.setState({ searchResults: result.data.items });

    // this.setState(this.state.searchResults, result);
  }

  handleSubmit(event) {
    // alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <div id="cover">
              <form>
                <div className="tb">
                  <div className="td">
                    <input
                      type="text"
                      value={this.state.value}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="td" id="s-cover">
                    <button type="submit">
                      <div id="s-circle"></div>
                      <span></span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <SearchValues data={this.state.searchResults} />
            {/* model */}
            <Card />
          </div>
        </header>
      </div>
    );
  }
}

// function App() {
//   const [searchText, handlesearchText] = useState("adfasd");
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <div>
//           <div id="cover">
//             <form>
//               <div class="tb">
//                 <div class="td">
//                   <input
//                     type="text"
//                     value={searchText}
//                     onChange={handlesearchText()}
//                   />
//                 </div>
//                 <div class="td" id="s-cover">
//                   <button type="submit">
//                     <div id="s-circle"></div>
//                     <span></span>
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//           <SearchValues />
//           {/* model */}
//         </div>
//       </header>
//     </div>
//   );
// }

export default App;
