function convertTemperature() {

    let input = document.getElementById("temperature").value;
    let unit = document.getElementById("unit").value;

    let error = document.getElementById("error");

    let celsiusResult = document.getElementById("celsius");
    let fahrenheitResult = document.getElementById("fahrenheit");
    let kelvinResult = document.getElementById("kelvin");


    // Clear previous error

    error.innerHTML = "";


    // Check if input is empty

    if (input.trim() === "") {

        error.innerHTML = "Please enter a temperature.";

        return;
    }


    // Check if input is a number

    let temperature = Number(input);

    if (isNaN(temperature)) {

        error.innerHTML = "Please enter a valid number.";

        return;
    }


    let celsius;
    let fahrenheit;
    let kelvin;


    // Convert Celsius

    if (unit === "celsius") {

        celsius = temperature;

        fahrenheit = (temperature * 9 / 5) + 32;

        kelvin = temperature + 273.15;
    }


    // Convert Fahrenheit

    else if (unit === "fahrenheit") {

        fahrenheit = temperature;

        celsius = (temperature - 32) * 5 / 9;

        kelvin = celsius + 273.15;
    }


    // Convert Kelvin

    else if (unit === "kelvin") {

        kelvin = temperature;

        celsius = temperature - 273.15;

        fahrenheit = (celsius * 9 / 5) + 32;
    }


    // Check absolute zero

    if (celsius < -273.15) {

        error.innerHTML =
            "Temperature cannot be below absolute zero (-273.15°C).";

        celsiusResult.innerHTML = "--";
        fahrenheitResult.innerHTML = "--";
        kelvinResult.innerHTML = "--";

        return;
    }


    // Display results

    celsiusResult.innerHTML =
        celsius.toFixed(2) + " °C";

    fahrenheitResult.innerHTML =
        fahrenheit.toFixed(2) + " °F";

    kelvinResult.innerHTML =
        kelvin.toFixed(2) + " K";
}