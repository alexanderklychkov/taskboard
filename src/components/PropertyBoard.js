import React, { Component } from 'react';
import TmpInput from './TmpInput';

export default class PropertyBoard extends Component {

  render() {
    const { nameBoard, openTmpInput, inputOpen, closeTmpInput } = this.props;

    return(
      <>
        <p>Название: <span className="name--change" onClick={() => openTmpInput()}>{inputOpen ? <TmpInput valueInput={nameBoard} closeTmpInput={closeTmpInput}/> : nameBoard}</span></p>
      </>
    );
  }
} 