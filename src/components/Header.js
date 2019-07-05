import React, { Component } from 'react';

import Button from './Button';
import Modal from './Modal';
import PropertyBoard from './PropertyBoard';
import AddColumn from './AddColumn';
import SearchTask from './SearchTask';

export default class Header extends Component {
  constructor() {
    super();
    
    this.state = {
      isOpen: false
    };

    this.openModal = () => {
      this.setState({isOpen: true});
    };

    this.handleCancel = () => {
      this.setState({isOpen: false});
    };

  }

  render() {
    const { isOpen } = this.state;
    const { openTmpInput, nameBoard, inputOpen, closeTmpInput, addColumnItem, tasks } = this.props;

    return(
      <header className="header">
        <div className="logo">
          <p className="logo__name">{nameBoard}</p>
        </div>
        <div className="add-column">
          <AddColumn addColumnItem={addColumnItem}/>
        </div>
        <div className="property-board">
          <Button className="margin-right" onClick={this.openModal}>Свойства</Button>
        </div>
        {/* <div className="search-task">
          <SearchTask tasks={tasks}/>
        </div> */}

        <Modal
          title="Свойства доски"
          isOpen={isOpen}
          onCancel={this.handleCancel}
        >
          <PropertyBoard 
            nameBoard={nameBoard}
            openTmpInput={openTmpInput}
            inputOpen={inputOpen}
            closeTmpInput={closeTmpInput}
          />
        </Modal>

      </header>
    );
  }
}