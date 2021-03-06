import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import Elap from './elapsed/Elapsed';
import Navigator from './navbar/Navbar';
import './styles/index.css';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
	
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Navigator}>
		<IndexRoute component={App}/>
		<Route path="/repos" component={App}/>
		<Route path="/about" component={Elap}/>
	</Route>
  </Router>
), document.getElementById('root'));


