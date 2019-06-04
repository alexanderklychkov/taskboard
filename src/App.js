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
      columns: []
    };

    this.addItem = (text) => {
      const newItem = this.createColumnItem(text);

      this.setState((state) => {
        const newArr = [
          ...state.columns,
          newItem
        ];

        console.log(newArr);
        localStorage.setItem('columns', JSON.stringify(newArr));

        return {
          columns: newArr
        }
      })
    };

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
      tasks: [
        {
          id: 0,
          label: 'Задача 1'
        },
        {
          id: 1,
          label: 'Задача 2'
        }

      ]
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
          addItem={this.addItem}
        />
        <Columns 
          columns={columns}
        />      
      </div>  
    );
  }
}



