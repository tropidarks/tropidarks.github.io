$(document).ready(function () {
  document.getElementById('celsius').onkeyup = updateFahrenheit;

document.getElementById('fahrenheit').onkeyup = 
  updateCelsius;

document.getElementById('celsius').value = 0;

// initial value on page load
updateFahrenheit();

function updateFahrenheit() {
  var c = document.getElementById('celsius').value;
  var f;
  if ( (c == null) || (c == "") || (isNaN(c) ) )
  {
    f = "";
  }
  else
  {
    f = celsiusToFahrenheit(c);
  }
  document.getElementById('fahrenheit').value = f;
}

function updateCelsius() {
  var f = document.getElementById('fahrenheit').value;
  var c;
  if ( (f == null) || (f == "") || (isNaN(f) ) )
  {
    c = "";
  }
  else
  {
    c = fahrenheitToCelsius(f);
  }
  document.getElementById('celsius').value = c;
}

function myround(x) {
  return Math.round(10 * x) / 10;
}

function celsiusToFahrenheit(c) {
  var answer = c * 9 / 5 + 32;
  return myround(answer);
}

function fahrenheitToCelsius(f) {
  var answer = (f - 32) * 5 / 9;
  return myround(answer);
}
document.getElementById('celsius').onkeyup = updateFahrenheit;

document.getElementById('fahrenheit').onkeyup = 
  updateCelsius;

document.getElementById('celsius').value = 0;

// initial value on page load
updateFahrenheit();

function updateFahrenheit() {
  var c = document.getElementById('celsius').value;
  var f;
  if ( (c == null) || (c == "") || (isNaN(c) ) )
  {
    f = "";
  }
  else
  {
    f = celsiusToFahrenheit(c);
  }
  document.getElementById('fahrenheit').value = f;
}

function updateCelsius() {
  var f = document.getElementById('fahrenheit').value;
  var c;
  if ( (f == null) || (f == "") || (isNaN(f) ) )
  {
    c = "";
  }
  else
  {
    c = fahrenheitToCelsius(f);
  }
  document.getElementById('celsius').value = c;
}

function myround(x) {
  return Math.round(10 * x) / 10;
}

function celsiusToFahrenheit(c) {
  var answer = c * 9 / 5 + 32;
  return myround(answer);
}

function fahrenheitToCelsius(f) {
  var answer = (f - 32) * 5 / 9;
  return myround(answer);
  
}
var Loader = function () {    
  var loader = document.querySelector('.loader-container'),
      meter = document.querySelector('.meter'),
      k, i = 1,
      counter = function () {
        if (i <= 100) {   
          meter.innerHTML = i.toString();
          i++;
        } else {
          window.clearInterval(k);
        }
      };

  return {
    init: function (options) {
      options = options || {};
      var time = options.time ? options.time : 0,
          interval = time/100;
      
      loader.classList.add('run');
      k = window.setInterval(counter, interval); 
      setTimeout(function () {        
        loader.classList.add('done');
      }, time);
    },
  }
}();

Loader.init({
    // If you have changed the @time in LESS, update this number to the corresponding value. Measured in miliseconds.
    time: 10000
});
})




/*
document.getElementById('convert').onclick = function() {
  tempFC(document.getElementById('tempForm'));
}


function tempFC(form) {
  temp = form.temp.value;
  if ( (temp == null) || (temp == "") || (isNaN(temp) ) ) {
    form.answer.value = "?";
    form.show.value = "?";
    alert('Not a number!');
    form.temp.select();
    return false;
  }
  
  if (form.choice[0].checked) {
    var round = celsiusToFahrenheit(temp);
    var text1="°C = ";
    var text2="°F";
    var text3="°C multiplied by 9/5 + 32 = ";
    var text4="°F";
    form.answer.value = temp + text1 + round + text2;
    form.show.value = temp + text3 + round + text4;
  }
  
  if (form.choice[1].checked) {
    var round = fahrenheitToCelsius(temp);
    text0="(";
    text1="°F = ";
    text2="°C";
    text3="°F - 32) multiplied by 5/9 = ";
    text4="°C";
    form.answer.value = temp + text1 + round + text2;
    form.show.value= text0 + temp + text3 + round + text4;
  }
}
*/


/*
document.getElementById('convert').onclick = function() {
  tempFC(document.getElementById('tempForm'));
}


function tempFC(form) {
  temp = form.temp.value;
  if ( (temp == null) || (temp == "") || (isNaN(temp) ) ) {
    form.answer.value = "?";
    form.show.value = "?";
    alert('Not a number!');
    form.temp.select();
    return false;
  }
  
  if (form.choice[0].checked) {
    var round = celsiusToFahrenheit(temp);
    var text1="°C = ";
    var text2="°F";
    var text3="°C multiplied by 9/5 + 32 = ";
    var text4="°F";
    form.answer.value = temp + text1 + round + text2;
    form.show.value = temp + text3 + round + text4;
  }
  
  if (form.choice[1].checked) {
    var round = fahrenheitToCelsius(temp);
    text0="(";
    text1="°F = ";
    text2="°C";
    text3="°F - 32) multiplied by 5/9 = ";
    text4="°C";
    form.answer.value = temp + text1 + round + text2;
    form.show.value= text0 + temp + text3 + round + text4;
  }
}
*/
