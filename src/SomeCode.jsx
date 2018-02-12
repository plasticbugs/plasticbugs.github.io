import React from 'react';
import PropTypes from 'prop-types';

class SomeCode extends React.Component {
  componentDidMount() {
    Prism.highlightElement(this.node);
  }

  render() {
    return (
      <pre ref={(node) => { this.node = node; return node; }} className={`language-${this.props.codeLang}`}>
        <code>
          <div>{this.props.codeSnippet}</div>
        </code>
      </pre>
    );
  }
}

SomeCode.propTypes = {
  codeLang: PropTypes.string.isRequired,
  codeSnippet: PropTypes.element.isRequired,
};

module.exports = SomeCode;
