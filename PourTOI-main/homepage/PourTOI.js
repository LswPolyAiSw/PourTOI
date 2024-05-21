// 슬라이드 배너 js
const swiperWrap = document.querySelector(".swiperWrap");
const numberLabelBold = document.querySelector(".numberLabelBold");
const blocks = document.querySelectorAll(".block");
//처음 번호 1로 선언 슬라이더배너  숫자 증가시키기 위해 선언
let number = 1;
let count = 0;
// 슬라이드배너 색 선명도 변수선언 이렇게 하면 안될꺼 같은데..
let currentSlide = 0;
swiperWrap.style.transform = "translate(-1118.67px)";

//초기화 함수
function initialize() {
  for (let i = 0; i < blocks.length; i++) {
    if (i === currentSlide + 3) {
      blocks[i].style.opacity = 1; // 중앙 이미지 투명도 1
    } else {
      blocks[i].style.opacity = 0.3; // 양 옆 이미지 투명도 0.3
    }
  }
}
initialize();
// 슬라이드 배너
function autoSlide() {
  swiperWrap.style.transition = "transform 0.5s";
  count++;
  currentSlide++;
  if (count == 3) {
    initialize(); //이미지 전환 후 초기화
    number = 1;
    numberLabelBold.innerText = `${number}`;
    swiperWrap.style.transform = "translate(-" + 559.333 * (count + 2) + "px)";
    count = 0;
    currentSlide = 0;
    setTimeout(function () {
      swiperWrap.style.transition = "transform 0s";
      swiperWrap.style.transform = "translate(-1118.67px)";
    }, 500);
    // 이걸하면 자연스럽게 opacity 가 잘 먹음
    blocks[currentSlide + 3].style.opacity = 1;
  } else {
    numberLabelBold.innerText = `${number + 1}`;
    number++;
    swiperWrap.style.transform = "translate(-" + 559.333 * (count + 2) + "px)";
    initialize(); // 이미지 전환 후 초기화
  }
}

// 3초마다 슬라이드 이동
let inter = setInterval(autoSlide, 333000);

// 이전 버튼, 다음 버튼 구현
const arrows = document.querySelectorAll(".nextNumber");
let arrowButtonCheck = true;
arrows.forEach((arrow) => {
  arrow.addEventListener("click", function () {
    if (arrowButtonCheck) {
      arrowButtonCheck = false;
      clearInterval(inter);
      swiperWrap.style.transition = "transform 0.5s";
      let arrowType = arrow.classList[1];
      // 이전버튼에 클래스 2개 prev로 이전버튼인지 다음버튼인지 확인
      if (arrowType == "prev") {
        count--;
        number--;
        currentSlide--;
        if (count == -1) {
          initialize();
          swiperWrap.style.transform = "translate(-559.333px)";
          count = 2;
          currentSlide = 2;
          number = 3;
          setTimeout(function () {
            swiperWrap.style.transition = "transform 0s";
            swiperWrap.style.transform = "translate(-2237.33px)";
          }, 500);
          blocks[currentSlide + 3].style.opacity = 1;
          numberLabelBold.innerText = `${number}`;
        } else {
          swiperWrap.style.transform =
            "translate(-" + 559.333 * (count + 2) + "px)";
          numberLabelBold.innerText = `${number}`;
          initialize();
        }
      } else {
        count++;
        number++;
        currentSlide++;
        if (count == 3) {
          initialize();
          swiperWrap.style.transform =
            "translate(-" + 559.333 * (count + 2) + "px)";
          count = 0;
          number = 1;
          currentSlide = 0;
          setTimeout(function () {
            swiperWrap.style.transition = "transform 0s";
            swiperWrap.style.transform = "translate(-1118.67px)";
          }, 500);
          blocks[currentSlide + 3].style.opacity = 1;
          numberLabelBold.innerText = `${number}`;
        } else {
          swiperWrap.style.transform =
            "translate(-" + 559.333 * (count + 2) + "px)";
          numberLabelBold.innerText = `${number}`;
          initialize();
        }
      }
      inter = setInterval(autoSlide, 3000);
      setTimeout(function () {
        arrowButtonCheck = true;
      }, 500);
    }
  });
});

// 좋아요 버튼 토글 함수
function toggleLike(button) {
  if (button.classList.contains("clicked")) {
    button.classList.remove("clicked");
  } else {
    button.classList.add("clicked");
  }
}
