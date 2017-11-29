import React from 'react';
import Modal from './Modal.jsx';

class Skills extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleModal() {

  }

  render() {
    // if(this.state.showModal) {

    // }
    return (
      <div className="skills" id="skills">
        <div className="title heading">{`{...code}`}</div>
        <ul>
          <li onClick={this.toggleModal}>JavaScript ES6</li>
          <li>React</li>
          <li>Node.js</li>
          <li>React Router</li>
          <li>Redux</li>
          <li>Express.js</li>
          <li>MySQL/PostgreSQL</li>
          <li>MongoDB</li>
          <li>Redis</li>
          <li>Webpack</li>
          <li>Jest & Enzyme</li>
          <li>Mocha & Chai</li>
          <li>Ruby on Rails</li>
          <li>HTML5</li>
          <li>CSS3</li>
        </ul>
        {/* < Modal /> */}
      </div>
    )
  }
}

module.exports = Skills;