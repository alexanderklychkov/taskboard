import React, { Component } from 'react';

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
        console.log(columns);

        return {
          columns: columns
        }
      })
    };

    this.deleteColumnItem = (id) => {
      this.setState((state) => {
        const idx = state.columns.findIndex((el) => el.id === id);

        const before = state.columns.slice(0, idx);
        const after = state.columns.slice(idx + 1);

        const newArray = [...before, ...after];

        localStorage.setItem('columns', JSON.stringify(newArray));

        let columns = JSON.parse(localStorage.getItem('columns'));

        return {
          columns: columns
        }
      });
    }

    this.addTaskItem = (text, id) => {
      const newItem = this.createTaskItem(text);
      const idx = this.state.columns.findIndex((el) => el.id === id);
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

    this.deleteTaskItem = (id) => {
      console.log('Удалить ' + id);
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
  }

  createColumnItem(label) {
    localStorage.setItem('columnId', JSON.stringify(this.columnId));
    return {
      id: this.columnId++,
      label,
      tasks: []
    }
  }

  createTaskItem(label) {    
    localStorage.setItem('taskId', JSON.stringify(this.taskId));
    return {
      id: this.taskId++,
      label
    }
  }
  
  render() {
    const {nameBoard, inputOpen, columns, columnId} = this.state;

    return (
      <div className="App">
        <Header 
          openTmpInput={this.openTmpInput}
          nameBoard={nameBoard}
          inputOpen={inputOpen}
          closeTmpInput={this.closeTmpInput}
          addColumnItem={this.addColumnItem}
        />
        <Columns 
          columns={columns}
          addTaskItem={this.addTaskItem}
          onDeletedColumn={this.deleteColumnItem}
          onDeletedTask={this.deleteTaskItem}
          columnId={columnId}
        />      
      </div>  
    );
  }
}



