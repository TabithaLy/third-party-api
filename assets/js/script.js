// declare variables from given style.css
var past = $('.past');
var present = $('.present');
var future = $('.future');
var currentDay = $('#currentDay');

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

var hour = [nine.text(), ten.text(), eleven.text(), noon.text(), one.text(), two.text(), three.text(), four.text(), five.text()];

// text box for user to fill scheduler

// var textarea = $("textarea")
// current day text at top of page
currentDay.text(moment().format("dddd, MMMM, Do"));

// Local storage
$(".saveBtn").on("click", function () {
    var userEntry = $(this).siblings("input").val();
    var saveHour = $(this).siblings("div").text();
    console.log(userEntry, saveHour);
})



// past, present, and future conditions - if/else - attempt

// function currentHour () {
//     for (var i = 0; i , hour.length; i++) {
//         if (moment(hour[i], "LT").format("HH") < moment().format("HH")) {
//             textarea.addClass("past");
//             textarea.attr("disabled", true);
//         } else if (moment(hour[i], "LT").format("HH") === moment().format("HH")) {
//             textarea.addClass("present");
//             textarea.attr("disabled", true);
//         }   else {
//             textarea.addClass("future");
//         }
//     }
// }
// currentHour ();