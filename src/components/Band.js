import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        <span>{ props.name }</span>
        <button onClick={() => {
          delete={}
        } >DELETE</button>
      </div>
    );
  }
};

export default Band;
