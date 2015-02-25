/** In this file, we create a React component which incorporates components provided by material-ui */

var React = require('react'),
  Router = require('react-router'),
  mui = require('material-ui'),
  FloatingActionButton = require('./floating-action-button.jsx');

var MenuItem = React.createClass({
  mixins: [Router.Navigation, Router.State],

  _onClick: function(e) {
    this.transitionTo('/' + this.props.insight);
    e.stopPropagation();
    e.preventDefault();
    return false;
  },

  _isActive: function() {
    return this.isActive('/' + this.props.insight);
  },

  render: function() {
    var className = 'button-menu color-insight'+this.props.id;
    return (
        <menuitem>
          <FloatingActionButton active={this._isActive()} onTouchEnd={this._onClick} onMouseUp={this._onClick} linkButton={true} className={className}>
            <span className="mui-flat-button-label">{this.props.label}</span>
          </FloatingActionButton>
        </menuitem>
    );
  }

});

var Layout = module.exports = React.createClass({
  mixins: [Router.Navigation, Router.State],

  _onClickTwitter: function(e) {
    // var url = encodeURIComponent(window.location);
    var url = encodeURIComponent('http://ecesena.github.io/oscars2015/');
    var text = encodeURIComponent("View Twitter's reaction to the #Oscars. The best of the evening, insights and trending topics");
    window.open('https://twitter.com/intent/tweet?text='+text+'&url='+url);
    e.stopPropagation();
    e.preventDefault();
    return false;
  },

  _onClickFacebook: function(e) {
    // var url = encodeURIComponent(window.location);
    var url = encodeURIComponent('http://ecesena.github.io/oscars2015/');
    window.open('https://www.facebook.com/sharer/sharer.php?u='+url);
    e.stopPropagation();
    e.preventDefault();
    return false;
  },

  render: function() {

    return (
      <div className="page">

        <h1>Oscars 2015 on Twitter</h1>
        <h2>Insights and trending topics during the #Oscars</h2>
        <menu>
          <MenuItem id="0" insight="" label="Top" />
          <MenuItem id="1" insight="redcarpet" label="Red Carpet" />
          <MenuItem id="2" insight="actors" label="Actors" />
          <MenuItem id="3" insight="films" label="Films" />
          <MenuItem id="4" insight="noteworthy" label="Noteworthy" />
        </menu>

        <Router.RouteHandler />

        <div className="page-share">
          <h3>Share</h3>
            <FloatingActionButton onTouchEnd={this._onClickTwitter} onMouseUp={this._onClickTwitter} linkButton={true} className="button-share color-twitter">
              Twitter
            </FloatingActionButton>
            <FloatingActionButton onTouchEnd={this._onClickFacebook} onMouseUp={this._onClickFacebook} linkButton={true} className="button-share color-facebook">
              Facebook
            </FloatingActionButton>
        </div>

        <div className="page-more">
          <h3>Read more</h3>
          <p><a href="https://medium.com/@_megangroves/oscars-2015-on-twitter-identifying-trending-topics-fb0a92702352" target="_blank">Identifying Trending Topics</a></p>
          <p><a href="https://medium.com/@albluca/analyzing-the-oscars-with-google-cloud-dataflow-a71818cb5cb" target="_blank">Analyzing data with Google Cloud Dataflow</a></p>
          <p>Collecting data with Google Cloud Pub/Sub (published soon)</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>

      </div>
    );
  }

});
