let display = document.getElementById("display");
let calkString = "";

function addValue(value) {
    calkString += String(value);
    display.innerHTML = calkString;
}

function clearAll() {
    calkString = "";
    display.innerHTML = calkString;
}

function del() {
    calkString = calkString.slice(0, -1);
    display.innerHTML = calkString
}

function end() {
    if (calkString == "") {
        display.innerHTML = "error"
        calkString = ""
        return
    }
    try {
        calkString = String(eval(calkString))
        display.innerHTML = calkString
    } catch (error) {
        display.innerHTML = "Error";
        calkString = ""
    }
}
