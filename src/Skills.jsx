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
            return (<div>{
`class TicTacToe {
  constructor() {
    this.gameBoard = [[null, null, null],[null, null, null],[null, null, null]];
    this.currentPlayer = 1;
    this.gameOver = false;
    this.prompt = require('prompt');
    console.log(\`Player 1 is Xs, Player 2 is Os\`);
    this.prompt.start();
  }

  printGameboard (board) {
    console.log(\`Tic - Tac - Toe!\`)
    console.log(\`|$\{board[0][0] || " "}|$\{board[0][1] || " "}|$\{board[0][2] || " "}|\`);
    console.log(\`-------\`);
    console.log(\`|$\{board[1][0] || " " }|$\{board[1][1] || " "}|$\{board[1][2] || " "}|\`);
    console.log(\`-------\`);
    console.log(\`|$\{board[2][0] || " " }|$\{board[2][1] || " "}|$\{board[2][2] || " "}|\`);
  }

  checkIfGameBoardFull() {
    let isFull = true;

    this.gameBoard.forEach(row => {
      if(row.includes(null)) {
        isFull = false;
      }
    })
    return isFull;
  }

  checkWinStateRowsCols (board) {
    let solutions = [[],[],[],[],[],[]];
    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
        solutions[i].push(board[i][j]);
        solutions[i + 3].push(board[j][i])
      }
    }
    // check diagonals
    solutions.push([board[0][0], board[1][1], board[2][2]]);
    solutions.push([board[0][2], board[1][1], board[2][0]]);

    let boardIsFull = this.checkIfGameBoardFull();

    solutions = solutions.map(rowCol => {
      return rowCol.join('');
    })
    for(let i = 0; i < solutions.length; i++) {
      if(solutions[i] === 'XXX') {
        this.declareWinner('X');
      } else if (solutions[i] === 'OOO') {
        this.declareWinner('O');
      } else if (boardIsFull) {
        this.declareWinner(null);
        break;  
      }
    }
  }

  declareWinner (piece) {
    if(piece === null) {
      console.log('This match was a stalemate.');   
      this.gameOver = true;      
    } else {
      console.log(\`$\{piece} wins!!! Congratulations Player $\{this.currentPlayer}!\`);
      this.gameOver = true;
    }
  }
  
  gameLoop () {
    let gamePiece = this.currentPlayer === 1 ? 'X' : 'O';

    console.log(\`Player $\{this.currentPlayer}, what row? (1-3)\`);
    this.prompt.get([{name: 'row'}], (err, result) => {
      let targetRow = result.row;
      console.log(\`you entered row $\{result.row} and your piece is $\{gamePiece}\`);
      console.log(\`Player $\{this.currentPlayer}, what column? (1-3)\`);
      this.prompt.get([{name: 'col'}], (err, result) => {
        if(this.gameBoard[targetRow - 1][result.col - 1]) {
          console.log(\`Sorry, you can't place a mark there!\`);
          this.printGameboard(this.gameBoard);          
          this.gameLoop();
        } else {
          this.gameBoard[targetRow - 1][result.col - 1] = gamePiece;
          console.log(\`you entered column $\{result.col} and your piece is $\{gamePiece}\`);
          this.printGameboard(this.gameBoard);
          this.checkWinStateRowsCols(this.gameBoard);
          if(this.gameOver) {
            return;
          } else {
            if( this.currentPlayer === 1) {
              this.currentPlayer = 2;
              this.gameLoop();
            } else {
              this.currentPlayer = 1
              this.gameLoop();
            }
          }
        }
      });
    })
  }

  startGame() {
    this.printGameboard(this.gameBoard);    
    this.gameLoop(this.currentPlayer);
  }
}

let game = new TicTacToe();
game.startGame();`
              }</div>)},
          showModal: false,
          codeLang: 'javascript',
          ghLink: 'https://github.com/plasticbugs/tictactoecli/blob/master/tictactoe.js'
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
            return (<div>{
`const axios = require('axios');

let username = process.env.GITHUB_USERNAME;
let password = process.env.GITHUB_TOKEN;

const getUserInfo = function(query, cb) {
  axios.get('https://api.github.com/users/' + query, {
    auth: {
      username: username,
      password: password
    }
  })
  .catch(error => {
    if(error) {
      cb(error);
    }
  })
  .then(response => {
    if(response && response.status === 200) {
      axios.get(response.data.followers_url, {
        auth: {
          username: username,
          password: password
        }
      })
      .then(followers => {
        cb(null, {user: response.data, followers: followers.data});
      })
    } else {
      const error = new Error('Bad response from API: ', response);
      cb(error);
    }
  })
}

const getNextPageOfFollowers = function(pageNum, followerURL, cb) {
  axios.get(followerURL, {
    params: {
      page: pageNum
    },
    auth: {
      username: username,
      password: password
    }
  })
  .catch(error => {
    cb(error);
  })
  .then(response => {
    cb(null, response.data);
  });
}

module.exports = {
  getUserInfo: getUserInfo,
  getNextPageOfFollowers: getNextPageOfFollowers
}`
          }</div>)},
          showModal: false,
          codeLang: 'javascript',
          ghLink: 'https://github.com/plasticbugs/gh-followers/blob/master/server/api/githubHelper.js'
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
          title: 'Knex',
          codeSnippet: function(){
            return (<div>{
`exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('shops', function (table) {
      table.increments('id').unsigned().primary();
      table.string('name', 100).nullable().unique();
      table.string('url', 1024).nullable();
      table.string('address1', 100).nullable();
      table.string('address2', 100).nullable();
      table.string('city', 100).nullable();
      table.string('state', 20).nullable();
      table.string('zip', 10).nullable();
      table.string('phone', 100).nullable();
      table.string('rating', 10).nullable();
      table.string('latitude', 100).nullable();
      table.string('longitude', 100).nullable();
      table.string('shop_image', 255).nullable();
      table.timestamps(true, true);
    }),
    knex.schema.createTableIfNotExists('images', function(table) {
      table.increments('id').unsigned().primary();
      table.string('url', 512).notNullable();
      table.integer('profile_id').references('profiles.id').onDelete('CASCADE');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.integer('favoriteCount').defaultTo(0);
      table.string('image_type', 100);
      table.index('image_type');
    }),
    knex.schema.createTableIfNotExists('tags', function(table) {
      table.increments('id').unsigned().primary();
      table.string('name', 50).nullable().unique();
    }),
    knex.schema.createTableIfNotExists('images_tags', function(table) {
      table.integer('image_id').references('images.id').onDelete('CASCADE');
      table.integer('tag_id').references('tags.id');
    }),
    knex.schema.createTableIfNotExists('favorites', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('image_id').references('images.id').onDelete('CASCADE');
      table.integer('profile_id').references('profiles.id').onDelete('CASCADE');
    }),
    knex.schema.createTableIfNotExists('ratings', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('shop_id').references('shops.id').onDelete('CASCADE');
      table.integer('profile_id').references('profiles.id').onDelete('CASCADE');
      table.integer('value').unsigned();
    }),
    // this adds the necessary shop_id column to the profile table
    knex.schema.table('profiles', function(table) {
      table.integer('shop_id').nullable();
      table.foreign('shop_id').references('shops.id');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return knex.schema.table('profiles', function(table) {
    table.dropColumn('shop_id');
  })
  .then(() => {
    return knex.schema.dropTableIfExists('ratings');
  })
  .then(() => {
    return knex.schema.dropTableIfExists('favorites');
  })
  .then(() => {
    return knex.schema.dropTableIfExists('images_tags');
  })
  .then(() => {
    return knex.schema.dropTableIfExists('tags');
  })
  .then(() => {
    return knex.schema.dropTableIfExists('images');
  })
  .then(() => {
    return knex.schema.dropTableIfExists('shops');
  });
};`
            }</div>)},
          showModal: false,
          codeLang: 'javascript',
          ghLink: 'https://github.com/plasticbugs/ynck.io/blob/master/db/migrations/20170525170907_starter_tables.js'
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