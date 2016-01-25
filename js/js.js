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
    $("#quotes").html("<h3>"+result[randomQuote].split("―").join("<br>-")+"</h3>");
    $("#tweetContainer").html('<a class="twitter-button tweetbutton" target="_blank" href="https://twitter.com/intent/tweet?text='+result[randomQuote].substr(0,140)+'">Tweet</a>');
  });
}
