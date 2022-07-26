const clock = document.querySelector("h2#clock");

clock.innerText = "lalala"

function getClock() {
    const date = new Date();//변수 date 는 현재의 Date()(기본함수)
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`
}

getClock()
setInterval(getClock, 1000);
//1이면 01로 만들고싶다.. 이미있음;; 그런 함수가..바로 padstart
//사용방법은 " ".padstart(최대 문자열,붙일 문자) 반대로는 padEnd가 되시겠다. 아래 사용방법