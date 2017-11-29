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
    return <pre><code><h2 className="nohighlight code-title">Some Title</h2>
    {`
    const mergeSort = function(array) {
      if(array.length === 1) {
        return array;
      }
      let middle = Math.floor(array.length / 2);
      let left = array.slice(0, middle);
      let right = array.slice(middle);
    
      return merge(mergeSort(left), mergeSort(right));
    }
    
    const merge = function(left, right) {
      let solution = [];
      while(left.length && right.length) {
        if(left[0] > right[0]) {
          solution.push(right.shift());
        } else {
          solution.push(left.shift());
        }
      }
    
      while(left.length) {
        solution.push(left.shift());
      }
    
      while(right.length) {
        solution.push(right.shift());
      }
      return solution;
    }`}</code></pre>
  }
}

module.exports = SomeCode;