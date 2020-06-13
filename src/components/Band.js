import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <div>
        <span>{ props.name }</span>
      </div>
    );
  }
};

export default Band;
