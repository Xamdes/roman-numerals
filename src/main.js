import {Roman} from './roman-numerals';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(function()
{
  $("#form-one").submit(function(event)
  {
    event.preventDefault();
    const input = parseInt($("#input").val().trim());
    const output = new Roman(input);
    $("#output").text(output.GetRomanNumeral());
    //$("#input").val("");
  });
});
