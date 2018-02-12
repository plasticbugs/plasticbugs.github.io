import React from 'react';

const Header = () =>
  (
    <header>
      <div className="header-bg">
      </div>
      <section>
        <img
          className="headshot"
          src="./images/headshot.png"
          alt="My headshot"
        />
        <p className="about">
          Hi! I&rsquo;m Scott Moschella, a software engineer based in San&nbsp;Francisco, CA.
        </p>
        <p className="about-2">
          I make things with JavaScript, React/Redux, Node.js, and other stuff.
        </p>
        <p className="profile-links">
          <a href="./images/smoschella_resume.pdf">
            <i className="fa fa-file-pdf-o fa-2" aria-hidden="true" />&nbsp;My&nbsp;Resume
          </a>
          <a href="https://www.linkedin.com/in/scott-moschella/">
            <i className="fa fa-linkedin" aria-hidden="true" />&nbsp;LinkedIn
          </a>
          <a href="https://www.github.com/plasticbugs">
            <i className="fa fa-github" aria-hidden="true" />&nbsp;Github
          </a>
        </p>
      </section>
    </header>
  );

module.exports = Header;
