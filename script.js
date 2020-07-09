const today = moment().format("dddd, MMMM Do YYYY");
const now = moment().format("H");
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

$(document).ready(function () {
    $('#currentDate').text(today);

    $("textarea").each(function () {
        let when = $(this).attr("id");
        if (when != undefined) {
            if (Number(when) < Number(now)) {
                $("#" + when).addClass("past");
            } else if (Number(when) > Number(now)) {
                $("#" + when).addClass("future");
            } else {
                $("#" + when).addClass("present");
            }
        }

    });
});

for (let i = 6; i <= 18; i++) {
    let checkTask = localStorage.getItem("task" + i);
    let renderTask = document.getElementById([i]);

    if ((checkTask) != "") {
        renderTask.textContent = checkTask;
    }
};

saveButton6.addEventListener("click", function (event) {
    event.preventDefault();
    const inputTask = document.getElementById("6").value;
    localStorage.setItem("task6", inputTask);
});
saveButton7.addEventListener("click", function (event) {
    event.preventDefault();
    const inputTask = document.getElementById("7").value;
    localStorage.setItem("task7", inputTask);
});
saveButton8.addEventListener("click", function (event) {
    event.preventDefault();
    const inputTask = document.getElementById("8").value;
    localStorage.setItem("task8", inputTask);
});
saveButton9.addEventListener("click", function (event) {
    event.preventDefault();
    const inputTask = document.getElementById("9").value;
    localStorage.setItem("task9", inputTask);
});
saveButton10.addEventListener("click", function (event) {
    event.preventDefault();
    const inputTask = document.getElementById("10").value;
    localStorage.setItem("task10", inputTask);
});
saveButton11.addEventListener("click", function (event) {
    event.preventDefault();
    const inputTask = document.getElementById("11").value;
    localStorage.setItem("task11", inputTask);
});
saveButton12.addEventListener("click", function (event) {
    event.preventDefault();
    const inputTask = document.getElementById("12").value;
    localStorage.setItem("task12", inputTask);
});
saveButton13.addEventListener("click", function (event) {
    event.preventDefault();
    const inputTask = document.getElementById("13").value;
    localStorage.setItem("task13", inputTask);
});
saveButton14.addEventListener("click", function (event) {
    event.preventDefault();
    const inputTask = document.getElementById("14").value;
    localStorage.setItem("task14", inputTask);
});
saveButton15.addEventListener("click", function (event) {
    event.preventDefault();
    const inputTask = document.getElementById("15").value;
    localStorage.setItem("task15", inputTask);
});
saveButton16.addEventListener("click", function (event) {
    event.preventDefault();
    const inputTask = document.getElementById("16").value;
    localStorage.setItem("task16", inputTask);
});
saveButton17.addEventListener("click", function (event) {
    event.preventDefault();
    const inputTask = document.getElementById("17").value;
    localStorage.setItem("task17", inputTask);
});
saveButton18.addEventListener("click", function (event) {
    event.preventDefault();
    const inputTask = document.getElementById("18").value;
    localStorage.setItem("task18", inputTask);
});
