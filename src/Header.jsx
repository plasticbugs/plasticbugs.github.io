import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='header'>
        <img className="headshot" src="./images/headshot.png" />
        <p className="about">
          Hi! I'm Scott Moschella, a software engineer based in San&nbsp;Francisco, CA.
        </p>
        <p className="about-2">
          I make things with JavaScript, React/Redux, Node.js, and other stuff.
        </p>
        <p className="profile-links">
          <a href="./images/smoschella_resume.pdf">
          <i className="fa fa-file-pdf-o fa-2" aria-hidden="true"></i>&nbsp;My&nbsp;Resume
          </a>
          <a href="https://www.linkedin.com/in/scott-moschella/">
          <i className="fa fa-linkedin" aria-hidden="true"></i>&nbsp;LinkedIn
          </a>
          <a href="https://www.github.com/plasticbugs">
          <i className="fa fa-github" aria-hidden="true"></i>&nbsp;Github
          </a>
        </p>
      </div>
    )
  }
}


module.exports = Header;