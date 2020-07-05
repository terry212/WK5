$(document).ready(function () {
    var currentHour = moment().format("HH");

    // The current day is displayed at the top of the calendar
    function appendCurrentDate() {
        // Time stamp given in format below
        var currentDate = moment().format("dddd, MMMM Do YYYY, h:mm A");
        $("#currentDay").text(currentDate);
    }
    // listen for save button clicks
    $(".saveBtn").on("click", function () {
        // Get value of correct row description
        var userText = $(this).siblings(".description").val();
        var timeStamp = $(this).parent().attr("id");
        // save in localStorage
        localStorage.setItem(timeStamp, userText);
    });

    function schedule() {
        // grab element to observe to add class attr
        var divElement = $(".time-block");
        // grabs local storage data and displays it
        for (let x = 0; x < divElement.length; x++) {
            var descElement = divElement[x].children[1];
            xString = divElement[x].id.toString();
            $(descElement).val(localStorage.getItem(xString));
        }
        // color code control
        for (let i = 0; i < divElement.length; i++) {
            // grab id of each data hour block
            scheduleHour = divElement[i].id;

            function taskLegend() {
                if (scheduleHour < currentHour) {
                    $(divElement[i]).addClass("past");
                }
                else if (scheduleHour == currentHour) {
                    $(divElement[i]).removeClass("past");
                    $(divElement[i]).addClass("present");
                }
                else {
                    $(divElement[i]).removeClass("past");
                    $(divElement[i]).removeClass("present");
                    $(divElement[i]).addClass("future");
                }
            }
            taskLegend();
        }

    }

    // clear local storage upon new day
    if (currentHour === 24) {
        localStorage.clear();
    }

    // function call
    appendCurrentDate();
    schedule();

});