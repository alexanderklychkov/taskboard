import React, { Component } from 'react';

import Header from './components/Header';
import Columns from './components/Columns';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      nameBoard: localStorage.getItem('nameBoard') !== null ? localStorage.getItem('nameBoard') : 'TaskBoard',
      inputOpen: false,
      columns: [{
        id: 0,
        label: 'Колонка 1',
        tasks: [{
          id: 0,
          label: 'Выпить кофе'
        },
        {
          id: 1,
          label: 'Задача 2'
        }]
      },
      {
        id: 1,
        label: 'Колонка 2',
        tasks: [{
          id: 0,
          label: 'Наконец-то сделать это приложение!!'  
        }]
      }]
    }

    this.onSubmit = (e) => {
      e.preventDefault();
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
  
  render() {
    const {nameBoard, inputOpen, columns} = this.state;

    return (
      <div className="App">
        <Header 
          openTmpInput={this.openTmpInput}
          nameBoard={nameBoard}
          inputOpen={inputOpen}
          closeTmpInput={this.closeTmpInput}
          onSubmit={this.onSubmit}
        />
        <Columns 
          columns={columns}
        />      
      </div>  
    );
  }
}



