import React, { Component } from 'react';

import Button from './Button';
import Modal from './Modal';
import PropertyBoard from './PropertyBoard';
import AddColumn from './AddColumn';

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
      this.setState({isOpen: false})
    };

  }

  render() {
    const {isOpen} = this.state;
    const {openTmpInput, nameBoard, inputOpen, closeTmpInput, onSubmit} = this.props;

    return(
      <header className="header">
        <div className="logo">
          <p className="logo__name">{nameBoard}</p>
        </div>
        <div className="add-column">
          <AddColumn onSubmit={onSubmit}/>
        </div>
        <div className="property-board">
          <Button onClick={this.openModal}>Свойства</Button>
        </div>
        <div className="search-task">
          adsdasds
        </div>

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