import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';

import Column from './Column';

export default class Columns extends Component {
  
  

  render() {

    const { addTaskItem, onDeletedColumn, onDeletedTask } = this.props;

    const columns = this.props.columns.map((item, index) => {
      const { idColumn, ...itemProps } = item;

      return (
        <div key={idColumn} className="column">
          <Column 
            { ...itemProps }
            addTaskItem={addTaskItem}
            idColumn={idColumn}
            index={index}
            onDeletedColumn={onDeletedColumn}
            onDeletedTask={onDeletedTask}
          />
        </div>
      );
    });


    return(
      <main className="content">
        <Droppable
          droppableId="all-columns"
          direction="horizontal"
          type="column"
        >
          {provided => (
            <div className="columns" {...provided.droppableProps} ref={provided.innerRef}>
              { columns }
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </main>
    );
  }
}
