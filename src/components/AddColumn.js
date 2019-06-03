import React, { Component } from 'react';

import Button from './Button';

export default class AddColumn extends Component {
  render() {
    const { onSubmit } = this.props;

    return(
      <form className="add-column" onSubmit={onSubmit}>
        <input className="input input--margin" type="text" placeholder="Название колонки..."/>
        <Button>Добавить колонку</Button>
      </form>
    );
  }
}