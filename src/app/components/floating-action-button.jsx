var React = require('react');
var mui = require('material-ui');
var Classable = mui.mixinhClassable;
var EnhancedButton = mui.EnhancedButton;
var FontIcon = mui.FontIcon;
var Paper = mui.Paper;

var RaisedButton = React.createClass({

  mixins: [Classable],

  propTypes: {
    className: React.PropTypes.string,
    iconClassName: React.PropTypes.string,
    mini: React.PropTypes.bool,
    onMouseDown: React.PropTypes.func,
    onMouseUp: React.PropTypes.func,
    onMouseOut: React.PropTypes.func,
    onTouchEnd: React.PropTypes.func,
    onTouchStart: React.PropTypes.func,
    active: React.PropTypes.bool,
    secondary: React.PropTypes.bool
  },

  getInitialState: function() {
    var zDepth = this.props.disabled ? 0 : 2;
    return {
      zDepth: zDepth,
      initialZDepth: zDepth
    };
  },

  componentDidMount: function() {
    if (this.props.iconClassName && this.props.children) {
      var warning = 'You have set both an iconClassName and a child icon. ' +
                    'It is recommended you use only one method when adding ' +
                    'icons to FloatingActionButtons.';
      console.warn(warning);
    }
  },

  render: function() {
    var {
      icon,
      mini,
      secondary,
      ...other } = this.props;
    var classes = 'mui-floating-action-button ';
    if (this.props.className)
    	classes += this.props.className;
    // this.getClasses('mui-floating-action-button', {
    //   'mui-is-mini': mini,
    //   'mui-is-secondary': secondary
    // });

    var icon;
    if (this.props.iconClassName) icon = <FontIcon className={"mui-floating-action-button-icon " + this.props.iconClassName} />

    return (
      <Paper
        className={classes}
        innerClassName="mui-floating-action-button-inner"
        zDepth={this.props.active ? 4 : this.state.zDepth}
        circle={true}>

        <EnhancedButton {...other}
          className="mui-floating-action-button-container" 
          onMouseDown={this._handleMouseDown}
          onMouseUp={this._handleMouseUp}
          onMouseOut={this._handleMouseOut}
          onTouchStart={this._handleTouchStart}
          onTouchEnd={this._handleTouchEnd}>

          {icon}
          {this.props.children}

        </EnhancedButton>
        
      </Paper>
    );
  },

  _handleMouseDown: function(e) {
    //only listen to left clicks
    if (e.button === 0) {
      if (!this.props.active) this.setState({ zDepth: this.state.initialZDepth + 1 });
    }
    if (this.props.onMouseDown) this.props.onMouseDown(e);
  },

  _handleMouseUp: function(e) {
    this.setState({ zDepth: this.state.initialZDepth });
    if (this.props.onMouseUp) this.props.onMouseUp(e);
  },

  _handleMouseOut: function(e) {
    this.setState({ zDepth: this.state.initialZDepth });
    if (this.props.onMouseOut) this.props.onMouseOut(e);
  },

  _handleTouchStart: function(e) {
    if (!this.props.active) this.setState({ zDepth: this.state.initialZDepth + 1 });
    if (this.props.onTouchStart) this.props.onTouchStart(e);
  },

  _handleTouchEnd: function(e) {
    this.setState({ zDepth: this.state.initialZDepth });
    if (this.props.onTouchEnd) this.props.onTouchEnd(e);
  }

});

module.exports = RaisedButton;