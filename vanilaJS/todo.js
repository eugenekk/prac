const todoForm = document.querySelector('.todoForm');
const todoInput = todoForm.querySelector(".todoInput");
const todoListWrapper = document.querySelector(".todoListWrapper");

// localstorage에 저장할 toDos array
let toDos = [];

function deleteTodo(event){
    const btn = event.target;
    const li = btn.parentNode;

    todoListWrapper.removeChild(li);

    const newToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    })
    toDos = newToDos;
    saveToDos();
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "X";
    delBtn.classList.add("delBtn");
    const span = document.createElement("span");
    span.innerText = text;
    // 각각의 리스트에 id지정
    const newId = toDos.length + 1;

    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;

    todoListWrapper.appendChild(li);
    //delBtn에 클릭이벤트 추가
    delBtn.addEventListener("click", deleteTodo)
    
    // submit 한 항목을 담을 Object 만들기
    const toDoObj = {
        text : text,
        id : newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    
    const currentValue = todoInput.value;
    paintToDo(currentValue);
    todoInput.value = '';
}

function saveToDos(){
    localStorage.setItem("toDos_local", JSON.stringify(toDos))
}

function loadToDos(){
    const localToDos = localStorage.getItem("toDos_local");
    if(localToDos != null){
        const parsedToDos = JSON.parse(localToDos);
        console.log(parsedToDos)
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        })
    }
}


function init(){
    loadToDos();
    todoForm.addEventListener("submit", handleSubmit);
};
init();