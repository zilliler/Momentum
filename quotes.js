const quotes = [
    {
        quote: "사람은 오로지 가슴으로만 올바로 볼 수 있다. 본질적인 것은 눈에 보이지 않는다  ",
        author: "생택쥐베리",
    },
    {
        quote: "승리하면 조금 배울 수 있고 패배하면 모든 것을 배울 수 있다.",
        author: "메튜슨",
    },
    {
        quote: "빛을 퍼뜨릴 수 있는 두가지 방법이 있다.  ",
        author: "에디슨",
    },
    {
        quote: "나는 나다  ",
        author: "박관욱",
    },
    {
        quote: "당신이 잘 하는 일이라면 무엇이나 행복에 도움이 된다.  ",
        author: "러셀",
    },
    {
        quote: "두려움 때문에 갖는 존경심만큼 비열한 것은 없다",
        author: "카뮈",
    },
    {
        quote: "노동은 세개의 큰 악, 즉, 지루함, 부도덕, 그리고 가난을 제거한다",
        author: "괴테",
    },
    {
        quote: "자식 마누라 빼고 다 바꿔",
        author: "이건희",
    },
    {
        quote: "힘 있을때 있는 친구는 친구가 아니다",
        author: "핸리 애덤스",
    }
    , {
        quote: "해 봤어??",
        author: "정주영",
    }
]

const quote = document.querySelector("#quote span:first-child");
//#quote(html)의 첫번째 <span>은 변수 quote 이다
const author = document.querySelector("#quote span:last-child");
//#quote(html)의 두번째 <span>은 변수 author이다
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)]
// 변수 todayQuote = quotes이다[절하한(랜덤의 * quotes 의 길이만큼)]

quote.innerText = todayQuote.quote;
//quote의 innerText는 todayQuote의 quote이다
author.innerText = todayQuote.author;
//author의 innerText는 todayQuote의 author이다