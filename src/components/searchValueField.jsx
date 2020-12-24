import React, { Component } from "react";
// import { Card, Button, Col } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
            <div className="card">
              <img
                src={this.props.data.avatar_url}
                className="avatar"
                alt="Avatar"
              />
              <div class="container">
                <h4>
                  <b>{this.props.data.login}</b>
                </h4>
                <p>Architect Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </Col>
    );
  }
}

export default SearchValueField;
