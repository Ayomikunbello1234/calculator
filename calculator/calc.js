const display = document.getElementById("display");
const oya = document.getElementById("okk");
const lastresult = document.getElementById("lastresult");

oya.addEventListener("click" , function (){
    display.value ="";
    console.log("AC Clicked")
});

function deletelast(){
    display.value = display.value.slice(0, -1);
    console.log("DEL clicked")
};

function press(value) {
    display.value += value;
    console.log("Pressed:", value)
};

function calculate() {
    try {
        display.value = eval(display.value);
        console.log("Calculated:", display.value);
        localStorage.setItem("storage", display.value);
        lastresult.innerHTML = "THE LAST CALCULATION WAS :"+ "  " + display.value;
     
    } catch {
        display.value = "Error";
        console.log("Calculation Error")
    }
}
window.addEventListener("DOMContentLoaded" , function(){
  let storaged = localStorage.getItem("storage");
  lastresult.innerHTML = "THE LAST CALCULATION WAS  :"+ "  " + storaged;
  
});





function showfirst() {
    document.getElementById("weathericon").style.visibility = "hidden";
    document.getElementById("weathericon2").style.visibility = "visible";
    document.getElementById("city").placeholder = "magodo";

}


function showsecond() {
    document.getElementById("weathericon").style.visibility = "visible";
    document.getElementById("weathericon2").style.visibility = "hidden";
}

function myfunction() {
    let text;
    let x = document.getElementById('city').value;

    if (isNaN(x) || x < 1 || x > 20 ) 
        {
        alert(text = 'wrong');
    }
     else {
        alert(text = 'okay')
     }}
//This code below shows how to check if browser supports storage
const storage = document.getElementById("results");

if(typeof(Storage) !== "undefined"){
//store  
    localStorage.setItem("key", "Im using local storage");
    localStorage.setItem("key", "Im using localstorage");
    localStorage.setItem("key2","red" );
//retrieve
    storage.innerHTML = localStorage.getItem("key");
    storage.style.backgroundColor = localStorage.getItem("key2");
}
else{
    storage.innerHTML ="sorry it doesnt support"
}

//FOR SAVING INPUT VALUE AND DISPLAYING IT
let nameInput = document.getElementById("nameInput");
let savebtn = document.getElementById("savebtn");
let displays = document.getElementById("displays");

savebtn.addEventListener("click", function() {
    let name = nameInput.value;
    savebtn.style.color = "yellow"
    localStorage.setItem("username", name);
  displays.innerText= "Welcome" + " Mrs" + "  " + name;
});

let savedname = localStorage.getItem("username");
displays.innerText = "Welcome is this " + " Mrs" + "  " + savedname + "  " + "? " ;





//DARK MODE 
let button = document.getElementById("toggle");

button.addEventListener("click", function () {
    document.body.classList.toggle("dark");


    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme", "dark")
    }
    else{
      localStorage.setItem("theme", "light")
    }

});

// Apply saved theme on reload

let savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
}



//COUNTER

let clickcounter = document.getElementById("clickcounter");
let result = document.getElementById("result");



clickcounter.addEventListener("click" , function(){
    let count = localStorage.getItem("visits");

    if (count === null){
        count = 0;
    }

    else{
        count = Number(count)+ 1;

    }
    localStorage.setItem("visits", count);

     console.log(count);
    result.innerText = "You have visited this page" + " " + count + "  " + "times";
});


//DRAG AND DROP 
//stores the id of dragged element
function dragstartevent(event){
    event.dataTransfer.setData("text", event.target.id);
}


//allows dropping
function dragoverevent(event){
    event.preventDefault();
}

function dropevent(event){
     event.preventDefault();
    const data = event.dataTransfer.getData("text");

    const elementdragged = document.getElementById(data);

    event.currentTarget.appendChild(elementdragged);
}

//COUNTING AMD SAVING

const num = document.getElementById("num");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const reset = document.getElementById("reset");
const save = document.getElementById("save");
const load = document.getElementById("load");

let count = 0;

num.innerHTML = count;

function Updatecount(){
    num.innerHTML = count;
}

plus.addEventListener("click", function(){
  count ++;
  num.innerHTML = count;
});

minus.addEventListener("click", function(){
    count --;
    num.innerHTML = count;
});


reset.addEventListener("click", function(){
    count = 0;
    Updatecount();
});

save.addEventListener("click", function(){
    localStorage.setItem("counts", count);
});

load.addEventListener("click", function(){
    let saved = localStorage.getItem("counts");

    if (saved !== null){
        count = Number(saved);
    }
    Updatecount();
});
