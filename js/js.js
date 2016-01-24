$(document).ready(function () {
 generateRandomQuote();

 $("button").click(function () {
   generateRandomQuote();
   console.log("test");
 });


});

function generateRandomQuote() {
  $.getJSON('json/fortunes.json', function (result) {
    var randomQuote = Math.floor(Math.random() * (result.length));
    $("#quotes").html("<h3>"+result[randomQuote].replace("―","<br>-")+"</h3>");
  });
}
