// declare variables from given style.css
var past = $('.past');
var present = $('.present');
var future = $('.future');
var currentDay = $('.currentDay');
var row = $('.row');
// hour variables

var nine = $('.nine').text('9AM');
var ten = $('.ten').text('10AM');
var eleven = $('.eleven').text('11AM');
var noon = $('.noon').text('12PM');
var one = $('.one').text('1PM');
var two = $('.two').text('2PM');
var three = $('.three').text('3PM');
var four = $('.four').text('4PM');
var five = $('.five').text('5PM');

// arrays

var hourArray = [nine.text(), ten.text(), eleven.text(), noon.text(), one.text(), two.text(), three.text(), four.text(), five.text()];

// text box for user to fill scheduler

var textarea = document.createElement("textarea"); textarea.setAttribute('type', 'text'); 