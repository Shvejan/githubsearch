import React, { Component } from 'react';
import SearchValueField from './searchValueField';
class SearchValues extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }
    
    render() {
        return (
           <div>
               {this.props.data.map((d,index)=>(
                    <SearchValueField data={d} index={index}/>
               ))}
           </div>
        );
    }
}

export default SearchValues;