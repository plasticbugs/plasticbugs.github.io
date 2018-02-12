import React from 'react';
import Header from './Header.jsx';
import Portfolio from './Portfolio.jsx';
import Skills from './Skills.jsx';
import Footer from './Footer.jsx';

const App = () =>
  (
    <div>
      <Header />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );

module.exports = App;
