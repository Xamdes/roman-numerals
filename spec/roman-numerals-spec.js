import { Roman } from './../src/roman-numerals';
describe('Roman', function()
{
  var tempRoman;

  beforeEach(function() {
    tempRoman = new Roman(1);
  });

  it('should show how beforeEach() works', function() {
    console.log(tempRoman);
  });

  it('should test if out put 3 to III', function() {
    tempRoman.Set(3);
    expect(tempRoman.GetRomanNumeral()).toEqual("III");
  });

});
