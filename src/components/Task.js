import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';

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
        <Draggable draggableId={this.props.idTask} index={this.props.index}>
        {(provided) => (
          <div className="column-tasks__item-area" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} onClick={this.openModal}>
            <p className="column-tasks__item-name">{ label }</p>
            <p className="column-tasks__item-property">•</p>
          </div>
        )}
        </Draggable>

        
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