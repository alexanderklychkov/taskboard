import React, { Component } from 'react';

import Modal from './Modal';
import Button from './Button';

export default class Task extends Component {
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
    const { label, onDeletedTask } = this.props;

    return(
      <>
        <div className="column-tasks__item-area" onClick={this.openModal}>
          <p className="column-tasks__item-name">{ label }</p>
          <p className="column-tasks__item-property">•</p>
        </div>

        
        <Modal
          title="Свойства задачи"
          isOpen={this.state.isOpen}
          onCancel={this.handleCancel}
        >
          <Button onClick={onDeletedTask}>Удалить задачу</Button>
        </Modal>
      </>
    );
  }
}