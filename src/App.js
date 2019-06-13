import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import Header from './components/Header';
import Columns from './components/Columns';

export default class App extends Component {
  constructor() {
    super();

    this.columnId = localStorage.getItem('columnId') !== null ? +JSON.parse(localStorage.getItem('columnId')) + 1 : 0;
    this.taskId = localStorage.getItem('taskId') !== null ? +JSON.parse(localStorage.getItem('taskId')) + 1 : 0;

    this.state = {
      nameBoard: localStorage.getItem('nameBoard') !== null ? localStorage.getItem('nameBoard') : 'TaskBoard',
      inputOpen: false,
      columns: localStorage.getItem('columns') !== null ? JSON.parse(localStorage.getItem('columns')) : []
    };

    this.addColumnItem = (text) => {
      const newItem = this.createColumnItem(text);

      this.setState((state) => {
        const newArr = [
          ...state.columns,
          newItem
        ];

        localStorage.setItem('columns', JSON.stringify(newArr));


        let columns = JSON.parse(localStorage.getItem('columns'));

        return {
          columns: columns
        }
      })
    };

    this.deleteColumnItem = (idColumn) => {
      this.setState((state) => {
        const idx = state.columns.findIndex((el) => el.idColumn === idColumn);

        const before = state.columns.slice(0, idx);
        const after = state.columns.slice(idx + 1);

        const newArray = [...before, ...after];

        localStorage.setItem('columns', JSON.stringify(newArray));

        return {
          columns: newArray
        }
      });
    }

    this.addTaskItem = (text, idColumn) => {
      const newItem = this.createTaskItem(text);
      const idx = this.state.columns.findIndex((el) => el.idColumn === idColumn);
      let column = {...this.state.columns[idx]};
      column.tasks = [
        ...column.tasks,
        newItem
      ];

      this.setState((state) => {
        const before = state.columns.slice(0, idx);
        const after = state.columns.slice(idx + 1);

        const newArray = [...before, column, ...after];

        localStorage.setItem('columns', JSON.stringify(newArray));

        return {
          columns: newArray
        }
      });
    };

    this.deleteTaskItem = (idTask, idColumn) => {
      const idx = this.state.columns.findIndex((el) => el.idColumn === idColumn);
      let column = {...this.state.columns[idx]};

      const idxTask = column.tasks.findIndex((el) => el.idTask === idTask);

      const before = column.tasks.slice(0, idxTask);
      const after = column.tasks.slice(idxTask + 1);

      const newArr = [...before, ...after];
      column.tasks = newArr;
      
      this.setState((state) => {
        const before = state.columns.slice(0, idx);
        const after = state.columns.slice(idx + 1);

        const newArray = [...before, column, ...after];

        localStorage.setItem('columns', JSON.stringify(newArray));

        return {
          columns: newArray
        }
      });
    };

    this._updateNameBoard = (value) => {
      let newValue = value;

      if (!newValue.length) {
        newValue = this.state.nameBoard;
      }

      this.setState({ nameBoard: newValue });
      localStorage.setItem('nameBoard', newValue);
    };

    this.closeTmpInput = (elem) => {
      this.setState({ inputOpen: false });
      return this._updateNameBoard(elem.value);
    };

    this.openTmpInput = (elem) => {
      this.setState({ inputOpen: true });
    };
    
    this.onDragEnd = (result) => {

    }
  }

  createColumnItem(label) {
    localStorage.setItem('columnId', JSON.stringify(this.columnId));
    return {
      idColumn: this.columnId++,
      label,
      tasks: []
    }
  }

  createTaskItem(label) {    
    localStorage.setItem('taskId', JSON.stringify(this.taskId));
    return {
      idTask: this.taskId++,
      label
    }
  }
  
  render() {
    const {nameBoard, inputOpen, columns} = this.state;

    return (
      <div className="App">
        <Header 
          openTmpInput={this.openTmpInput}
          nameBoard={nameBoard}
          inputOpen={inputOpen}
          closeTmpInput={this.closeTmpInput}
          addColumnItem={this.addColumnItem}
        />
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Columns 
            columns={columns}
            addTaskItem={this.addTaskItem}
            onDeletedColumn={this.deleteColumnItem}
            onDeletedTask={this.deleteTaskItem}
          />
        </DragDropContext>      
      </div>  
    );
  }
}



