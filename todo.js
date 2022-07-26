const toDoForm = document.getElementById("todo-form");//html "todo-form" 변수로 지정
const toDoInput = toDoForm.querySelector("input");//html "input" 변수로 지정
const toDoList = document.getElementById("todo-list");//html "todo-list" 변수로 지정

const TODOS_KEY = "todos";//문자열 "todos" 변수로 지정(중복방지)

let toDos = [];//변수 toDos, 배열로 지정

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));//TODOS_KEY로 localstroage 저장
    //JSON.stringify(toDos) 는 배열을 문자로 바꿔주는 역할을 함
}

function deleteToDo(event) {
    const li = event.target.parentElement;//변수 li는 부모태그를 찾아 event를 진행한다
    li.remove();//li를 제거한다
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    //변수 toDos 는 toDo.id 와 parseInt(글자를 문자열로)한 li.id가 같을 경우(fasle) 출력하지않는다.
    saveToDos();//이후 saveToDos를 실행(기존의 todo는 남겨야하기 때문)

}

function paintToDo(newTodo) {
    const li = document.createElement("li");//변수 li는 html "li"를 생성한다.
    li.id = newTodo.id;//변수 li의 id는 newTodo의 id와 같다.
    const span = document.createElement("span");//변수 span은 html "span"을 생성한다.
    span.innerText = newTodo.text;//변수 span에 newTo의 text를 넣는다(input.value)
    const button = document.createElement("button");//변수 button은 html "button"을 생성
    button.innerText = "❌";//button 안에 "❌"를 넣는다.
    button.addEventListener("click", deleteToDo);//button 에 이벤트를 추가한다
    //click 시 deleteToDo가 실행됨
    li.appendChild(span);//변수 li에 변수 span을 종속시킴
    li.appendChild(button);//변수 li에 변수 button을 종속시킴
    toDoList.appendChild(li);//변수 toDoList에 변수 li를 종속시킴
}

function handleToDoSubmit(event) {
    event.preventDefault();//기본 이벤트를 막는다(새로고침을 막음)
    const newTodo = toDoInput.value;//변수 newTodo 는 todoInpute.value이다.
    toDoInput.value = "";//toDoInput.value 는 어떠한 문자열이다
    const newTodoObj = {//변수 newToObj(객체) 생성
        text: newTodo,//text는 newTodo
        id: Date.now(),//id는 Date.now() === 현재시간을 불러오는 기본함수
    };
    toDos.push(newTodoObj);//toDos에 newTodoObj 변수를 배열로 추가한다.
    paintToDo(newTodoObj);//paintToDo를 실행
    saveToDos();//saveToDos를 실행
}

toDoForm.addEventListener("submit", handleToDoSubmit);
//toDoForm에 이벤트를 추가한다 이벤트 : submit 시 handleToDoSubmit이 실행됨

const savedToDos = localStorage.getItem(TODOS_KEY);
//변수 savedToDos는 localStorage의 TODOS_KEY를 가져온다. //JSON.stringify(toDos)를 가져옴

if (savedToDos !== null) {//만약 savedToDos가 null이 아니라면
    const parsedToDos = JSON.parse(savedToDos);
    //변수 parsedToDos 는 savedToDos를 JSON.parse(배열화)한다.
    toDos = parsedToDos;//변수 toDos 는 parsedToDos와 같다.
    parsedToDos.forEach(paintToDo);
    //parsedToDos는 paintToDo를 각각의 배열에 실행시킨다.
}
