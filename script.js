const today = moment().format("dddd, MMMM Do YYYY");
const now = moment().format("H");
console.log(today);
console.log(now);


const saveButton6 = document.getElementById("button6");
const saveButton7 = document.getElementById("button7");
const saveButton8 = document.getElementById("button8");
const saveButton9 = document.getElementById("button9");
const saveButton10 = document.getElementById("button10");
const saveButton11 = document.getElementById("button11");
const saveButton12 = document.getElementById("button12");
const saveButton13 = document.getElementById("button13");
const saveButton14 = document.getElementById("button14");
const saveButton15 = document.getElementById("button15");
const saveButton16 = document.getElementById("button16");
const saveButton17 = document.getElementById("button17");
const saveButton18 = document.getElementById("button18");

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

for (let i=6; i<=18; i++){
    let checkTask = localStorage.getItem("task"+ i);
    let renderTask = document.getElementById([i]);

    if ((checkTask) != "") {
        renderTask.textContent = checkTask;
    }
    };

saveButton6.addEventListener("click", function(event){
    event.preventDefault();
        const eventInput = document.getElementById("6").value;
    console.log(eventInput);
    localStorage.setItem("task6", eventInput);
});
saveButton7.addEventListener("click", function(event){
    event.preventDefault();
        const eventInput = document.getElementById("7").value;
    console.log(eventInput);
    localStorage.setItem("task7", eventInput);
});
saveButton8.addEventListener("click", function(event){
    event.preventDefault();
        const eventInput = document.getElementById("8").value;
    console.log(eventInput);
    localStorage.setItem("task8", eventInput);
});
saveButton9.addEventListener("click", function(event){
    event.preventDefault();
        const eventInput = document.getElementById("9").value;
    console.log(eventInput);
    localStorage.setItem("task9", eventInput);
});
saveButton10.addEventListener("click", function(event){
    event.preventDefault();
        const eventInput = document.getElementById("10").value;
    console.log(eventInput);
    localStorage.setItem("task10", eventInput);
});
saveButton11.addEventListener("click", function(event){
    event.preventDefault();
        const eventInput = document.getElementById("11").value;
    console.log(eventInput);
    localStorage.setItem("task11", eventInput);
});
saveButton12.addEventListener("click", function(event){
    event.preventDefault();
        const eventInput = document.getElementById("12").value;
    console.log(eventInput);
    localStorage.setItem("task12", eventInput);
});
saveButton13.addEventListener("click", function(event){
    event.preventDefault();
        const eventInput = document.getElementById("13").value;
    console.log(eventInput);
    localStorage.setItem("task13", eventInput);
});
saveButton14.addEventListener("click", function(event){
    event.preventDefault();
        const eventInput = document.getElementById("14").value;
    console.log(eventInput);
    localStorage.setItem("task14", eventInput);
});
saveButton15.addEventListener("click", function(event){
    event.preventDefault();
        const eventInput = document.getElementById("15").value;
    console.log(eventInput);
    localStorage.setItem("task15", eventInput);
});
saveButton16.addEventListener("click", function(event){
    event.preventDefault();
        const eventInput = document.getElementById("16").value;
    console.log(eventInput);
    localStorage.setItem("task16", eventInput);
});
saveButton17.addEventListener("click", function(event){
    event.preventDefault();
        const eventInput = document.getElementById("17").value;
    console.log(eventInput);
    localStorage.setItem("task17", eventInput);
});
saveButton18.addEventListener("click", function(event){
    event.preventDefault();
        const eventInput = document.getElementById("18").value;
    console.log(eventInput);
    localStorage.setItem("task18", eventInput);
});
