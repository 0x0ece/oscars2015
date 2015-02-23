/** In this file, we create a React component which incorporates components provided by material-ui */

var React = require('react')
  , Router = require('react-router')
  , Layout = require('./layout.jsx')
  , Main = require('./main.jsx')
  , Route = Router.Route
  , DefaultRoute = Router.DefaultRoute
  , NotFoundRoute = Router.NotFoundRoute
  ;


var routes = module.exports = (
    <Route name="root" handler={Layout} path="/" ignoreScrollBehavior>
      <DefaultRoute handler={Main} />      
      <Route name="index" handler={Main} path="index.html" />
      <Route name="insight" handler={Main} path="/:insight" />
    </Route>
);
