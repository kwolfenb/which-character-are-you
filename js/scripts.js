$(document).ready(function() {
  $(".formOne").submit(function(event) {
  event.preventDefault();

  var operator1 = parseInt($("input:radio[name=question1]:checked").val());
  var operator2 = parseInt($("input:radio[name=question2]:checked").val());
  var operator3 = parseInt($("input:radio[name=question3]:checked").val());

  var sum = (operator1 + operator2 + operator3);

  if (sum < 5) {
    $(".harry").show();
    $(".ron").hide();
    $(".hermione").hide();
  }

  else if (sum < 7 && sum >5) {
    $(".harry").hide();
    $(".ron").show();
    $(".hermione").hide();
  }

  else if (sum >= 7) {
    $(".harry").hide();
    $(".ron").hide();
    $(".hermione").show();
  }


});

});
