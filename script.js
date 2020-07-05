<<<<<<< HEAD
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
=======
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
>>>>>>> c43938c5041ddb6dd5dd962b89a4f3a15b308910
