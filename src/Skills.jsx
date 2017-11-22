import React from 'react';

class Skills extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="skills" id="skills">
        <div className="title heading">Skills</div>
        <section><h2>Front End</h2>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>jQuery</li>
          <li>React Router</li>
          <li>Jest & Enzyme</li>
        </ul></section>
        <section><h2>Back End</h2>
        <ul>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MySQL/PostgreSQL</li>
          <li>knex</li>
          <li>Bookshelf.js</li>
          <li>MongoDB</li>
          <li>Redis</li>
          <li>AWS</li>
          <li>Webpack</li>
          <li>Passport</li>
          <li>Mocha & Chai</li>
          <li>Ruby on Rails</li>
        </ul></section>
        <section><h2>Languages & Formats</h2>
        <ul>
          <li>JavaScript ES6</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Ruby</li>
          <li>Python</li>
          <li>Objective-C</li>
        </ul></section>
        <section><h2>Tools and IDEs</h2>
        <ul>
          <li>Git</li>
          <li>Travis CI</li>
          <li>VS Code</li>
          <li>Xcode</li>
          <li>iOS Frameworks</li>
          <li>VS Code</li>
        </ul></section>
        <section><h2>Design</h2>
        <ul>
          <li>Adobe Photoshop CC</li>
          <li>Adobe Illustrator CC</li>
          <li>Adobe Premiere CC</li>
          <li>Adobe After Effects CC</li>
          <li>Sketch</li>
        </ul></section>
      </div>
    )
  }
}

module.exports = Skills;