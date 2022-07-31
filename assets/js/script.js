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

// current day text at top of page
currentDay.text(moment().format("dddd, MMMM, Do"));

// Local storage - help from tutor Sangeetha Kaliaperumal
$(".saveBtn").on("click", function () {
    var userEntry = $(this).siblings("input").val();
    var saveHour = $(this).siblings("div").text();
    console.log(userEntry, saveHour);
    localStorage.setItem(saveHour, userEntry);
})



// past, present, and future conditions - if/else - attempt - fixed with tutor
var currentMilitaryHour = moment().hour();
console.log(currentMilitaryHour)
function currentHour () {
    for (var i = 9; i < 18; i++) {
        var timeBlock = ""
        if (i > 12 ) {
           timeBlock =( i - 12)+"PM";
        } else if (i === 12)  {
            timeBlock = 12+"PM";
        } else {
            timeBlock = i+"AM";
        }
        var retrieveLocal = localStorage.getItem(timeBlock);
        $("#" + i).val(retrieveLocal);
        console.log(timeBlock, retrieveLocal);
        if (i < currentMilitaryHour) {
            $("#" + i).addClass("past");
        } else if (i === currentMilitaryHour) {
            $("#" + i).addClass("present");
        } else {
            $("#" + i).addClass("future");
        }
    }
}
currentHour ();