import React from 'react';
import ModalVideoWrapper from './ModalVideoWrapper.jsx';


class Portfolio extends React.Component {
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
          showDetails: false
        },
        {
          title: 'Podcast Machine',
          description: 'Web app that converts YouTube channels into iTunes-friendly MP3 podcast feeds. Tech stack includes Node.JS, Express, React, Redis & MongoDB.',
          imageUrl: 'podcast-machine-screenshot@2x.png',
          bullets: [
            'Architected a modular and extensible back-end with Node.js, Express & MongoDB',
            'Integrated Amazon S3 storage API to support a large user-base and enable faster downloads',
            'Developed server-side caching of dynamically generated content to reduce server load',
            'Implemented asynchronous video to MP3 transcoding with worker queue'
          ],
          ghlink: 'https://github.com/plasticbugs/podcasty',
          videoDemo: 'wKugnd3eHaA',
          showDetails: false
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
          showDetails: false
        },
        {
          title: 'Gimpshop',
          description: 'A decade ago, I forked the GIMP project and rearranged it to work like Adobe Photoshop. Since its creation, Gimpshop has been downloaded hundreds of thousands of times.',
          imageUrl: 'gimpshop-screenshot@2x.png',
          bullets: [
            function(){
              return(
                <div>
                  Gimpshop was a popular open-source alternative to Adobe Photoshop for many years after its release. <i className="fa fa-smile-o fa-2" aria-hidden="true"></i>
                </div>
              )
            }(),
            function(){
              return(
                <div>
                  I no longer maintain Gimpshop. Unfortunately, some unscrupulous people began distributing Gimpshop installers with adware and spyware. <i className="fa fa-frown-o fa-2" aria-hidden="true"></i>
                </div>
              )
            }()
          ],
          weblink: 'https://en.wikipedia.org/wiki/GIMPshop',
          showDetails: false
        }
      ]
    }
    this.renderProject = this.renderProject.bind(this);
  }

  renderLink(link, icon) {
    let classname = `fa fa-${icon} fa-2`;
    let linktext = icon === 'github' ? 'repo' : 'site';

    return (
        <a href={link}>
          <i className={classname} aria-hidden={true}></i>{linktext}
        </a>
    );
  }

  renderYouTubeModal(ytlink) {
    console.log(ytlink)
    return (
      <ModalVideoWrapper videoId={ytlink} />
    )
  }

  renderBullets(project) {
    if(project.bullets) {
      return (
        <ul className = "bullets">
          {project.bullets.map((bullet, index) => {
            return (
              <li key={index}>{bullet}</li>
            );
          })}
        </ul>
      );
    } else {
      return null;
    }
  }

  renderDetails(bullets) {
    if(bullets) {
      return(
        <ul className="detail-list">
        {
          bullets.map((bullet, index) => {
            return <li key={index}>{bullet}</li>
          })
        }
        </ul>
      )
    }
  }

  renderProject(project, index) {
    let ghlink, weblink, vidlink, details;
    if(project.ghlink) {
      ghlink = this.renderLink(project.ghlink, 'github');
    }
    if(project.weblink) {
      weblink = this.renderLink(project.weblink, 'globe');
    }
    if(project.videoDemo) {
      vidlink = this.renderYouTubeModal(project.videoDemo);
    }
    if(project.showDetails) {
      details = this.renderDetails(project.bullets);
    }
    return(
      <li key={project.imageUrl}>
      <div className="image-box">
        {this.renderBullets(project)}
        <img 
          src={`./images/${project.imageUrl}`}
        />
      </div>
      <div className="info-box">
        <div className="title">
          <div className="external-links">{vidlink} {weblink} {ghlink}</div>
          {project.title}
        </div>
        <p className="description">
          {project.description}
          <a href="#" className="details" onClick={(e)=> {e.preventDefault(); this.toggleDetails(index)}}>More info...</a>
        </p>
        {details}
      </div>
    </li>
    );
  }

  toggleDetails(index) {
    let projectsCopy = this.state.projects.map(project => {
      return Object.assign({}, project);
    });
    projectsCopy[index].showDetails = !projectsCopy[index].showDetails;
    this.setState({projects: projectsCopy});
  }

  render() {
    return (
      <section className="portfolio">
            <script src="https://gist.github.com/plasticbugs/b6a6be67c4d73041517fd554c1cc5fc1.js"></script>

        <div className="title heading">Software Engineering Projects</div>
        <ul className="project-list">
          {this.state.projects.map( (project, index) => {
            return this.renderProject(project, index);
          })}
        </ul>
      </section>
    )
  }
}


module.exports = Portfolio;