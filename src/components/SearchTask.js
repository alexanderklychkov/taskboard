import React, { Component } from 'react';

import Task from './Task';

export default class SearchTask extends Component {
  constructor() {
    super();

    this.state = {
      isOpenPanel: false,
      tasks: [],
      term: ''
    }

    this.onSearchChange = (e) => {
      let tasks = this.getTasks();

      const term = e.target.value;
      this.setState({
        isOpenPanel: term.length ? true : false,
        tasks,
        term
      });
    }


    this.onSearchBlur = (e) => {
      // this.setState({isOpenPanel: false})
    }
  }

  getTasks() {
    let columns = this.props.tasks;
    let tasks = [];

    for (let i = 0; i < columns.length; i++) {
      let column = columns[i];
      for (let j = 0; j < column.tasks.length; j++) {
        let task = column.tasks[j];
        tasks.push(task);
      }
    }

    return tasks;
  }

  search(items, term) {
    if (term.length === 0) {
      return [];
    }

    return items.filter((item) => {
      return item.label
        .toLowerCase()
        .indexOf(term.toLowerCase()) > -1;
    });
  }

  render() {
    const { isOpenPanel, tasks, term } = this.state;

    const visibleItems = this.search(tasks, term);

    return(
      <>
        <input className="input input--margin" type="text" value={this.state.term} onChange={this.onSearchChange} onBlur={this.onSearchBlur} placeholder="Поиск задачи..."/>

        { isOpenPanel &&
          <div className="searchPanel">
              {visibleItems.map((item) => {
                const { idTask, ...itemTasks } = item;

                return(
                  <div key={idTask} className="column-tasks__item" >
                    <Task 
                      {...itemTasks}
                    />
                  </div>
                );
              })}
          </div>
        }
      </>
    );
  }
}