
import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';

import Task from './Task';
import AddTasks from './AddTasks';
import ColumnProperty from './ColumnProperty';

export default class Column extends Component {
  

  render() {
    const { label, addTaskItem, idColumn, onDeletedColumn, onDeletedTask } = this.props;

    const tasks = this.props.tasks.map((item, index) => {
      const { idTask, ...itemTasks } = item;

      return (
        <div key={idTask} className="column-tasks__item" >
          <Task 
            { ...itemTasks }
            onDeletedTask={() => onDeletedTask(idTask, idColumn)}
            index={index}
            idTask={idTask}
          />
        </div>
      );
    });

    return(
      <>
        <div className="column-head">
          <h2 className="column-head__name">{label}</h2>
          <ColumnProperty 
            onDeletedColumn={() => onDeletedColumn(idColumn)}
          /> 
        </div>
        <Droppable droppableId={idColumn}>
        {provided => (
          <div className="column-tasks" ref={provided.innerRef} {...provided.droppableProps}>
            { tasks }
            {provided.placeholder}
          </div>
        )}
        </Droppable>
        <div className="column-add-task">
          <AddTasks addTaskItem={addTaskItem} idColumn={idColumn}/>
        </div>
      </>
    );
  }
}