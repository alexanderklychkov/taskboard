import React, { Component } from 'react';

export default class Column extends Component {
  

  render() {
    return(
      <div className="column">
        <div className="column-head">
          <h2 className="column-head__name">Колонка</h2>
          <a className="column-head__property" href="#top">...</a>  
        </div>
        <div className="column-tasks">
          asd
        </div>
        <div className="column-add-task">
          asd
        </div>
      </div>
    );
  }
}