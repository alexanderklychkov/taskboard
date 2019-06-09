import React, { Component } from 'react';

import Modal from './Modal';
import Button from './Button';

export default class ColumnProperty extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false
    }

    this.openModal = () => {
      this.setState({ isOpen: true });
    }

    this.handleCancel = () => {
      this.setState({ isOpen: false });
    }
  }

  render() {
    const { onDeletedColumn } = this.props;

    return(
      <>
        <a className="column-head__property" href="#top" onClick={this.openModal}>...</a>
        <Modal
          title='Свойства колонки'
          isOpen={this.state.isOpen}
          onCancel={this.handleCancel}
        >
          <Button onClick={onDeletedColumn}>Удалить колонку</Button>
        </Modal>
      </>
    );
  }
}