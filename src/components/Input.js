import React, { Component } from 'react';

export default class Input extends Component {
  constructor() {
    super();

    this.textInput = React.createRef();
  }

  render() {
    const {valueInput, closeTmpInput} = this.props;

    return (
        <input className="input--tmp" type="text" defaultValue={valueInput} onBlur={() => closeTmpInput(this.props.idColumn, this.textInput.current.value)} ref={this.textInput} autoFocus={true}/>
    );
  }
}