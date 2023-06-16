function convert() {
    // Get the value from the Fahrenheit input field.
    let fahrenheit = document.getElementById("inputFahrenheit").value;
  
    // Convert the value from Fahrenheit to Celsius.
    let celsius = (fahrenheit - 32) / 1.8;
  
    // Set the value of the Celsius output field.
    document.getElementById("outputCelsius").innerHTML = celsius;
  }
  