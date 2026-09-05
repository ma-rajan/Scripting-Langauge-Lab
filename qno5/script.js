let tools = ["Nmap", "Burp Suite", "Wireshark", "Metasploit"];
let today = new Date();
let num = 404.404;
let text = "Cybersecurity";
document.getElementById("result").innerHTML =
    "<h2>Cybersecurity Tools</h2>" +
    "Tools: " + tools.join(", ") + "<br>" +
    "Total: " + tools.length + "<br>" +
    "First: " + tools[0] + "<br>" +
    "Last: " + tools[tools.length - 1] + "<br><br>" +

    "<h2>Date Object</h2>" +
    "Date: " + today.toDateString() + "<br>" +
    "Year: " + today.getFullYear() + "<br>" +
    "Month: " + (today.getMonth() + 1) + "<br>" +
    "Day: " + today.getDate() + "<br><br>" +

    "<h2>Math Object</h2>" +
    "Square Root: " + Math.sqrt(25) + "<br>" +
    "Power: " + Math.pow(2, 3) + "<br>" +
    "Round: " + Math.round(12.6) + "<br>" +
    "Maximum: " + Math.max(10, 20) + "<br><br>" +

    "<h2>Number Object</h2>" +
    "Number: " + num + "<br>" +
    "Fixed: " + num.toFixed(2) + "<br>" +
    "Integer: " + Number.parseInt(num) + "<br>" +
    "Finite: " + Number.isFinite(num) + "<br><br>" +

    "<h2>String Object</h2>" +
    "Text: " + text + "<br>" +
    "Length: " + text.length + "<br>" +
    "Uppercase: " + text.toUpperCase() + "<br>" +
    "Lowercase: " + text.toLowerCase() + "<br>" +
    "First Character: " + text.charAt(0);