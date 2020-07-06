const today = moment().format("dddd, MMMM Do YYYY");
const now = moment().format("H");
console.log(today);
console.log(now);

$(document).ready(function(){
    $('#currentDate').text(today);

    $("textarea").each(function (){
        let when = $(this).attr("id");
        if (when != undefined) {
            if (Number(when) < Number(now)){
            $("#" + when).addClass("past");
        }   else if (Number(when) > Number(now)){
            $("#" + when).addClass("future");
        }   else {
            $("#" + when).addClass("present");
        }
            console.log("#" + when);
            console.log(Number(when));
            console.log(Number(now));
            console.log(Number(when) < Number(now));
        }   

    });
});
