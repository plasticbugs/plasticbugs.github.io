import React from 'react';
import ReactDOM from 'react-dom';

class SomeCode extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var current = ReactDOM.findDOMNode(this);
    // hljs.highlightBlock(current);
    Prism.highlightElement(current);
  }

  render() {
    return <pre className={`language-${this.props.codeLang}`}><code>
    <div>{this.props.codeSnippet}</div></code></pre>
  }
}

module.exports = SomeCode;