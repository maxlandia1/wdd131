document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastmodified").innerHTML = document.lastModified;

let temp = 27;
let speed = 6.6;;
let output = document.getElementById("windchill");
function calculateWindChill(temp, speed) {
    if (temp <= 10 && speed > 4.8) {
        let windchill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
        output.textContent = "The wind chill is " + Math.round(windchill) + "°C";
    } else {
        output.textContent = "N/A";
    }
}
calculateWindChill(temp, speed);