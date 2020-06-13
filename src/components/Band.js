import React, { Component } from 'react';

class Band extends Component {

  handleClick = () => {
    this.props.deleteBand(this.props.id)
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
