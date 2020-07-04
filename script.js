$(document).ready(function () {
    // The current day is displayed at the top of the calendar
    function appendCurrentDate() {
        // Time stamp given in format below
        // var currentDate = moment().format("dddd, MMMM Do YYYY, h:mm A");
        // $("#currentDay").text(currentDate);
    }

    // timeblocks for standard business hours

    // var firstHour = moment("0900", "hmm").format("HH:mm");
    // $(".row.table-active #hourCol").text(firstHour);

    // color code idea: use time from now function, if it is less 0 then it is past
    // if it is in between 0 and 1 then present, if it is greater than 1 then it is future

    function schedule() {
        // var hourColumn = $(`<div class="col-2" style="display: contents;">${(moment(9, 'h hh').format('LT'))}</div>`);
        // $(".row.table-active #hourCol").append(hourColumn);

        // var dataColumn = $(`
        // <input type="text" id="userText" style="width: 100%; height: auto; display: inline-block;"></input>
        // `);
        // $(".row.table-active #dataCol").append(dataColumn);

        // var saveColumn = $(`<div class="col-2" style="display: contents;">
        // <button class="saveBtn"><span class="fas fa-save text-black"></span> Save</button>
        // </div>
        // `);
        // $(".row.table-active #saveCol").append(saveColumn);

        // $(".saveBtn").on("click", function () {
        //     console.log ("you have clicked the button");
        //     saveText();
        // });

    }

    function saveText() {
        // var userText = $("#userText");
        // console.log(userText)
        // if (userText != "") {
        //     console.log("Success in saving the text, maybe")
        // }
    }

    // function call
    appendCurrentDate();
    schedule();

});