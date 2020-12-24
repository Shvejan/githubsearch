import React, { Component } from "react";
import SearchValueField from "./searchValueField";
// import { Row, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class SearchValues extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            {this.props.data.map((d, index) => (
              <SearchValueField data={d} index={index} />
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default SearchValues;
