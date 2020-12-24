import React, { Component } from "react";
import { Card, Button, Col } from "react-bootstrap";
class SearchValueField extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Col>
        <div>
          <div key={this.props.index}>
            {/* <p>{this.props.data.login}</p> */}
            <Card style={{ width: "200px" }}>
              <Card.Img
                variant="top"
                src={this.props.data.avatar_url}
                className="avatar"
              />
              <Card.Body>
                <Card.Title>{this.props.data.login}</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Col>
    );
  }
}

export default SearchValueField;
