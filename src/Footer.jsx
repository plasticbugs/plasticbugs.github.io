import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='footer'>
        <p>
          <img className="react-logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" width="15" height="15"/>
        </p>
        <p>
          This site was built with <a href="https://reactjs.org/">React</a>.
        </p>
        <p>
          Icons are from <a href="http://fontawesome.io/">Font Awesome</a>.
        </p>
        <p>
          Code snippets use the syntax highlighting from <a href="http://prismjs.com/">Prism.js</a>.
        </p>
        <p>
          The typefaces used on this website are <span className="operator">Operator Mono</span> and <span className="whitney">Whitney</span>. Both are from <a href="http://typography.com/">Hoefler & Co.</a>.
        </p>
      </div>
    )
  }
}


module.exports = Footer;