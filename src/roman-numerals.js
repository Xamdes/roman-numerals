const romanStrings = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
const romanIntegers = [1,4,5,9,10,40,50,90,100,400,500,900,1000];

export class Roman
{
  constructor(tempNumber)
  {
    this.number = tempNumber;

  }

  GetRomanNumeral()
  {

    if(this.number<4000)
    {
      var output = "";
      var romanIntNumElements = romanIntegers.length;
      for(var index = romanIntNumElements; index >=0; index--)
      {
        var value = romanIntegers[index];
        var temp = this.number-value;
        if(temp>=0)
        {
          this.number = temp;
          index = romanIntNumElements;
          output += (this.ConvertToRoman(value).toString());
        }
      }
      return output;
    }
    else
    {
      return "Can't Convert Number";
    }
  }


  ConvertToRoman(input)
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

  Set(tempNumber)
  {
    this.number = tempNumber;
  }


}
