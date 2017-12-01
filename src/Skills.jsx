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
          showModal: false,
          codeLang: 'javascript'
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
          showModal: false,
          codeLang: 'jsx',
          ghLink: 'https://github.com/plasticbugs/reddit-feed-reader/blob/master/src/PostView.jsx'
        },
        {
          title: 'Node.js',
          codeSnippet: function(){
            return (<div>{`
          `}</div>)},
          showModal: false,
          codeLang: 'javascript'
        },
        {
          title: 'React Router',
          codeSnippet: function(){
            return (<div>{
`import React from 'react';
import { Route, Link, BrowserRouter, Switch, Redirect, withRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import { connect } from 'react-redux';
import { search } from './../../actions/actionSearch';
import { getAllShops } from './../../actions/actionShopInfo';

import Template from './Template';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Shop from './Shops/Shop';
import SearchResults from './SearchResults';
import ClaimShop from './Shops/ClaimShop';
import AllShops from './Shops/AllShops';
import Stats from './Stats';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchSubmitted: false,
      searchTerm: '',
      searchType: ''
    };
    this.submitSearch = this.submitSearch.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
    this.fetchAllShops = this.fetchAllShops.bind(this);

  }

  componentDidMount() {
    this.fetchAllShops('/api/allShops');
  }

  submitSearch(e, searchTerm, searchType) {
    e.preventDefault();
    this.props.search('/api/search', searchTerm, searchType, () => {
      this.setState({
        searchSubmitted: true,
        searchTerm: searchTerm,
        searchType: searchType
      });
      history.push(\`/search?q=$\{searchTerm\}\`);
    });
  }

  clearSearch() {
    this.setState({
      searchSubmitted: false
    });
  }

  fetchAllShops (url) {
    this.props.getAllShops(url);
  }

  render() {
    return (
      <div>      
        <BrowserRouter>
          <Switch>
            <Template submitSearch={this.submitSearch} >  
              <Route exact path="/" render={(props) => this.state.searchSubmitted ? (<Redirect to="/search"/>) : (<Home loggedInUser={loggedInUser} {...props} />)} />
              <Route path = "/user/:id" render={(props) => this.state.searchSubmitted ? (<Redirect to="/search"/>) : (<Profile {...props} />)} />
              <Route path = "/shop/:id" render={(props) => this.state.searchSubmitted ? (<Redirect to="/search"/>) : (<Shop viewedUser={props.match.params.id }{...props} />)} />
              <Route path = "/claimshop" render={(props) => this.state.searchSubmitted ? (<Redirect to="/search"/>) : (<ClaimShop {...props} />)} />
              <Route path = "/stats" render={(props) => this.state.searchSubmitted ? (<Redirect to="/search"/>) : (<Stats {...props} />)} />
              <Route path = "/search" render={(props) => (<SearchResults searchType={this.state.searchType} searchTerm={this.state.searchTerm} searchIsLoading={this.props.searchIsLoading} searchResults={this.props.searchResults} clearSearch={this.clearSearch} {...props} />)} />
              <Route path = "/allShops" render={(props) => this.state.searchSubmitted ? (<Redirect to="/search"/>) : (<AllShops loggedInUser={loggedInUser} {...this.props} />)} />
            </Template>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    searchIsLoading: state.searchIsLoading,
    searchResults: state.searchResults,
    allShops: state.allShops
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    search: (url, searchTerm, searchType, callback) => dispatch(search(url, searchTerm, searchType, callback)),
    getAllShops: (url) => dispatch(getAllShops(url))
  };
};

const history = createHistory();

export default connect(mapStateToProps, mapDispatchToProps)(Main);`
          }</div>)},
          showModal: false,
          codeLang: 'jsx',
          ghLink: 'https://github.com/plasticbugs/ynck.io/blob/master/client/src/components/Main.js'
        },
        {
          title: 'Redux',
          codeSnippet: function(){
            return (<div>{
`export const userDataIsLoading = (state = false, action) => {
  switch (action.type) {
  case 'USER_DATA_IS_LOADING':
    return action.userDataIsLoading;
  default:
    return state;
  }
};

export const userData = (state = [], action) => {
  switch (action.type) {
  case 'FETCH_USER_DATA_SUCCESS':
    return action.userData;
  case 'UPDATE_FOLLOWING_SUCCESS':
    return Object.assign({}, state, {
      isBeingFollowed: !state.isBeingFollowed
    });
  case 'UPDATE_USER_DATA_SUCCESS':
    return Object.assign({}, state, {
      userProfile: Object.assign({}, state.userProfile, {
        first: action.first,
        last: action.last,
        profile_description: action.profile_description
      })
    });
  case 'UPDATE_USER_PHOTO_SUCCESS':
    if (action.photoData.image_type === 'tattoo') {
      let newArray = [];
      if (state.tattoo) {
        newArray = state.tattoo.slice();
      }
      newArray.unshift(action.photoData);
      return Object.assign({}, state, {
        tattoo: newArray
      });
    } else if (action.photoData.image_type === 'design') {
      let newArray = [];
      if (state.design) {
        newArray = state.design.slice();
      }
      newArray.unshift(action.photoData);
      return Object.assign({}, state, {
        design: newArray
      });
    } else if (actton.photoData.image_type === 'inspiration') {
      let newArray = state.inspiration.slice();
      newArray.unshift(action.photoData);
      return Object.assign({}, state, {
        inspiration: newArray
      });
    }
  case 'PROFILE_FAVORITES_SUCCESS' :
    let i = action.i;
    if (action.typeOfImage === 'tattoo') {
      return Object.assign({}, state, { 
        tattoo: [
          ...state.tattoo.slice(0, i), 
          Object.assign({}, state.tattoo[i], { 
            isFavorited: !state.tattoo[i].isFavorited
          }), 
          ...state.tattoo.slice(i + 1)]
      });
    } else if (action.typeOfImage === 'design') {
      return Object.assign({}, state, {
        design: [
          ...state.design.slice(0, i), 
          Object.assign({}, state.design[i], {
            isFavorited: !state.design[i].isFavorited
          }), 
          ...state.design.slice(i + 1)]
      });
    }
  default:
    return state;
  }
};`
          }</div>)},
          showModal: false,
          codeLang: 'javascript',
          ghLink: 'https://github.com/plasticbugs/ynck.io/blob/master/client/reducers/reducerUserInfo.js'
        },
        {
          title: 'Express.js',
          codeSnippet: function(){
            return (<div>{
`const express = require('express');
const router = express.Router();
const path = require('path');
const passport = require('../../middleware/passport');
const ChannelsController = require('../controllers/channels');
const MessagesController = require('../controllers/messages');


router.route('/')
  .get((req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  })

router.get('/auth/google', passport.authenticate('google', {
  scope: ['https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/userinfo.profile']
}));

router.get('/oauthcallback', passport.authenticate('google', {
  failureRedirect: '/' }),
  (req, res) => {
    res.cookie('loggedIn', true, {path: '/'});
    req.session.user = req.user;
    res.redirect('/');
  }
);

router.route('/api/stream-search')
  .post(ChannelsController.findChannel);

router.get('/logout', (req,res) => {
  res.clearCookie('loggedIn');
  req.logout();
  res.redirect('/');
});

router.get('/api/getcurrentuser', (req,res) => {
  res.send(req.user);
});

router.route('/api/user-messages')
  .get(MessagesController.showMessagesForUser);

router.route('/api/save-message')
  .post(MessagesController.saveMessage);

module.exports = router;`
          }</div>)},
          showModal: false,
          codeLang: 'javascript',
          ghLink: 'https://github.com/plasticbugs/twitch-streaming-demo/blob/master/server/routes/main.js'
        },
        {
          title: 'PostgreSQL & Bookshelf ORM',
          codeSnippet: function(){
            return (<div>{
`const bookshelf = require('../');

const Profile = bookshelf.Model.extend({
  tableName: 'profiles',
  auths: function() {
    return this.hasMany('Auth');
  },
  shop: function() {
    return this.belongsTo('Shop');
  },
  images: function() {
    return this.hasMany('Image');
  },
  ratings: function() {
    return this.belongsToMany('Shop').through('Rating');
  },
  favorites: function() {
    return this.belongsToMany('Image').through('Favorite');
  },
  following: function() {
    return this.belongsToMany('Profile', 'profiles_profiles', 'user_id', 'follower_id');
  },
  followers: function() {
    return this.belongsToMany('Profile', 'profiles_profiles', 'follower_id', 'user_id' );
  }
});

module.exports = bookshelf.model('Profile', Profile);`
          }</div>)},
          showModal: false,
          codeLang: 'javascript',
          ghLink: 'https://github.com/plasticbugs/ynck.io/blob/master/db/models/profiles.js'
        },
        {
          title: 'MongoDB',
          codeSnippet: function(){
            return (<div>{
`var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const moment = require('moment');

var tweetSchema = new Schema({
  created_at: Date,
  text: String,
  user_id: String,
  searchableText: String
});

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;

module.exports.search = (query, callback) => {
  Tweet.find( { $text: { $search: query, $diacriticSensitive: false } }, {score : { $meta: 'textScore' } } )
  .sort( { score: { $meta: 'textScore' } } )
  .lean()
  .exec( ( err, result ) => {
    if(err) {
      callback(err);
    } else {
      let formattedResult = result.map( tweet => {
        let formatted_date = moment(tweet.created_at, 'YYYYMMDD').fromNow();
        let formattedTweet = {
          user_id: tweet.user_id,
          created_at: formatted_date,
          text: tweet.text
        }
        return formattedTweet;
      });
      callback(null, formattedResult);
    }
  });
}`
          }</div>)},
          showModal: false,
          codeLang: 'javascript',
          ghLink: 'https://github.com/plasticbugs/search-demo/blob/master/server/models/tweet.js'
        },
        {
          title: 'Redis',
          codeSnippet: function(){
            return (<div>{
`var express = require('express');
var app = express();
var builder = require('xmlbuilder');
var rss = require('./app/utils/feedGen.js');
var redis = require('redis');
var client = redis.createClient();
var cache = require('express-redis-cache')({expire: 3600});

app.get('/feed',cache.route(), function(request, response) {
  var uploads = request.query.uploads;
  var channel = request.query.channel;
  console.log('channel & uploads', uploads, channel);
  response.contentType('text/xml')
  rss.generateRSS(channel,uploads, function(rssData) {
    console.log("doing fresh")
    response.send(rssData);
  });
});`
          }</div>)},
          showModal: false,
          codeLang: 'javascript',
          ghLink: 'https://github.com/plasticbugs/podcasty/blob/master/server-config.js'
        },
        {
          title: 'Webpack',
          codeSnippet: function(){
            return (<div>{
`const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
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
};`
          
          }</div>)},
          showModal: false,
          codeLang: 'javascript',
          ghLink: 'https://github.com/plasticbugs/reddit-feed-reader/blob/master/webpack.config.js'
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
          ghLink: 'https://github.com/plasticbugs/gh-followers/blob/master/app/__tests__/app.test.jsx',
          codeLang: 'javascript'

        },
        {
          title: 'Mocha & Chai',
          codeSnippet: function(){
            return (<div>{
`const dotenv = require('dotenv');
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
});`
          }</div>)},
          showModal: false,
          ghLink: 'https://github.com/plasticbugs/search-demo/blob/master/test/server-test.js',
          codeLang: 'javascript'
        },
        {
          title: 'Ruby on Rails',
          codeSnippet: function(){
            return (<div>{`
            `}</div>)},
          showModal: false,
          codeLang: 'ruby'
        },
        {
          title: 'HTML5',
          codeSnippet: function(){
            return (<div>{`
            `}</div>)},
          showModal: false,
          codeLang: 'markup'
        },
        {
          title: 'CSS3',
          codeSnippet: function(){
            return (<div>{`
            `}</div>)},
          showModal: false,
          codeLang: 'css'
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
        <p>Click these topics to see code examples</p>
        <ul>
          {this.state.skills.map( ( skill, index ) => {
            let modal;
            if(skill.showModal) {
              modal = < Modal title={skill.title} ghLink={skill.ghLink} codeSnippet={skill.codeSnippet()} codeLang={skill.codeLang} />
            }
            return <li key={index} onClick={()=>{this.toggleModal(index)}}>{skill.title}{modal}</li>
          })}
        </ul>
      </div></div>
    )
  }
}

module.exports = Skills;