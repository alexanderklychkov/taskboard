import React, { Component } from 'react';

import Column from './Column';

export default class Columns extends Component {
  
  

  render() {

    const { addTaskItem, onDeletedColumn, onDeletedTask } = this.props;

    const columns = this.props.columns.map((item) => {
      const { idColumn, ...itemProps } = item;

      return (
        <div key={idColumn} className="column">
          <Column 
            { ...itemProps }
            addTaskItem={addTaskItem}
            idColumn={idColumn}
            onDeletedColumn={onDeletedColumn}
            onDeletedTask={onDeletedTask}
          />
        </div>
      );
    });


    return(
      <main className="content">
        <div className="columns">
          { columns }
        </div>
      </main>
    );
  }
}
