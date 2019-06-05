import React, { Component } from 'react';

import Button from './Button';
import Modal from './Modal';

export default class AddTasks extends Component {
  constructor() {
    super();

    this.state = {
      label: '',
      isOpen: false
    };

    this.onLabelChange = (e) => {
      this.setState({
        label: e.target.value
      });
    }

    this.onSubmit = (e) => {
      e.preventDefault();
      this.props.addTaskItem(this.state.label, this.props.id);
      this.setState({
        label: ''
      });
    };

    this.openModal = () => {
      this.setState({isOpen: true});
    };

    this.handleCancel = () => {
      this.setState({isOpen: false});
    };
  }

  render() {
    const { isOpen } = this.state;

    return(
      <>
        <Button onClick={this.openModal}>Добавить задачи</Button>
        <Modal
          title="Добавить задачи"
          isOpen={isOpen}
          onCancel={this.handleCancel}
        >
          <form className="form-add-task" onSubmit={this.onSubmit}>
            <input className="input form-add-task__input" type="text" onChange={this.onLabelChange} placeholder="Название задачи..." value={this.state.label} autoFocus={true}/>
            <Button>Добавить задачу</Button>
          </form>
        </Modal>
      </>
    );
  }
}