import React, { Component } from 'react';

export default class Task extends Component {
  

  render() {
    const { label } = this.props;

    return(
      <>
        <p className="column-tasks__item-name">{ label }</p>
        <p className="column-tasks__item-property">•</p>
      </>
    );
  }
}