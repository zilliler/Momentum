const images = ["1.jpg", "2.jpg", "3.jpg"];//변수 images 정의

const chosenImage = images[Math.floor(Math.random() * images.length)];
//변수 chosenImage = images[절하(랜덤숫자생성 * images의 배열 길이)];

const bgImage = document.createElement("img");
//변수 bgImage = html 에 "img"를 생성합니다.

bgImage.src = `img/${chosenImage}`;
//bgImage의 src(소스) 는 img(이미지파일의) 변수 chosenImgae입니다.

document.body.appendChild(bgImage);
//body에 bgImage를 종속한다.