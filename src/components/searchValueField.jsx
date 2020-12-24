import React, { Component } from 'react';
class SearchValueField extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div key={this.props.index}>


                <p>{ this.props.data.login }</p>
            </div>
        );
    }
}

export default SearchValueField;