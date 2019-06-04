import React, { Component } from 'react';

import Header from './components/Header';
import Columns from './components/Columns';

export default class App extends Component {
  constructor() {
    super();

    this.columnId = 0;
    this.taskId = 0;

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

        return {
          columns: newArr
        }
      })
    };

    this.addTaskItem = (text, id) => {
      const newItem = this.createTaskItem(text);
      const column = {...this.state.columns[id]}
      column.tasks = [
        ...column.tasks,
        newItem
      ];

      this.setState((state) => {
        const idx = state.columns.findIndex((el) => el.id === id);

        const before = state.columns.slice(0, idx);
        const after = state.columns.slice(idx + 1);

        const newArray = [...before, column, ...after];

        localStorage.setItem('columns', JSON.stringify(newArray));

        return {
          columns: newArray
        }
      })

      
    }

    this.updateData = (value) => {
      let newValue = value;

      if (!newValue.length) {
        newValue = this.state.nameBoard;
      }

      this.setState({ nameBoard: newValue });
      localStorage.setItem('nameBoard', newValue);
    };

    this.closeTmpInput = (elem) => {
      this.setState({ inputOpen: false });
      return this.updateData(elem.value);
    };

    this.openTmpInput = (elem) => {
      this.setState({ inputOpen: true });
    }; 
  }

  createColumnItem(label) {
    return {
      id: this.columnId++,
      label,
      tasks: []
    }
  }

  createTaskItem(label) {
    return {
      id: this.taskId++,
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
        <Columns 
          columns={columns}
          addTaskItem={this.addTaskItem}
        />      
      </div>  
    );
  }
}



