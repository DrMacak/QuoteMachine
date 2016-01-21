$(document).ready(function (){
  $.getJSON("json/fortunes.json", function(result){
    var randomQuote = Math.floor(Math.random() * (result.length));
    $("#quotes").html(result[randomQuote]);
  });
});
