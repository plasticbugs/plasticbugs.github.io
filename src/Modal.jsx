import React from 'react';
import SomeCode from './SomeCode.jsx';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="modal">
      <div className="code-container">
      < SomeCode /></div>
    </div>
  }
}

module.exports = Modal;