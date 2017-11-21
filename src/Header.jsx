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
          I love making things! I'm usually making stuff with <span className="highlight">React/Redux</span>&nbsp;and&nbsp;<span className="highlight">Node.js</span>.
        </p>
      </div>
    )
  }
}


module.exports = Header;