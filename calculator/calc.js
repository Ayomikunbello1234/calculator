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

document.addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        calculate();
    }

   
});

document.addEventListener("keydown", function(event){
     if (event.key === "Backspace"){
        deletelast();
    }
});




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
//const storage = document.getElementById("results");

//if(typeof(Storage) !== "undefined"){
//store  
   // localStorage.setItem("key", "Im using local storage");
    //localStorage.setItem("key", "Im using localstorage");
    //localStorage.setItem("key2","red" );
//retrieve
   // storage.innerHTML = localStorage.getItem("key");
   // storage.style.backgroundColor = localStorage.getItem("key2");
//}
//else{
   // storage.innerHTML ="sorry it doesnt support"
//}





//FOR SAVING INPUT VALUE AND DISPLAYING IT
let nameInput = document.getElementById("nameInput");
let savebtn = document.getElementById("savebtn");
let displays = document.getElementById("displays");

let savedname = localStorage.getItem("username");
if(savedname) {
displays.innerText = "Welcome back ," +  "  " + savedname + "!";
}
else{
    displays.innerText = "";
}

savebtn.addEventListener("click", function() {
    let name = nameInput.value;
    savebtn.style.color = "yellow";
    localStorage.setItem("username", name);
  displays.innerText= "Welcome" +  "  " + name;
});




//DARK MDE 
let button = document.getElementById("toggle");
let darkmode = document.getElementById("darkmode");
let icon =  document.getElementById("icon");
let title = document.getElementById("hoverswitch");

button.addEventListener("click", function () {
    darkmode.classList.toggle("dark");


    if(darkmode.classList.contains("dark")){
        localStorage.setItem("theme", "dark");
        icon.src = "lightmode.png";
        button.style.backgroundColor = "black";
        nameInput.style.borderColor ="white"
          title.innerText = "Switch to light mode";
          nameInput.style.color = "white";

        

        
    }
    else{
      localStorage.setItem("theme", "light");
      icon.src = "darkmode.png";
      title.innerText = "Switch to dark mode";
      button.style.backgroundColor = "white";
      nameInput.style.borderColor = "black";
    }

});

// Apply saved theme on reload

let savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    icon.src = "lightmode.png";
    title.innerText = "Switch to light mode";
    darkmode.classList.add("dark");
   button.style.backgroundColor = "black";
   nameInput.style.borderColor ="white"
   nameInput.style.color = "white";

}

else{
    icon.src= "darkmode.png";
    title.innerText= "Switch to dark mode";
     button.style.backgroundColor ="white";
darkmode.classList.remove("dark");
 nameInput.style.borderColor = "black";
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



//TO DO LIST

let tasks = [];
let taskinput = document.getElementById("task");


function addTasks(){
 let text = taskinput.value;

 if (text === ""){
    return;
 }

 tasks.push(text); //this adds the value that was in the input through "text" into the "tasks" array that was created 
taskinput.value = "";
saveTask();

}


function saveTask(){
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

function clearall(){
tasks = {};
saveTask();

}

function displaytask(){

}



//MODAL POPUP
const closebtn = document.getElementById("closebtn");
const openbtn = document.getElementById("openbtn");
const modal = document.getElementById("modal");


function openmodal(){
    modal.classList.add("show");
}
 
function closemodal(){
    modal.classList.remove("show");
}

closebtn.addEventListener("click", closemodal);
openbtn.addEventListener("click", openmodal);


modal.addEventListener("click", function(event){
    if(event.target === modal){
        closemodal();
    }
});


document.addEventListener("keydown", function(event){
    if (event.key === "Escape"){
        closemodal();
    }
});


//FOR FORM VALIDATION

const form = document.getElementById("signupform");
const nameinput = document.getElementById("nameinput");
const emailInput = document.getElementById("emailinput");
const passwordInput = document.getElementById("passwordinput");
const confirmInput = document.getElementById("confirmpassword");
const  nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const pasworderror = document.getElementById("password-error");
const confirmError = document.getElementById("confirm-error");
const Result = document.getElementById("result");


//function to show the error
function showError(variable , message){ // this function declared two objects where when calling the function ,a value can be put in the objects
    variable.innerHTML = message;
}
 
//function to clear error
function clearError(variable){
   variable.innerHTML = "";
}

//function to validate name
function NameVal(){
    let value = nameinput.value.trim();
    if (value.length <= 2){
        showError(nameError, "The character shouldnt be less than or equal to 2")

        return false;
    } 
}

//function to validate email
function emaiLVal(){
    let value = emailInput.value.trim();
     
}


//function to validate password
function passwordVal(){
    let value = passwordInput.value;
    if (value.length < 8){
        showError(passwordError , "The password must be at least 8");
    }
    return false;
}

function confirmVal(){
  let pass = passwordInput.value;

}
