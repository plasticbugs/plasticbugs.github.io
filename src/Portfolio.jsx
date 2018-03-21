import React from 'react';
import ModalVideoWrapper from './ModalVideoWrapper.jsx';

class Portfolio extends React.Component {
  static renderYouTubeModal(ytlink) {
    return <ModalVideoWrapper videoId={ytlink} />;
  }

  static uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function regex(c) {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  static renderBullets(project) {
    if (project.bullets) {
      return (
        <ul className="bullets">
          {project.bullets.map(bullet => <li key={Portfolio.uuidv4()}>{bullet}</li>)}
        </ul>
      );
    }
    return null;
  }

  static renderDetails(bullets) {
    if (bullets) {
      return (
        <ul className="detail-list">
          {
            bullets.map(bullet => <li key={bullet}>{bullet}</li>)
          }
        </ul>
      );
    }
    return null;
  }

  static renderLink(link, icon) {
    const classname = `fa fa-${icon} fa-2`;
    const linktext = icon === 'github' ? 'repo' : 'site';

    return (
      <a href={link}>
        <i className={classname} aria-hidden="true" />{linktext}
      </a>
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          title: 'ynck.io - Tattoo Community Portal',
          description: 'Full-stack web app built with Node.js, React, Redux & Postgres. Uses machine-learning to auto-tag and categorize uploaded tattoos by art style.',
          imageUrl: 'ynck-screenshot@2x.png',
          bullets: [
            'Refactored React-based site with Redux to simplify state management site-wide',
            'Architected a relational Postgres database with custom Bookshelf.js ORM queries to handle complex model relationships',
            'Trained a computer vision model with Microsoft’s Azure Computer Vision API to differentiate tattoo styles and auto-tag uploaded images by style',
            'Implemented infinite scrolling with React to make the home page more dynamic and browsable'],
          ghlink: 'https://github.com/plasticbugs/ynck.io',
          videoDemo: 'Ci2ZJvk3YzE',
          weblink: 'http://ynck.io',
          showDetails: false,
        },
        {
          title: 'Podcast Machine',
          description: 'Web app that converts YouTube channels into iTunes-friendly MP3 podcast feeds. Tech stack includes Node.JS, Express, React, Redis & MongoDB.',
          imageUrl: 'podcast-machine-screenshot@2x.png',
          bullets: [
            'Architected a modular and extensible back-end with Node.js, Express & MongoDB',
            'Configured a worker queue to conserve server bandwidth',
            'Leveraged WebSockets to communicate download progress in realtime to connected clients',
            'Developed server-side caching via Redis of dynamically generated content to reduce server load',
            'Implemented asynchronous video to MP3 transcoding with worker queue',
          ],
          ghlink: 'https://github.com/plasticbugs/podcasty',
          videoDemo: 'tjhvB1gAwQo',
          showDetails: false,
        },
        {
          title: '3DStxt',
          description: 'A friend-code sharing website for Nintendo 3DS owners. Users connect with other users through Streetpass. This application was built with Ruby on Rails and leverages the Amazon Product API for product images and referral links.',
          imageUrl: '3dstxt-screenshot@2x.png',
          bullets: [
            'Approx. 2000 active users',
            'Designed and architected using best practices with Ruby on Rails and jQuery',
            'Integrated the Amazon Product Advertising API to utilize product images and insert referral links',
            'Enabled custom URLs with Rails Router',
          ],
          weblink: 'http://3dstxt.com/scott',
          showDetails: false,
        },
        {
          title: 'Gimpshop',
          description: 'A decade ago, I forked the GIMP project and rearranged it to work like Adobe Photoshop. Since its creation, Gimpshop has been downloaded hundreds of thousands of times.',
          imageUrl: 'gimpshop-screenshot@2x.png',
          bullets: [
            (function renderDescription() {
              return (
                <div>
                  Gimpshop was a popular open-source alternative to Adobe Photoshop for many years after its release.
                  <i className="fa fa-smile-o fa-2" aria-hidden="true" />
                </div>
              );
            }()),
            (function renderDescription() {
              return (
                <div>
                  I no longer maintain Gimpshop. Unfortunately, some unscrupulous people began distributing Gimpshop installers with adware and spyware. <i className="fa fa-frown-o fa-2" aria-hidden="true" />
                </div>
              );
            }()),
          ],
          weblink: 'https://en.wikipedia.org/wiki/GIMPshop',
          showDetails: false,
        },
      ],
    };
    this.renderProject = this.renderProject.bind(this);
  }

  toggleDetails(index) {
    const projectsCopy = this.state.projects.map(project => Object.assign({}, project));
    projectsCopy[index].showDetails = !projectsCopy[index].showDetails;
    this.setState({ projects: projectsCopy });
  }

  renderProject(project, index) {
    let ghlink;
    let weblink;
    let vidlink;
    let details;
    if (project.ghlink) {
      ghlink = Portfolio.renderLink(project.ghlink, 'github');
    }
    if (project.weblink) {
      weblink = Portfolio.renderLink(project.weblink, 'globe');
    }
    if (project.videoDemo) {
      vidlink = Portfolio.renderYouTubeModal(project.videoDemo);
    }
    if (project.showDetails) {
      details = Portfolio.renderDetails(project.bullets);
    }
    return (
      <li key={project.imageUrl}>
        <div className="image-box">
          {Portfolio.renderBullets(project)}
          <img
            src={`./images/${project.imageUrl}`}
            alt={`${project.title} thumbnail`}
          />
        </div>
        <div className="info-box">
          <div className="title">
            <div className="external-links">{vidlink} {weblink} {ghlink}</div>
            {project.title}
          </div>
          <p className="description">
            {project.description}
            <button className="details" onClick={(e) => { e.preventDefault(); this.toggleDetails(index); }}>More info...</button>
          </p>
          {details}
        </div>
      </li>
    );
  }

  render() {
    return (
      <section className="portfolio">
        <section className="portfolio-bg">
        </section>
        <section className="portfolio-content">
          {/* <script src="https://gist.github.com/plasticbugs/b6a6be67c4d73041517fd554c1cc5fc1.js" /> */}
          <div className="title heading">Software Engineering Projects</div>
          <ul className="project-list">
            {this.state.projects.map((project, index) => this.renderProject(project, index))}
          </ul>
        </section> 
      </section>
    );
  }
}

module.exports = Portfolio;
