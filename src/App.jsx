import React from 'react';
import Header from './Header.jsx';
import Portfolio from './Portfolio.jsx';
import Skills from './Skills.jsx';
import Footer from './Footer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        < Header />
        < Skills />
        < Portfolio />
        < Footer />
      </div>
    );
  }
}


module.exports = App;