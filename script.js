// define each conversion in a function
function convert(temp, unit) {

    var resultString = "";

    var celsius = "";
    var kelvin = "";
    var fahrenheit = "";

    if (unit === "Fahrenheit") {
        resultString += temp.toFixed(2) + " Fahrenheit"
        celsius = (temp - 32) * 1.8;
        resultString += " is " + celsius.toFixed(2) + " Celsius"
        kelvin = ((temp - 32) * 5/9) + 273.15;
        resultString += " or " + kelvin.toFixed(2) + " Kelvin"
    } else if (unit === "Celsius") {
        resultString += temp.toFixed(2) + " Celsius"
        fahrenheit = (temp / 1.8) + 32;
        resultString += " is " + fahrenheit.toFixed(2) + " Fahrenheit"
        kelvin = temp + 273.15;
        resultString += " or " + kelvin.toFixed(2) + " Kelvin"
    } else if (unit === "Kelvin") {
        resultString += temp.toFixed(2) + " Kelvin"
        fahrenheit = (temp - 273.15) * 1.8 + 32;
        resultString += " is " + fahrenheit.toFixed(2) + " Fahrenheit"
        celsius = temp - 273.15;
        resultString += " or " + celsius.toFixed(2) + " Celsius"
    } else {
        alert("Invalid Unit!");
        return;
    }
    return resultString;
}

do {
    // Prompt the user for a starting temperature. This should be a numerical value that represents degrees.
    var temperatureInput = parseFloat(prompt("Enter a temperature"));
    // // Prompt the user for a starting temperatureUnit. This will represent either Fahrenheit, Celsius, or Kelvin.
    var temperatureUnit = prompt("Enter a temperature unit in Fahrenheit, Celsius, or Kelvin");

    // Use an array to store and access the user-submitted and converted temperatures. Your array will end up looking something like this...
    // var temps = [ STARTING_TEMP, CONVERTED_TEMP_1, CONVERTED_TEMP_2 ];

    var temperatures = convert(temperatureInput, temperatureUnit);

    if (temperatures) {
        alert(temperatures);
    }

} while (prompt("Continue? Input Y for Yes or N for No.") === "Y");






