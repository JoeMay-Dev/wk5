const today = moment().format("dddd, MMMM Do YYYY");
const now = moment().format("H");
console.log(today);
console.log(now);

$(document).ready(function(){
    $('#currentDate').text(today);

    $("div").each(function (){
        let when = $(this).attr("id");
        if (when != undefined) {
            if (Number(when) < Number(now));
            $("#" + when).css({"background-color" : "gray", "color" : "white"});
            console.log("#" + when);
            console.log(Number(when));
            console.log(Number(now));
            console.log(Number(when) < Number(now));
        //  $("#row").css("color", "gray")
        }   
        // console.log(when);
        // console.log(when<now);

    });
});
