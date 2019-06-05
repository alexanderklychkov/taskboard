
import React, { Component } from 'react';

import Task from './Task';
import AddTasks from './AddTasks';

export default class Column extends Component {
  

  render() {
    const { label, addTaskItem, id } = this.props;

    const tasks = this.props.tasks.map((item) => {
      const { id, ...itemTasks } = item;

      return (
        <div key={id} className="column-tasks__item">
          <Task 
            { ...itemTasks }
          />
        </div>
      );
    });

    return(
      <>
        <div className="column-head">
          <h2 className="column-head__name">{label}</h2>
          <a className="column-head__property" href="#top">...</a>  
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