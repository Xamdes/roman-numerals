$(function()
{
  $("#form-one").submit(function(event)
  {
    event.preventDefault();
    var romanStrings = ["I","V","X","L","C","D","M"];
    var romanIntegers = [1,5,10,50,100,500,1000];
    var romanIntNumElements = (romanIntegers.length-1);
    var output = "";
    var input = parseInt($("#input").val().trim());
    console.log("Input: "+input);

    for(var index = romanIntNumElements; index >=0; index--)
    {
      var value = romanIntegers[index]
      var temp = input-value;
      console.log("Val: "+value+" Temp: "+temp);
      if(temp>=0)
      {
        input = temp;
        index = romanIntNumElements;
        output += (isRomanNumeral(value,romanStrings,romanIntegers).toString());
      }
    }



    //output = isRomanNumeral(input,romanStrings,romanIntegers);

    $("#output").text(output);
    //$("#input").val("");
  });
});

function isRomanNumeral(input,ptrRomanStrings,ptrRomanIntegers)
{
  var findIndex = ptrRomanIntegers.indexOf(input);
  if(findIndex >= 0)
  {
    return ptrRomanStrings[findIndex];
  }
  else
  {
    return -1;
  }
}
