$(document).ready(function () {
    // The current day is displayed at the top of the calendar
    function appendCurrentDate() {
        // Time stamp given in format below
        var currentDate = moment().format("dddd, MMMM Do YYYY, h:mm A");
        $("#currentDay").text(currentDate);
    }

    // color code idea: use time from now function, if it is less 0 then it is past
    // if it is in between 0 and 1 then present, if it is greater than 1 then it is future

    function schedule() {
        // listen for save button clicks
        $(".saveBtn").on("click", function () {
            // Get value of correct row description
            var userText = $(this).siblings(".description").val();
            var timeStamp = $(this).parent().attr("id");
            // save in localStorage
            localStorage.setItem(timeStamp, userText);
        });

    }



    // function call
    appendCurrentDate();
    schedule();

});