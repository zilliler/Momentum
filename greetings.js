const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN = "hidden";//반복되는 string을 변수로 만들어서 오타, 헷갈리지않게
const ID = "ID";//마찬가지

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN);
    const username = loginInput.value;
    localStorage.setItem(ID, username);
    //localstorage에 USERNAME_KEY라는 KEY로 username(input.value)저장
    greeting.innerText = `Hello ${username}`;//실행후 hello + username 표시
    greeting.classList.remove(HIDDEN);//이후 greeting의 HIDDEN 클래스를 지워준다.
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(ID);
//변수 savedUsername 은 저장된 USERNAME_KEY를 가져온다.

if(savedUsername === null){//저장된 USERNAME_KEY가 null(없음)일 때
    loginForm.classList.remove(HIDDEN)//loginform의 HIDDEN 을 제거하고
    loginForm.addEventListener("submit", onLoginSubmit);//제출 뒤 onLoginSubmit을 시행
} else {//아닐경우
    greeting.classList.remove(HIDDEN);//greeting의 HIDDEN 을 제거하고
    greeting.innerText = `Hello ${savedUsername}`;//greeting에 'ㅎㅇㅎㅇ 와 저장된 KEY 출력
}