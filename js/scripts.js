$(function()
{
  $("#form-one").submit(function(event)
  {
    event.preventDefault();
    var output = "Error";
    var input = parseInt($("#input").val().trim());
    console.log(input);

    output = isRomanNumeral(input);

    $("#output").text(output);
    $("#input").val("");
  });
});

function isRomanNumeral(input)
{
  var romanStrings = ["I","V","X","L","C","D","M"];
  var romanIntegers = [1,5,10,50,100,500,1000];
  var findIndex = romanIntegers.indexOf(input);
  if(findIndex >= 0)
  {
    return romanStrings[findIndex];
  }
  else
  {
    return -1;
  }
}
