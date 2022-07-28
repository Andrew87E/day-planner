const saved = JSON.stringify(moment().format("M Do YY"));
const pulledTodos = JSON.parse(localStorage.getItem(saved)) || {};

//Header clock feature and calling update function
$("#currentTime").text(moment().format("MMMM Do YYYY, h:mm a"));
setInterval(update, 1000);

function update() {
  $("#currentTime").text(moment().format("MMMM Do YYYY, h:mm a"));
  colorBackground();
}

// function to color backgrounds of input boxes based on time of day past present or future
function colorBackground() {
  const currentTime = moment().format("h a");
  $(".ae-input").each(function () {
    const time = $(this).attr("id");
    if (time < currentTime) {
      $(this).addClass("past");
    } else if (time === currentTime) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}

//Saving values of input box to local storage on click based on location pushing them to pulledTodos array
$(".ae-submit").on("click", () => {
  let todo = $(this).siblings(".ae-input").val();
  let timeStamp = $(this).siblings(".ae-input").text().trim();
  pulledTodos[timeStamp] = todo;
  localStorage.setItem(saved, JSON.stringify(pulledTodos));
});

// clears input box and local storage on click
$(".ae-clear").on("click", () => {
  $(this).siblings(".ae-input").val("");
  localStorage.removeItem(this);
});

//Populating saved values in the dom
$(".ae-input").each(function (index) {
  let toGet = $(this).text().trim();
  if (pulledTodos[toGet]) {
    $(this).siblings("input").val(pulledTodos[toGet]);
  }
});