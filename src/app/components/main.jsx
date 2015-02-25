/** In this file, we create a React component which incorporates components provided by material-ui */

var React = require('react'),
  Router = require('react-router'),
  mui = require('material-ui'),
  Graph = require('./graph.jsx');


var Main = module.exports = React.createClass({

  mixins: [Router.State],

  render: function() {
    var texts = {
      noteworthy: 'Follies, faux pas, performances, and more: <span class="color-insight41">@johnlegend</span>, <span class="color-insight42">@mrgrahammoore</span>, <span class="color-insight43">#nph</span>, <span class="color-insight44">#everythingisawesome</span>, <span class="color-insight45">#inmemoriam</span>',
      films: 'The winningest (or most tweeted about) films of the year: <span class="color-insight31">#birdman</span>, <span class="color-insight32">#glory</span>, <span class="color-insight33">#whiplash</span>, <span class="color-insight34">#selma</span>, <span class="color-insight35">#bighero6</span>',
      actors: 'The best of the best, and the best dressed: <span class="color-insight21">#eddieredmayne</span>, <span class="color-insight22">@lupita_nyongo</span>, <span class="color-insight23">#dakotajohnson</span>, <span class="color-insight24">@pattyarquette</span>, <span class="color-insight25">@_juliannemoore</span>',
      redcarpet: 'Gossip galore on the red carpet: <span class="color-insight11">#rosamundpike</span>, <span class="color-insight12">#marioncotillard</span>, <span class="color-insight13">#margotrobbie</span>, <span class="color-insight14">#emmastone</span>, <span class="color-insight15">#lupitanyongo</span>',
      top: 'Top hashtags during the Oscars: <span class="color-insight01">@actuallynph</span>, <span class="color-insight02">@ladygaga</span>, <span class="color-insight03">#birdman</span>, <span class="color-insight04">#glory</span>, <span class="color-insight05">#whiplash</span>'
    }

    var red50 =    '#ffebee';
    var red100 =   '#ffcdd2';
    var red200 =   '#ef9a9a';
    var red300 =   '#e57373';
    var red400 =   '#ef5350';
    var red500 =   '#f44336';
    var red600 =   '#e53935';
    var red700 =   '#d32f2f';
    var red800 =   '#c62828';
    var red900 =   '#b71c1c';
    var redA100 =  '#ff8a80';
    var redA200 =  '#ff5252';
    var redA400 =  '#ff1744';
    var redA700 =  '#d50000';
    var pink50 =   '#fce4ec';
    var pink100 =  '#f8bbd0';
    var pink200 =  '#f48fb1';
    var pink300 =  '#f06292';
    var pink400 =  '#ec407a';
    var pink500 =  '#e91e63';
    var pink600 =  '#d81b60';
    var pink700 =  '#c2185b';
    var pink800 =  '#ad1457';
    var pink900 =  '#880e4f';
    var pinkA100 = '#ff80ab';
    var pinkA200 = '#ff4081';
    var pinkA400 = '#f50057';
    var pinkA700 = '#c51162';
    var purple50 =   '#f3e5f5';
    var purple100 =  '#e1bee7';
    var purple200 =  '#ce93d8';
    var purple300 =  '#ba68c8';
    var purple400 =  '#ab47bc';
    var purple500 =  '#9c27b0';
    var purple600 =  '#8e24aa';
    var purple700 =  '#7b1fa2';
    var purple800 =  '#6a1b9a';
    var purple900 =  '#4a148c';
    var purpleA100 = '#ea80fc';
    var purpleA200 = '#e040fb';
    var purpleA400 = '#d500f9';
    var purpleA700 = '#aa00ff';
    var deeppurple50 =    '#ede7f6';
    var deeppurple100 =   '#d1c4e9';
    var deeppurple200 =   '#b39ddb';
    var deeppurple300 =   '#9575cd';
    var deeppurple400 =   '#7e57c2';
    var deeppurple500 =   '#673ab7';
    var deeppurple600 =   '#5e35b1';
    var deeppurple700 =   '#512da8';
    var deeppurple800 =   '#4527a0';
    var deeppurple900 =   '#311b92';
    var deeppurpleA100 =  '#b388ff';
    var deeppurpleA200 =  '#7c4dff';
    var deeppurpleA400 =  '#651fff';
    var deeppurpleA700 =  '#6200ea';
    var indigo50 =   '#e8eaf6';
    var indigo100 =  '#c5cae9';
    var indigo200 =  '#9fa8da';
    var indigo300 =  '#7986cb';
    var indigo400 =  '#5c6bc0';
    var indigo500 =  '#3f51b5';
    var indigo600 =  '#3949ab';
    var indigo700 =  '#303f9f';
    var indigo800 =  '#283593';
    var indigo900 =  '#1a237e';
    var indigoA100 = '#8c9eff';
    var indigoA200 = '#536dfe';
    var indigoA400 = '#3d5afe';
    var indigoA700 = '#304ffe';
    var blue50 =   '#e3f2fd';
    var blue100 =  '#bbdefb';
    var blue200 =  '#90caf9';
    var blue300 =  '#64b5f6';
    var blue400 =  '#42a5f5';
    var blue500 =  '#2196f3';
    var blue600 =  '#1e88e5';
    var blue700 =  '#1976d2';
    var blue800 =  '#1565c0';
    var blue900 =  '#0d47a1';
    var blueA100 = '#82b1ff';
    var blueA200 = '#448aff';
    var blueA400 = '#2979ff';
    var blueA700 = '#2962ff';
    var lightblue50 =   '#e1f5fe';
    var lightblue100 =  '#b3e5fc';
    var lightblue200 =  '#81d4fa';
    var lightblue300 =  '#4fc3f7';
    var lightblue400 =  '#29b6f6';
    var lightblue500 =  '#03a9f4';
    var lightblue600 =  '#039be5';
    var lightblue700 =  '#0288d1';
    var lightblue800 =  '#0277bd';
    var lightblue900 =  '#01579b';
    var lightblueA100 = '#80d8ff';
    var lightblueA200 = '#40c4ff';
    var lightblueA400 = '#00b0ff';
    var lightblueA700 = '#0091ea';
    var cyan50 =   '#e0f7fa';
    var cyan100 =  '#b2ebf2';
    var cyan200 =  '#80deea';
    var cyan300 =  '#4dd0e1';
    var cyan400 =  '#26c6da';
    var cyan500 =  '#00bcd4';
    var cyan600 =  '#00acc1';
    var cyan700 =  '#0097a7';
    var cyan800 =  '#00838f';
    var cyan900 =  '#006064';
    var cyanA100 = '#84ffff';
    var cyanA200 = '#18ffff';
    var cyanA400 = '#00e5ff';
    var cyanA700 = '#00b8d4';
    var teal50 =   '#e0f2f1';
    var teal100 =  '#b2dfdb';
    var teal200 =  '#80cbc4';
    var teal300 =  '#4db6ac';
    var teal400 =  '#26a69a';
    var teal500 =  '#009688';
    var teal600 =  '#00897b';
    var teal700 =  '#00796b';
    var teal800 =  '#00695c';
    var teal900 =  '#004d40';
    var tealA100 = '#a7ffeb';
    var tealA200 = '#64ffda';
    var tealA400 = '#1de9b6';
    var tealA700 = '#00bfa5';
    var green50 =    '#e8f5e9';
    var green100 =   '#c8e6c9';
    var green200 =   '#a5d6a7';
    var green300 =   '#81c784';
    var green400 =   '#66bb6a';
    var green500 =   '#4caf50';
    var green600 =   '#43a047';
    var green700 =   '#388e3c';
    var green800 =   '#2e7d32';
    var green900 =   '#1b5e20';
    var greenA100 =  '#b9f6ca';
    var greenA200 =  '#69f0ae';
    var greenA400 =  '#00e676';
    var greenA700 =  '#00c853';
    var lightgreen50 =    '#f1f8e9';
    var lightgreen100 =   '#dcedc8';
    var lightgreen200 =   '#c5e1a5';
    var lightgreen300 =   '#aed581';
    var lightgreen400 =   '#9ccc65';
    var lightgreen500 =   '#8bc34a';
    var lightgreen600 =   '#7cb342';
    var lightgreen700 =   '#689f38';
    var lightgreen800 =   '#558b2f';
    var lightgreen900 =   '#33691e';
    var lightgreenA100 =  '#ccff90';
    var lightgreenA200 =  '#b2ff59';
    var lightgreenA400 =  '#76ff03';
    var lightgreenA700 =  '#64dd17';
    var lime50 =   '#f9fbe7';
    var lime100 =  '#f0f4c3';
    var lime200 =  '#e6ee9c';
    var lime300 =  '#dce775';
    var lime400 =  '#d4e157';
    var lime500 =  '#cddc39';
    var lime600 =  '#c0ca33';
    var lime700 =  '#afb42b';
    var lime800 =  '#9e9d24';
    var lime900 =  '#827717';
    var limeA100 = '#f4ff81';
    var limeA200 = '#eeff41';
    var limeA400 = '#c6ff00';
    var limeA700 = '#aeea00';
    var yellow50 =   '#fffde7';
    var yellow100 =  '#fff9c4';
    var yellow200 =  '#fff59d';
    var yellow300 =  '#fff176';
    var yellow400 =  '#ffee58';
    var yellow500 =  '#ffeb3b';
    var yellow600 =  '#fdd835';
    var yellow700 =  '#fbc02d';
    var yellow800 =  '#f9a825';
    var yellow900 =  '#f57f17';
    var yellowA100 = '#ffff8d';
    var yellowA200 = '#ffff00';
    var yellowA400 = '#ffea00';
    var yellowA700 = '#ffd600';
    var amber50 =    '#fff8e1';
    var amber100 =   '#ffecb3';
    var amber200 =   '#ffe082';
    var amber300 =   '#ffd54f';
    var amber400 =   '#ffca28';
    var amber500 =   '#ffc107';
    var amber600 =   '#ffb300';
    var amber700 =   '#ffa000';
    var amber800 =   '#ff8f00';
    var amber900 =   '#ff6f00';
    var amberA100 =  '#ffe57f';
    var amberA200 =  '#ffd740';
    var amberA400 =  '#ffc400';
    var amberA700 =  '#ffab00';
    var orange50 =   '#fff3e0';
    var orange100 =  '#ffe0b2';
    var orange200 =  '#ffcc80';
    var orange300 =  '#ffb74d';
    var orange400 =  '#ffa726';
    var orange500 =  '#ff9800';
    var orange600 =  '#fb8c00';
    var orange700 =  '#f57c00';
    var orange800 =  '#ef6c00';
    var orange900 =  '#e65100';
    var orangeA100 = '#ffd180';
    var orangeA200 = '#ffab40';
    var orangeA400 = '#ff9100';
    var orangeA700 = '#ff6d00';
    var deeporange50 =    '#fbe9e7';
    var deeporange100 =   '#ffccbc';
    var deeporange200 =   '#ffab91';
    var deeporange300 =   '#ff8a65';
    var deeporange400 =   '#ff7043';
    var deeporange500 =   '#ff5722';
    var deeporange600 =   '#f4511e';
    var deeporange700 =   '#e64a19';
    var deeporange800 =   '#d84315';
    var deeporange900 =   '#bf360c';
    var deeporangeA100 =  '#ff9e80';
    var deeporangeA200 =  '#ff6e40';
    var deeporangeA400 =  '#ff3d00';
    var deeporangeA700 =  '#dd2c00';
    var brown50 =   '#efebe9';
    var brown100 =  '#d7ccc8';
    var brown200 =  '#bcaaa4';
    var brown300 =  '#a1887f';
    var brown400 =  '#8d6e63';
    var brown500 =  '#795548';
    var brown600 =  '#6d4c41';
    var brown700 =  '#5d4037';
    var brown800 =  '#4e342e';
    var brown900 =  '#3e2723';
    var bluegrey50 =   '#eceff1';
    var bluegrey100 =  '#cfd8dc';
    var bluegrey200 =  '#b0bec5';
    var bluegrey300 =  '#90a4ae';
    var bluegrey400 =  '#78909c';
    var bluegrey500 =  '#607d8b';
    var bluegrey600 =  '#546e7a';
    var bluegrey700 =  '#455a64';
    var bluegrey800 =  '#37474f';
    var bluegrey900 =  '#263238';
    var grey50 =   '#fafafa';
    var grey100 =  '#f5f5f5';
    var grey200 =  '#eeeeee';
    var grey300 =  '#e0e0e0';
    var grey400 =  '#bdbdbd';
    var grey500 =  '#9e9e9e';
    var grey600 =  '#757575';
    var grey700 =  '#616161';
    var grey800 =  '#424242';
    var grey900 =  '#212121';


    var colors = {
      noteworthy: [
        teal900,
        teal500,
        teal200,
        greenA700,
        greenA200,
      ],
      films: [
        indigo900,
        indigo500,
        indigo200,
        lightblueA700,
        lightblueA200,
      ],
      actors: [
        purple900,
        purple500,
        purple200,
        pinkA700,
        pinkA200,
      ],
      redcarpet: [
        red900,
        red500,
        red200,
        orangeA700,
        orangeA200,
      ],
      top: [
        lime900,
        '#d1a930',
        lime200,
        amberA700,
        amberA200,
      ]
    }

    var insight = this.getParams().insight || 'top',
        text = texts[insight],
        color = colors[insight];

    return (

      <div className="page-main">

        <p className="graph-title" dangerouslySetInnerHTML={{__html: text}}/>
        <Graph source={insight} colors={color} />

      </div>
    );
  }

});
