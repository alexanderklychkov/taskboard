import React, { Component } from 'react';

export default class InputTask extends Component {
  constructor() {
    super();

    this.textInput = React.createRef();
  }

  render() {
    const {valueInput, closeTaskTmpInput} = this.props;

    return (
        <input className="input--tmp" type="text" defaultValue={valueInput} onBlur={() => closeTaskTmpInput(this.props.idTask, this.props.idColumn, this.textInput.current.value)} ref={this.textInput} autoFocus={true}/>
    );
  }
}