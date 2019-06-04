import React, { Component } from 'react';

import Button from './Button';

export default class AddColumn extends Component {
  constructor() {
    super();

    this.state = {
      label: ''
    }

    this.onLabelChange = (e) => {
      this.setState({
        label: e.target.value
      });
    }

    this.onSubmit = (e) => {
      e.preventDefault();
      this.props.addItem(this.state.label);
      this.setState({
        label: ''
      });
    };
  }

  render() {

    return(
      <form className="add-column" onSubmit={this.onSubmit}>
        <input className="input input--margin" type="text" onChange={this.onLabelChange} placeholder="Название колонки..." value={this.state.label}/>
        <Button>Добавить колонку</Button>
      </form>
    );
  }
}