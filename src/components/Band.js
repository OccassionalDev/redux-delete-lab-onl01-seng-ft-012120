import React, { Component } from 'react';

class Band extends Component {

  handleClick = () => {
    
  }

  render() {
    return(
      <div>
        <span>{ props.name }</span>
        <button onClick={ this.handleClick }>DELETE</button>
      </div>
    );
  }
};

export default Band;
