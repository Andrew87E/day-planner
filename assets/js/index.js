$(window).on("load", function () {

  $("#currentTime").text(moment().format("dddd, MMMM Do h:mm a"));


  function updateTheStuff() {
    var currentHour = moment().hours();

    $(".ae-input").each(function () {
      var timer = ($(this).attr("aria-label"));

      if (timer < currentHour) {
        $(this).addClass("past");
      } else if (timer === currentHour) {
        $(this).removeClass("future");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }


  setInterval(updateTheStuff, 1000);
  updateTheStuff()

  $("#9am").val(localStorage.getItem("9am"));
  $("#10am").val(localStorage.getItem("10am"));
  $("#11am").val(localStorage.getItem("11am"));
  $("#12am").val(localStorage.getItem("12pm"));
  $("#1pm").val(localStorage.getItem("1pm"));
  $("#2pm").val(localStorage.getItem("2pm"));
  $("#3pm").val(localStorage.getItem("3pm"));
  $("#4pm").val(localStorage.getItem("4pm"));
  $("#5pm").val(localStorage.getItem("5pm"));

  $('.ae-submit').on('click', function () {
    const userInput = $(this).siblings('.ae-input').val();
    const key = $(this).siblings('.ae-input').attr('id');
    localStorage.setItem(key, userInput);
  });


  $(".ae-clear").on("click", () => {
    const string = $(this).siblings('.ae-input').val()
    const key = $(this).siblings('.ae-input').attr('id');
    localStorage.removeItem(key, string);
  });
});
