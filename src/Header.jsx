import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='header'>
        <img className='headshot' src='./images/headshot.png' />
        <p>
          Hi! I'm Scott Moschella, a software engineer based in San&nbsp;Francisco,&nbsp;CA.
        </p>
        <p>
          I make things with JavaScript, React/Redux, Node.js, <a href="#skills">and other stuff</a>.
        </p>
        <p>
          <a href="./images/smoschella_resume.pdf"><i class="fa fa-file-pdf-o fa-2" aria-hidden="true"></i>&nbsp;My Resume</a><a href="https://www.linkedin.com/in/scott-moschella/"><i class="fa fa-linkedin" aria-hidden="true"></i>&nbsp;LinkedIn</a>
        </p>
      </div>
    )
  }
}


module.exports = Header;