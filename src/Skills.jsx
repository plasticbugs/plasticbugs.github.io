import React from 'react';
import Modal from './Modal.jsx';

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [
        {
          title: 'JavaScript ES6',
          codeSnippet: function(){
            return (<div>{`
const mergeSort = function(array) {
  if(array.length === 1) {
    return array;
  }
  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

const merge = function(left, right) {
  let solution = [];
  while(left.length && right.length) {
    if(left[0] > right[0]) {
      solution.push(right.shift());
    } else {
      solution.push(left.shift());
    }
  }

  while(left.length) {
    solution.push(left.shift());
  }

  while(right.length) {
    solution.push(right.shift());
  }
  return solution;
          }`}</div>)},
          showModal: false
        },
        {
          title: 'React',
          codeSnippet: function(){
            return (<div>{
`import React from 'react';
import javascriptTimeAgo from 'javascript-time-ago';

javascriptTimeAgo.locale(require('javascript-time-ago/locales/en'));
const timeAgo = new javascriptTimeAgo('en-US');

class PostView extends React.Component {
  constructor(props) {
    super(props);
  }

  renderImage(post) {
    let image;
    if(post.thumbnail && post.thumbnail.length > 7) {
      image = <img className="thumbnail" src={post.thumbnail} />;
    } else {
      image = <img className="thumbnail" src="./images/default.png" />;
    }
    return image;
  }

  render() {
    return (
      <li className="post">
        <div className="post-score">{this.props.post.score}</div>
        {this.renderImage(this.props.post)}
        <div className="post-info">
          <a href={this.props.post.url}>{this.props.post.title}</a>
          <div className="post-details">
            <p>
            \{\`Submitted \$\{timeAgo.format(new Date(this.props.post.created_utc * 1000 ))\} by \`\}
              <a href=\{\`https://www.reddit.com/user/\${this.props.post.author}\`\}> 
                {this.props.post.author}
              </a> to <a href=\{\`https://reddit.com/\$\{this.props.post.subreddit_name_prefixed\}\`\}>
                \{this.props.post.subreddit_name_prefixed\}
              </a>
            </p>
            <p>
              <a href=\{\`https://reddit.com\$\{this.props.post.permalink}\`\}>
                \{this.props.post.num_comments\} comments
              </a>
            </p>
          </div>
        </div>
      </li>
    );
  }
};

module.exports = PostView;`
            }</div>)
          },
          showModal: false

        },
        {
          title: 'Node.js',
          codeSnippet: function(){
            return (<div>{`
          `}</div>)},
          showModal: false

        },
        {
          title: 'React Router',
          codeSnippet: function(){
            return (<div>{`
          `}</div>)},
          showModal: false

        },
        {
          title: 'Redux',
          codeSnippet: function(){
            return (<div>{`
          `}</div>)},
          showModal: false

        },
        {
          title: 'Express.js',
          codeSnippet: function(){
            return (<div>{`
          `}</div>)},
          showModal: false

        },
        {
          title: 'MySQL/PostgreSQL',
          codeSnippet: function(){
            return (<div>{`
          `}</div>)},
          showModal: false

        },
        {
          title: 'MongoDB',
          codeSnippet: function(){
            return (<div>{`
          `}</div>)},
          showModal: false

        },
        {
          title: 'Redis',
          codeSnippet: function(){
            return (<div>{`
          `}</div>)},
          showModal: false

        },
        {
          title: 'Webpack',
          codeSnippet: function(){
            return (<div>{`
          const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
          const ExtractTextPlugin = require('extract-text-webpack-plugin');
          
          module.exports = {
            entry: [
              './src/Main.jsx',
              './src/styles/reset.css',
              './src/styles/style.css'
            ],
            plugins: [
              new UglifyJSPlugin({
                test: /\.js($|\?)/i,
                sourceMap: true
              }),
              new ExtractTextPlugin("./css/style.min.css")
            ],
            output: {
              filename: './js/bundle.js'
            },
            module: {
              rules: [
                {
                  test: /\.jsx?$/,
                  exclude: /(node_modules)/,
                  use: {
                    loader: 'babel-loader'
                  }
                },
                {
                  test: /\.css$/,
                  exclude: /(node_modules)/,
                  use: ExtractTextPlugin.extract({
                    use: 'css-loader?minimize'
                  })
                }
              ]
            }
          };
          
          `}</div>)},
          showModal: false

        },
        {
          title: 'Jest & Enzyme',
          codeSnippet: function(){
            return (<div>{
`import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MockAdapter from 'axios-mock-adapter';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import axios from 'axios';
import moxios from 'moxios';

const App = require('../components/App.jsx');
var mockuserinfo = require('../__mockData__/userinfo.js').user
var mockfollowerInfo = require ('../__mockData__/followers.js').followerInfo

configure({ adapter: new Adapter() });

describe('App', () => {
  beforeEach(function () {
    moxios.install()
  })
  afterEach(function () {
    moxios.uninstall()
  })
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  it('sets user to an object and gets and array of followers if a search is successful', done => {
    const component = shallow(<App />);
    let mock = new MockAdapter(axios);
    let data = {
      user: mockuserinfo,
      followers: mockfollowerInfo
    }
    mock.onGet('/api/user').reply(200, data)
    mock.onGet('/api/followers').reply(200, mockfollowerInfo)
    component.instance().handleSearch('holman', (userinfo, followers) => {
      expect(component.state().user.login).toEqual('plasticbugs');
      expect(component.state().followers.length).toEqual(30);
      done();
    });
  });
  it('sets the user state to "invalid" if search is unsuccessful', done => {
    const component = mount(<App />);
    let mock = new MockAdapter(axios);
    let data = {};
    mock.onGet('/api/user').reply(200, data);
    component.instance().handleSearch('bad lookup', (userinfo, followers) => { 
      expect(component.state().user).toEqual("invalid");
      expect(component.state().user.login).toBeUndefined();
      expect(component.state().followers).toBeNull();
      done();
    });
  });
  it('eager loads the next page of followers after a successful search', done => {
    const component = shallow(<App />);
    let mock = new MockAdapter(axios);
    let data = {
      user: mockuserinfo,
      followers: mockfollowerInfo
    }
    mock.onGet('/api/user').reply(200, data)
    mock.onGet('/api/followers').reply(200, mockfollowerInfo)
    component.instance().handleSearch('bad lookup', (userinfo, followers) => {
      expect(component.state().nextPage).toHaveLength(30);
      done();
    })
  });
});`
          }</div>)},
          showModal: false,
          snippetLink: 'https://github.com/plasticbugs/gh-followers/blob/master/app/__tests__/app.test.jsx'

        },
        {
          title: 'Mocha & Chai',
          codeSnippet: function(){
            return (<div>{`
          const dotenv = require('dotenv');
          dotenv.config();
          
          var chai = require('chai');
          var chaiHttp = require('chai-http');
          var server = require('../server/server-config');
          var should = chai.should();
          
          chai.use(chaiHttp);
          
          describe('The search API', function() {
            it('should return a status code of 200 on /api/search?q=querystring GET', function(done) {
              chai.request(server)
                .get('/api/search?q=querystring')
                .end(function(err, res){
                  res.should.have.status(200);
                  done();
                });
            });
            
            it('should return an array when searching /api/search?q=querystring GET', function(done) {
              chai.request(server)
                .get('/api/search?q=querystring')
                .end(function(err, res){
                  res.body.should.be.an('array');
                  done();
                });
            });
            
            it('should return a non-zero length array when searching for data contained in the db', function(done) {
              chai.request(server)
              .get('/api/search?q=new+york')
              .end(function(err, res){
                res.body.length.should.be.above(5);
                done();
              });
            });
            
            it('should handle searches (like néw+yørk) that have accents or non-standard characters', function(done) {
              chai.request(server)
              .get('/api/search?q=néw+yørk')
              .end(function(err, res){
                res.body.length.should.be.above(5);
                done();
              });
            });
            
            it('should handle searches for text in the db (like Beyoncé) that has accents or non-standard characters', function(done) {
              chai.request(server)
              .get('/api/search?q=beyonce')
              .end(function(err, res){
                res.body.length.should.be.above(5);
                done();
              });
            });
          });
          `}</div>)},
          showModal: false,
          snippetLink: 'https://github.com/plasticbugs/search-demo/blob/master/test/server-test.js'

        },
        {
          title: 'Ruby on Rails',
          codeSnippet: function(){
            return (<div>{`
            `}</div>)},
          showModal: false

        },
        {
          title: 'HTML5',
          codeSnippet: function(){
            return (<div>{`
            `}</div>)},
          showModal: false

        },
        {
          title: 'CSS3',
          codeSnippet: function(){
            return (<div>{`
            `}</div>)},
          showModal: false
        }
      ]
    }
  }

  toggleModal(index) {
    console.log(index);
    let skillsCopy = this.state.skills.map(skill=> {return Object.assign({}, skill )});
    skillsCopy[index].showModal = !skillsCopy[index].showModal
    this.setState({skills: skillsCopy});
  }

  render() {
    return (
      <div className="skills-container"><div className="skills" id="skills">
        <div className="title heading">{`{...code}`}</div>
        {/* <p>Click these topics to see code examples</p> */}
        <ul>
          {this.state.skills.map( ( skill, index ) => {
            let modal;
            if(skill.showModal) {
              modal = < Modal title={skill.title} codeSnippet={skill.codeSnippet()} />
            }
            return <li key={index} >{skill.title}{modal}</li>
          })}
        </ul>
      </div></div>
    )
  }
}

module.exports = Skills;