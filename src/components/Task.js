import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import Modal from './Modal';
import Button from './Button';
import InputTask from './InputTask';

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

    this.handleChange = (e) => {
      this.props.onChangePriority(this.props.idTask, this.props.idColumn, e.target.value);
    }

    this.handleCurrentChange = (e) => {
      this.props.onChangeCurrent(this.props.idTask, this.props.idColumn, e.target.value);
    }
  }
  

  render() {
    const { label, openTmpInput, closeTaskTmpInput, inputOpen, createDate, priority, isCurrent, onDeletedTask } = this.props;

    

    let classTask = 'column-tasks__item-area';
    let classTaskName = 'column-tasks__item-name';

    switch (isCurrent) {
        case 'true':
          classTask += ' current';
          classTaskName += ' line-throught';
          break;
        case 'false':
          classTask += '';
          classTaskName += '';
          break;
        default:
          break;
    }
    
    let classProperty = 'column-tasks__item-property';

    switch (priority) {
      case 'high':
        classProperty += ' high';
        break;
      case 'medium':
        classProperty += ' medium';
        break;
      case 'low':
        classProperty += ' low';
        break;
      default:
        break;
    }

    return(
      <>
        <Draggable draggableId={this.props.idTask} index={this.props.index}>
          {(provided) => (
            <div className={classTask} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} onClick={this.openModal}>
              <p className={classTaskName}>{ label }</p>
              {isCurrent === 'false' ? <p className={classProperty}>•</p> : <p className="column-tasks__item-current">✓</p>}
              
            </div>
          )}
        </Draggable>

        
        <Modal
          title="Свойства задачи"
          isOpen={this.state.isOpen}
          onCancel={this.handleCancel}
        >
          <p>Название: <span className="name--change" onClick={() => openTmpInput()}>{inputOpen ? <InputTask idTask={this.props.idTask} idColumn={this.props.idColumn} valueInput={label} closeTaskTmpInput={closeTaskTmpInput}/> : label }</span></p>
          <p>Дата создания: <span className="name-change">{ createDate }</span></p> 
          <label>
            Приоритет:  
            <select className="select reset-margin" value={priority} onChange={this.handleChange}>
              <option value="high">Высокий</option>
              <option value="medium">Средний</option>
              <option value="low">Низкий</option>
            </select>
          </label><br />
          <label>
            Статус:  
            <select className="select margin-left" value={isCurrent} onChange={this.handleCurrentChange}>
              <option value={false}>В процессе</option>
              <option value={true}>Выполнено</option>
            </select>
          </label>
          <div className="center">
            <Button onClick={onDeletedTask}>Удалить задачу</Button>
          </div>
        </Modal>
      </>
    );
  }
}