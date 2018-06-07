var romanStrings = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
var romanIntegers = [1,4,5,9,10,40,50,90,100,400,500,900,1000];

$(function()
{
  $("#form-one").submit(function(event)
  {
    event.preventDefault();
    var romanIntNumElements = (romanIntegers.length);
    var output = "";
    var input = parseInt($("#input").val().trim());

    if(input<4000)
    {
      for(var index = romanIntNumElements; index >=0; index--)
      {
        var value = romanIntegers[index];
        var temp = input-value;
        if(temp>=0)
        {
          input = temp;
          index = romanIntNumElements;
          output += (convertToRoman(value).toString());
        }
      }
    }

    $("#output").text(output);
    //$("#input").val("");
  });
});

function convertToRoman(input)
{
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
