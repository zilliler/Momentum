const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "e4ee21254a2dc6c948292ebf6133c110";//사용자 ID API KEY, OPEN API에서 제공

function onGeoOk(position) {
    const lat = position.coords.latitude;//lat은 현재 position.coords.latitude(위도)
    const lng = position.coords.longitude;//lng은 현재 position.coords.longitude(경도)
    console.log("You live in", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    //변수 url 은 `http@@@@@`;이다(open API 에서 가져옴)
    fetch(url)//url을 가져옵니다
        .then((response) => response.json())//JSON 형태로 응답을 하고
        .then((data) => {//data는 다음과 같다.
            city.innerText = data.name;//변수 city에 data.name을 기입
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
            //변수 weather에 변수(날씨 main:이름) / 변수(위치)
        });
}

function onGeoError() {//에러시 시행함수
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
//현재 위치를 가져오는 JS기본 함수 (실행시 함수, 실패시 함수);

