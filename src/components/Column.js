
import React, { Component } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import Task from './Task';
import AddTasks from './AddTasks';
import ColumnProperty from './ColumnProperty';

export default class Column extends Component {
  constructor() {
    super();

    this.state = {
      isDragDisabled: false
    }

    this.isDrag = (bool) => {
      this.setState({isDragDisabled: bool})
    }
  }

  render() {
    const { label, createDate, addTaskItem, idColumn, onDeletedColumn, onDeletedTask, onChangePriority, onChangeCurrent, inputOpen, openTmpInput, closeTmpInput, closeTaskTmpInput } = this.props;

    const tasks = this.props.tasks.map((item, index) => {
      const { idTask, ...itemTasks } = item;

      return (
        <div key={idTask} className="column-tasks__item" >
          <Task 
            { ...itemTasks }
            idTask={idTask}
            index={index}
            idColumn={idColumn}
            onChangePriority={onChangePriority}
            onChangeCurrent={onChangeCurrent}
            inputOpen={inputOpen}
            openTmpInput={openTmpInput}
            closeTaskTmpInput={closeTaskTmpInput}
            onDeletedTask={() => onDeletedTask(idTask, idColumn)}
          />
        </div>
      );
    });

    return(
      <>
        <Draggable draggableId={idColumn} index={this.props.index}  isDragDisabled={this.state.isDragDisabled}>
          {provided => (
            <div className="column-area" {...provided.draggableProps} ref={provided.innerRef}>
              <div className="column-head" {...provided.dragHandleProps}>
                <h2 className="column-head__name">{label}</h2>
                <ColumnProperty 
                  label={label}
                  createDate={createDate}
                  inputOpen={inputOpen}
                  idColumn={idColumn}
                  openTmpInput={openTmpInput}
                  closeTmpInput={closeTmpInput}
                  onDeletedColumn={() => onDeletedColumn(idColumn)}
                  isDrag={this.isDrag}
                /> 
              </div>
              <Droppable droppableId={idColumn}>
                {provided => (
                  <div className="column-tasks"  ref={provided.innerRef} {...provided.droppableProps}>
                    { tasks }
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
              <div className="column-add-task">
                <AddTasks addTaskItem={addTaskItem} idColumn={idColumn}/>
              </div>
            </div>
        )}
        </Draggable>
      </>
    );
  }
}