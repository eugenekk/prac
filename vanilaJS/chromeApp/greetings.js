const form = document.querySelector(".infoForm");
const inputName = form.querySelector(".name")
const greeting = document.querySelector(".greeting")

function paintGreeting(text){
    form.classList.remove("show_block")
    greeting.classList.add("show_block")
    greeting.innerHTML = `Hello ${text}!`
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = inputName.value;
    paintGreeting(currentValue);
    saveLocal(currentValue);
}

function saveLocal(text){
    localStorage.setItem("user_local", text)
}

function askName(){
    form.classList.add("show_block");
    form.addEventListener("submit", handleSubmit);
}

function loadName(){
    const currentUser = localStorage.getItem("user_local")
    if(currentUser === null){
        askName()
    }else{
        paintGreeting(currentUser)
    }
}



function init(){
    loadName();
}

init()