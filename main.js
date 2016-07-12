$(function () {

$(".button").on('click', function() {
  console.log("Pressing Button");

var form = $("<form>", { method: "GET" });

  form.append("<input>", { type: "text"});
  form.addClass("form_style");

  $( ".main_container" ).prepend(form);

  });
});
