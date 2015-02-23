(function () {
  var React = require('react'),
    Router = require('react-router'),
    Routes = require('./components/routes.jsx'),
    injectTapEventPlugin = require("react-tap-event-plugin");
    //Main = require('./components/main.jsx'); // Our custom react component

    //Needed for React Developer Tools
    window.React = React;

    //Needed for onTouchTap
    //Can go away when react 1.0 release
    //Check this repo:
    //https://github.com/zilverline/react-tap-event-plugin
    injectTapEventPlugin();

    // Render the main app react component into the document body. 
    // For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
    // React.render(<Main />, document.getElementById('universe'));
    Router.run(Routes, function(Handler, state) {
        if (typeof ga !== 'undefined') {
            if (ga1st == 0) ga1st = 1;
            else ga('send', 'pageview', state.path);
        }
        React.render(<Handler />, document.getElementById('universe'));
    });

})();