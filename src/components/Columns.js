import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';

import Column from './Column';

export default class Columns extends Component {
  constructor() {
    super();

    this.state = {
      inputOpen: false
    }

    this.onChangePriority = (idTask, idColumn, priority) => {
      const idx = this.props.columns.findIndex((el) => el.idColumn === idColumn);
      let column = {...this.props.columns[idx]};

      const idxTask = column.tasks.findIndex((el) => el.idTask === idTask);
      column.tasks[idxTask].priority = priority;
      
      const before = this.props.columns.slice(0, idx);
      const after = this.props.columns.slice(idx + 1);

      const newArray = [...before, column, ...after];

      
      localStorage.setItem('columns', JSON.stringify(newArray));
      
      const newState = {
        columns: newArray
      }

      return this.props.updateState(newState);  
    }

    this.onChangeCurrent = (idTask, idColumn, current) => {
      const idx = this.props.columns.findIndex((el) => el.idColumn === idColumn);
      let column = {...this.props.columns[idx]};

      const idxTask = column.tasks.findIndex((el) => el.idTask === idTask);
      column.tasks[idxTask].isCurrent = current;
      
      const before = this.props.columns.slice(0, idx);
      const after = this.props.columns.slice(idx + 1);

      const newArray = [...before, column, ...after];

      
      localStorage.setItem('columns', JSON.stringify(newArray));
      
      const newState = {
        columns: newArray
      }

      return this.props.updateState(newState);  
    }

    this.openTmpInput = () => {
      this.setState({ inputOpen: true });
    }

    this.closeTmpInput = (idColumn, label ) => {
      this.setState({ inputOpen: false });

      const idx = this.props.columns.findIndex((el) => el.idColumn === idColumn);
      let column = {...this.props.columns[idx]};

      column.label = label;

      const before = this.props.columns.slice(0, idx);
      const after = this.props.columns.slice(idx + 1);

      const newArray = [...before, column, ...after];
      
      localStorage.setItem('columns', JSON.stringify(newArray));

      const newState = {
        columns: newArray
      }

      return this.props.updateState(newState);
    }

    this.closeTaskTmpInput = (idTask, idColumn, label) => {
      this.setState({ inputOpen: false });

      const idx = this.props.columns.findIndex((el) => el.idColumn === idColumn);
      let column = {...this.props.columns[idx]};

      const idxTask = column.tasks.findIndex((el) => el.idTask === idTask);
      column.tasks[idxTask].label = label;
      
      const before = this.props.columns.slice(0, idx);
      const after = this.props.columns.slice(idx + 1);

      const newArray = [...before, column, ...after];

      
      localStorage.setItem('columns', JSON.stringify(newArray));
      
      const newState = {
        columns: newArray
      }

      return this.props.updateState(newState); 
    }
    
  }
  

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
            onChangePriority={this.onChangePriority}
            onChangeCurrent={this.onChangeCurrent}
            inputOpen={this.state.inputOpen}
            openTmpInput={this.openTmpInput}
            closeTmpInput={this.closeTmpInput}
            closeTaskTmpInput={this.closeTaskTmpInput}
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
