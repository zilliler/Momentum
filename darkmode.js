// "check"를 사용하여 ckeckbox 요소를 가져옵니다.
const check = document.getElementById("check")

//LocalStorage에 darkMode가 없으면 생성합니다. 기본적으로 거짓
if (localStorage.getItem('darkMode') === null) {
    localStorage.setItem('darkMode', "false");
}

// 페이지에 기본 모양을 제공합니다. darkMode가 다음으로 설정되어 있는지 여부에 따라 다릅니다.
// 체크박스가 선택되어 있습니다(기본적으로 페이지를 로드하는 경우 선택되지 않음)
checkStatus()

function checkStatus() {
    if (localStorage.getItem('darkMode') === "true") {
        check.checked = true;                                       //p의 xt는 흰색으로 설정됩니다.
        document.getElementsByTagName("p")[0].style.color = "#FFF";   // backgornd는 짙은 회색으로 설정됩니다.
        document.body.style.backgroundColor = "#181A1B";            // CSS 변경 사항은 동일하지만 조명 모드의 경우
    } else {
        check.checked = false;
        document.getElementsByTagName("p")[0].style.color = "black"; //이 함수는 체크박스를 클릭할 때마다 호출됩니다.
        document.body.style.backgroundColor = "#FFF";
    }
}

function changeStatus() {                                            //이 함수는 체크박스를 클릭할 때마다 호출됩니다.
    if (localStorage.getItem('darkMode') === "true") {           // darkMode가 활성화되어 있고 이 함수가 호출되면 사용자가 이제 빛을 원한다는 의미입니다.
        localStorage.setItem('darkMode', "false");                  // 그래서 우리는 그것을 false로 설정하여 우리가 조명 모드에 있음을 나타냅니다.
        document.getElementsByTagName("p")[0].style.color = "black";  //checkStatus에서와 동일한 CSS 변경
        document.body.style.backgroundColor = "#FFF";
    } else {
        localStorage.setItem('darkMode', "true");                   // 같은 코드이지만 어두운 테마에 맞게 조정됨
        document.getElementsByTagName("p")[0].style.color = "#FFF";
        document.body.style.backgroundColor = "#181A1B";
    }
}