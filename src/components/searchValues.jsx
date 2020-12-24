import React, { Component } from "react";
import SearchValueField from "./searchValueField";
import { Row, Container } from "react-bootstrap";

class SearchValues extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Row>
          {this.props.data.map((d, index) => (
            <SearchValueField data={d} index={index} />
          ))}
        </Row>
      </div>
    );
  }
}

export default SearchValues;
