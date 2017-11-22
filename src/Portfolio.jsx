import React from 'react';
import ModalVideo from 'react-modal-video';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      projects: [
        {
          title: 'ynck.io - Tattoo Community Portal',
          description: 'Full-stack web app built with Node.js, React, Redux & Postgres. Uses machine-learning to auto-tag and categorize uploaded tattoos by art style.',
          imageUrl: 'ynck-screenshot@2x.png',
          ghlink: 'https://github.com/plasticbugs/ynck.io',
          weblink: 'http://ynck.io'
        },
        {
          title: 'Podcast Machine',
          description: 'Web app that converts YouTube channels into iTunes-friendly MP3 podcast feeds. Tech stack includes Node.JS, Express, React, Redis & MongoDB.',
          imageUrl: 'podcast-machine-screenshot@2x.png',
          ghlink: 'https://github.com/plasticbugs/podcasty',
          videoDemo: 'WzPvl2aQLkc'
        },
        {
          title: '3dstxt',
          description: 'A friend-code sharing website for Nintendo 3DS owners. Users connect with other users through Streetpass. This application was built with Ruby on Rails and leverages the Amazon Product API for product images and referral links.',
          imageUrl: '3dstxt-screenshot@2x.png',
          weblink: 'http://3dstxt.com/scott'
        },
        {
          title: 'Gimpshop',
          description: 'A long time ago, I forked the GIMP project and rearranged it to work like Adobe Photoshop. Since its creation, Gimpshop has been downloaded hundreds of thousands of times. ',
          imageUrl: 'gimpshop-screenshot@2x.png',
          weblink: 'https://en.wikipedia.org/wiki/GIMPshop'
        }
      ]
    }
    this.openModal = this.openModal.bind(this);    
  }

  renderLink(link, icon) {
    let classname = `fa fa-${icon} fa-2`;
    let linktext = icon === 'github' ? icon : 'website';

    return (
        <a href={link}>
          <i className={classname} aria-hidden={true}></i>{linktext}
        </a>
    );
  }

  openModal(e) {
    e.preventDefault();
    this.setState({isOpen: true});
  }

  renderYouTubeModal(ytlink) {
    return (
      <div className="youtube-link">
        <ModalVideo videoId={ytlink} isOpen={this.state.isOpen} onClose={() => this.setState({isOpen: false})}/>
        <a href="#" onClick={this.openModal}><i className="fa fa-youtube-play fa-2" aria-hidden={true}></i>video demo</a>
      </div>
    )
  }

  renderProject(project) {
    let ghlink, weblink, vidlink;
    if(project.ghlink) {
      ghlink = this.renderLink(project.ghlink, 'github');
    }
    if(project.weblink) {
      weblink = this.renderLink(project.weblink, 'globe');
    }
    if(project.videoDemo) {
      vidlink = this.renderYouTubeModal(project.videoDemo);
    }
    return(
      <li key={project.imageUrl}>
      <div className="image-box">
        <img src={`./images/${project.imageUrl}`} width="500" height="304" />
        <div className="external-links">{ghlink} {weblink} {vidlink}</div>
        <p className="title">
          {project.title}
        </p>
      </div>
      <p className="description">
        {project.description}
      </p>
    </li>
    );
  }

  render() {
    return (
      <section className="portfolio">
        <div className="title section">Software Engineering Projects</div>
        <ul>
          {this.state.projects.map(project => {
            return this.renderProject(project);
          })}
        </ul>
      </section>
    )
  }
}


module.exports = Portfolio;