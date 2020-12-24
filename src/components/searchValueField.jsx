import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import axios from "axios";
class SearchValueField extends Component {
  constructor(props) {
    super(props);
    this.state = { modalShow: false, followers: 0, following: 0, topRepos: [] };
    this.getRepos = this.getRepos.bind(this);
  }
  toggle = () => {
    this.getRepos();

    this.setState({ modalShow: !this.state.modalShow });
  };
  async getRepos() {
    const repos = await axios(this.props.data.repos_url);

    // alert(repos.length);
    console.log(repos.data.length);

    this.setState({ topRepos: repos.data });
  }
  componentDidMount() {
    // this.getDetails();
  }
  render() {
    return (
      <div
        className="col-sm-12 col-md-3"
        key={this.props.index}
        onClick={this.toggle}
      >
        <img
          src={this.props.data.avatar_url}
          className="avatar "
          alt="Avatar"
        />

        <h2 className="m-3">{this.props.data.login}</h2>
        <Modal open={this.state.modalShow} onClose={this.toggle} center>
          <div className=" m-5">
            <img
              src={this.props.data.avatar_url}
              className="avatar "
              alt="Avatar"
            />
            <br />
            <a href={this.props.data.html_url} target="_blank">
              <Button className="align-self-center">View Profile</Button>
            </a>
            <h2 className="m-3">{this.props.data.login}</h2>
            <h3>total repos: {this.state.topRepos.length}</h3>
            <br />
            <br />
            {this.state.topRepos.length > 2 && (
              <div>
                <h3>Top Projects:</h3>
                <ul>
                  <a href={this.state.topRepos[0].html_url} target="_blank">
                    <li>{this.state.topRepos[0].name}</li>
                  </a>
                  <a href={this.state.topRepos[1].html_url} target="_blank">
                    <li>{this.state.topRepos[1].name}</li>
                  </a>
                  <a href={this.state.topRepos[2].html_url} target="_blank">
                    <li>{this.state.topRepos[2].name}</li>
                  </a>
                </ul>
              </div>
            )}
          </div>
        </Modal>
      </div>
    );
  }
}

export default SearchValueField;
