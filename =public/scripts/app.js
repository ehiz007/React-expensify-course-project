"use strict";

var display = /*#__PURE__*/React.createElement("p", {
  id: "div"
}, "This is a new paragraph");
var appData = document.getElementById('app');
var newData = /*#__PURE__*/React.createElement("h1", {
  id: "set"
}, "HElp!!!");
var template = /*#__PURE__*/React.createElement("span", {
  id: "tan"
}, "hd movies");
ReactDOM.render([display, newData], appData); // var template = React.createElement('p',
// {id:"show"},'This is a new text')
// ReactDOM.render(template,appData)
// var Div = React.createElement('a',{
//     id:'yes'
// },'some random div entities')
// var dd= document.getElementById('show')
// ReactDOM.render(Div,dd)
