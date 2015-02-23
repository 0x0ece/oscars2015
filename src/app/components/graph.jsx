/** In this file, we create a React component which incorporates components provided by material-ui */

var React = require('react'),
  mui = require('material-ui');

var Graph = module.exports = React.createClass({

	_updateGraph: function() {
      var colors = this.props.colors || undefined;
      this.g = new Dygraph(
          this.refs.graphdiv.getDOMNode(),
          this.props.source + '.csv',
          {
            // customBars: true,
            ylabel: 'Hashtag count / minute',
            colors: colors,
            labelsSeparateLines: true,
            labelsDivWidth: 150,
            strokeWidth: 2,
            // legend: 'always',
            // labelsDivStyles: { 'textAlign': 'right' },
            showRangeSelector: true
          }
      );
	},

	componentDidMount: function() {
	  this._updateGraph();
	},
	componentDidUpdate: function() {
	  this._updateGraph();
	},

  render: function() {
    return (
      <div ref="graphdiv" className="page-graph" style={{width: '100%'}}></div>
    );
  }

});
