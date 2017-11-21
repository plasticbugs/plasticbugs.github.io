import React from 'react';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="portfolio">
        <div className="title section">Software Engineering Projects</div>
        <ul>
          <li>
            <img src="ynck-screenshot.png" />
            <p className="title">ynck.io - Tattoo Community Portal</p>
            <p>
            Full-stack web app built with Node.js, React, Redux & Postgres.
            Uses machine-learning to auto-tag and categorize uploaded tattoos by art style.
            </p>
          </li>
          <li>
            <img src="podcast-machine.png" />
            <p className="title">Podcast Machine</p>
            <p>
            Web app that converts YouTube channels into iTunes-friendly MP3 podcast feeds. 
            Tech stack includes Node.JS, Express, React, Redis & MongoDB.
            </p>
          </li>
          <li>
            <img src="gimpshop.png" />
            <p className="title">Gimpshop</p>
            <p>
            A long time ago, I forked the GIMP project and rearranged it to work like Adobe Photoshop. Since its creation, Gimpshop has been downloaded hundreds of thousands of times. 
            </p>
          </li>
        </ul>
      </section>
    )
  }
}


module.exports = Portfolio;