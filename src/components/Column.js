
import React, { Component } from 'react';

import Task from './Task';
import AddTasks from './AddTasks';
import ColumnProperty from './ColumnProperty';

export default class Column extends Component {
  

  render() {
    const { label, addTaskItem, id, onDeletedColumn, onDeletedTask } = this.props;

    const tasks = this.props.tasks.map((item) => {
      const { id, ...itemTasks } = item;

      return (
        <div key={id} className="column-tasks__item" >
          <Task 
            { ...itemTasks }
            onDeletedTask={() => onDeletedTask(id)}
          />
        </div>
      );
    });

    return(
      <>
        <div className="column-head">
          <h2 className="column-head__name">{label}</h2>
          <ColumnProperty 
            onDeletedColumn={() => onDeletedColumn(id)}
          /> 
        </div>
        <div className="column-tasks">
          { tasks }
        </div>
        <div className="column-add-task">
          <AddTasks addTaskItem={addTaskItem} id={id}/>
        </div>
      </>
    );
  }
}