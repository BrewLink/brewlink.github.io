console.log("Greeting script running now...")
const greeting = document.getElementById("welcoming");
const time = new Date().getHours();
const display_options = ["Hello! Good Morning! :)", "Hello! Good Afternoon! :)", "Hello! Good Evening!"];
let text1 = "";
if (time < 12) text1 = display_options[0];
else if (time < 18) text1 = display_options[1];
else text1 = display_options[2];
var d = document.createElement('p');
d.innerHTML = text1;
d.style.textAlign = "left"
d.ariaLabel = "text"
d.style.fontSize = "large"
d.ariaLabel = "text"
greeting.appendChild(d)


