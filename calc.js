const display = document.getElementById("display");

function clearDisplay() {
    display.value = "";
    console.log("AC clicked")
}

function deleteLast() {
    display.value = display.value.slice(0,-1);
    console.log("DEL clicked")
}

function press(value){
    display.value += value;
    console.log("Pressed:", value)
}

function calculate(){
    try {
        display.value = eval(display.value);
        console.log("Calculated:", display.value)
    } catch {
        display.value = "Error";
        console.log("Calculation Error")
    }
}