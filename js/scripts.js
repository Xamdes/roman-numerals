var romanStrings = ["I","V","X","L","C","D","M"];
var romanIntegers = [1,5,10,50,100,500,1000];
//Team Code
$(function()
{
  //debugger
  $("#form-one").submit(function(event)
  {
    event .preventDefault();
    console.log("------------------------");

    var romanCounter = [0,0,0,0,0,0,0];
    var romanIntNumElements = (romanIntegers.length-1);
    var output = "";
    var input = parseInt($("#input").val().trim());

    for(var index = 0; index <= romanIntNumElements; index++)
    {
      var inputArray = input.toString().split("");
      console.log("Index: "+index+" | array: "+inputArray);
      var tempSwitch = inputArray[index];

      if(tempSwitch==="4")
      {
        // outputTest += ""; if index 1(replace LLLL with  LC ){
        //   elseif index 2(replace vvvv with vx )
        // }
        output += "";
        console.log("4"+inputArray.shift());
        input = parseInt(inputArray.join(""));
      }
      else if(tempSwitch==="9")
      {
        output += "";
        console.log("9"+inputArray.shift());
        input = parseInt(inputArray.join(""));
      }
      else
      {
        var value = romanIntegers[index];
        var temp = input-value;
        if(temp>=0)
        {
          console.log("Val: "+value+" Temp: "+temp);
          input = temp;
          romanCounter[index]++;
          index = romanIntNumElements;
          output += (convertToRoman(value).toString());
        }
      }

    }

    //output = isRomanNumeral(input,romanStrings,romanIntegers);
    //console.log(romanCounter);
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



function findLocation(value,tempArray)
{
  return tempArray.indexOf(value);
}
