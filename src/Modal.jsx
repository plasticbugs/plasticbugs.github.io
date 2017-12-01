import React from 'react';
import SomeCode from './SomeCode.jsx';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.ghLink)
    return <div className="modal">
      <div className="code-container">
      <div className="code-block" onClick={(e)=>{e.stopPropagation()}}>
      <h2 className="code-title">{`${this.props.title} Snippet`}<span className="gh-link"><a href={this.props.ghLink}>View this repo on Github</a></span></h2>
      
      < SomeCode codeSnippet={this.props.codeSnippet} codeLang={this.props.codeLang} /></div></div>
    </div>
  }
}

module.exports = Modal;