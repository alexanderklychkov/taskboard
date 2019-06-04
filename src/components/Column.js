
import React, { Component } from 'react';

import AddTasks from './AddTasks';

export default class Column extends Component {
  

  render() {
    const { label, tasks } = this.props;

    return(
      <>
        <div className="column-head">
          <h2 className="column-head__name">{label}</h2>
          <a className="column-head__property" href="#top">...</a>  
        </div>
        <div className="column-tasks">
          {tasks[0].label}
          {tasks[1].label}
        </div>
        <div className="column-add-task">
          <AddTasks />
        </div>
      </>
    );
  }
}