import React, { Component } from 'react';

import Modal from './Modal';
import Button from './Button';
import Input from './Input';

export default class ColumnProperty extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
      inputOpen: false
    }

    this.openModal = () => {
      this.setState({ isOpen: true });
      this.props.isDrag(true);
    }

    this.handleCancel = () => {
      this.setState({ isOpen: false });
      this.props.isDrag(false);
    }

    
  }

  render() {
    const { label, idColumn, inputOpen, createDate, onDeletedColumn, openTmpInput, closeTmpInput } = this.props;

    return(
      <>
        <a className="column-head__property" href="#top" onClick={this.openModal}>...</a>
        <Modal
          title='Свойства колонки'
          isOpen={this.state.isOpen}
          onCancel={this.handleCancel}
        >
        <p>Название: <span className="name--change" onClick={() => openTmpInput()}>{inputOpen ? <Input idColumn={idColumn} valueInput={label} closeTmpInput={closeTmpInput}/> : label }</span></p>
        <p className="column-property--margin">Дата создания: <span className="name-change">{ createDate }</span></p> 
        <div className="center">
          <Button onClick={onDeletedColumn}>Удалить колонку</Button>
        </div>
        </Modal>
      </>
    );
  }
}