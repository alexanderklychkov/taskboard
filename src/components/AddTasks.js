import React, { Component } from 'react';

import Button from './Button';
import Modal from './Modal';

export default class AddTasks extends Component {
  constructor() {
    super();

    this.state = {
      label: '',
      isOpen: false,
      valuePriority: 'high'
    };

    this.onLabelChange = (e) => {
      this.setState({
        label: e.target.value
      });
    }

    this.onSubmit = (e) => {
      e.preventDefault();
      this.props.addTaskItem(this.state.label, this.props.idColumn, this.state.valuePriority);
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

    this.handleChange = (e) => {
      this.setState({valuePriority: e.target.value});
    }
  }

  render() {
    const { isOpen, valuePriority } = this.state;

    return(
      <>
        <Button onClick={this.openModal}>Добавить задачи</Button>
        <Modal
          title="Добавить задачи"
          isOpen={isOpen}
          onCancel={this.handleCancel}
        >
          <form className="form-add-task" onSubmit={this.onSubmit}>
            <input className="input form-add-task__input" type="text" onChange={this.onLabelChange} placeholder="Название задачи..." value={this.state.label} autoFocus={true} required/>
            <label>
              Приоритет:  
              <select className="select" value={valuePriority} onChange={this.handleChange}>
                <option value="high">Высокий</option>
                <option value="medium">Средний</option>
                <option value="low">Низкий</option>
              </select>
            </label>
            <Button>Добавить задачу</Button>
          </form>
        </Modal>
      </>
    );
  }
}