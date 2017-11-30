import React from 'react';
import ReactDOM from 'react-dom';

class SomeCode extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var current = ReactDOM.findDOMNode(this);
    hljs.highlightBlock(current);
  }

  render() {
    return <pre onClick={(e)=>{e.stopPropagation()}}><code><h2 className="nohighlight code-title">{`${this.props.title} Snippet`}</h2>
    <div className="code-block">{this.props.codeSnippet}</div></code></pre>
  }
}

module.exports = SomeCode;