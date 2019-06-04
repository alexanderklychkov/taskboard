import React, { Component } from 'react';

import Column from './Column';

export default class Columns extends Component {
  
  

  render() {

    const { addTaskItem } = this.props;

    const columns = this.props.columns.map((item) => {
      const { id, ...itemProps } = item;

      return (
        <div key={id} className="column">
          <Column 
            { ...itemProps }
            addTaskItem={addTaskItem}
            id={id}
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
