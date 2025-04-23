//스토리구성
window.onload = function () {
    storyList.forEach((story) => {
        const el = document.querySelector(`.${story.id}`);
        if (el) {
            el.innerHTML = story.content;
        }
    });
};

// 특정 섹션의 오디오 재생
function playAudioOnPage(sectionId) {
    const audio = document.querySelector(`#${sectionId} audio`);
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(err => {
        console.warn("자동재생 차단됨:", err);
        // alert("브라우저에서 자동재생이 차단되었습니다. 오디오를 수동으로 재생해주세요.");
      });
    } else {
      console.log(`섹션 '${sectionId}'에 오디오가 없습니다.`);
    }
  }


  //획득페이지 구성 3, 10, 13, 16, 19
// 팝업과 오버레이 요소 선택
const popup = document.querySelector('.gIpopup');
const overlay = document.querySelector('.overlay');

// 팝업 열기 함수
function opengIPopup() {
    const audio = new Audio('sound/get_it_on.mp3');
    console.log(audio); // 오디오 객체 확인
    if (audio) {
        audio.addEventListener('canplay', function () {
            audio.play(); // 오디오 파일이 로드된 후에 재생
        });
    } else {
        console.log('오디오 파일을 로드할 수 없습니다.');
    }

    // 팝업과 오버레이 표시
    popup.classList.add('active');
    popup.style.display = 'block';
    overlay.style.display = 'block';
    overlay.style.pointerEvents = 'auto';
}

// 팝업 닫기 함수
function hidePopup() {
    popup.style.transform = "translate(-50%, -50%) rotate(-720deg) scale(0)";
    popup.style.opacity = "0";
    popup.style.pointerEvents = "none";

    setTimeout(() => {
        popup.classList.remove("active");
        popup.style.display = "none";
        overlay.style.display = "none";

        // ✨ HTML에서 직접 정의한 콘텐츠 복사
        const storyContent = document.querySelector(targetContentClass).innerHTML;
        const itemContainer = document.getElementById('itemContainer');
        itemContainer.innerHTML = storyContent;
    }, 800);
}

// 다음 미션으로 이동 함수
function goToNextPage(nextPage) {
    window.location.href = nextPage;
}


// 텍스트 박스 5, 7, 9, 18
function checkAnswer(inputId, correctAnswer, nextPage, popupId, toLower = false) {
    const input = document.getElementById(inputId);
    let answer = input.value.trim().replace(/\s/g, '');
    if (toLower) {
        answer = answer.toLowerCase();
    }

    if (answer === correctAnswer) {
        window.location.href = nextPage;
    } else {
        document.getElementById(popupId).style.display = 'block';
    }
}

function closePopup(popupId, inputId) {
    document.getElementById(popupId).style.display = 'none';
    const inputEl = document.getElementById(inputId);
    if (inputEl) {
        inputEl.value = '';
        inputEl.focus();
    }
}


//12
const buttons = document.querySelectorAll('.toggle-btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
    button.classList.toggle('active');
});
});
function goToNext12() {
const activeButtons = Array.from(buttons)
.filter(btn => btn.classList.contains('active'))
.map(btn => btn.id);

const correct = ['button-a', 'button-b', 'button-d'];
const isCorrect = correct.every(id => activeButtons.includes(id)) && activeButtons.length === 3;

if (isCorrect) {
window.location.href = '13nv.html';
} else {
// 틀렸을 경우 팝업을 띄운다
document.getElementById('MissionPopup12').style.display = 'block';
}
}
function closePopup12() {
// 팝업을 닫는다
document.getElementById('MissionPopup12').style.display = 'none';
buttons.forEach(button => {
button.classList.remove('active');
});
}



//15
const correctSequence = ['↓', '↓', '↓', '→', '→']; // 정답배열
let userSequence = [];

// 버튼 클릭 이벤트
document.getElementById('up').addEventListener('click', () => addArrow('↑'));
document.getElementById('down').addEventListener('click', () => addArrow('↓'));
document.getElementById('left').addEventListener('click', () => addArrow('←'));
document.getElementById('right').addEventListener('click', () => addArrow('→'));

// 화살표 표시 함수
function addArrow(direction) {
// 최대 10개의 화살표만 저장
if (userSequence.length >= 5) {
    userSequence.shift(); // 배열의 첫 번째 요소(가장 오래된 화살표)를 제거
}
// 새 화살표 추가
userSequence.push(direction);
// 화면에 화살표 표시
document.getElementById('arrow-display').innerText = userSequence.join(' ');
}

// 확인 버튼 클릭 시
function goToNext15() {
const recentSequence = userSequence.slice(-correctSequence.length); // 최신 입력만 비교

if (JSON.stringify(recentSequence) === JSON.stringify(correctSequence)) {
    window.location.href = '16iw.html';
} else {
    // 틀렸을 경우 팝업을 띄운다
    document.getElementById('MissionPopup15').style.display = 'block';
}
}
// 팝업 표시 함수
// function showPopup() {
// document.getElementById('popup').style.display = 'flex';
// }
function closePopup15() {
document.getElementById('MissionPopup15').style.display = 'none';
userSequence = [];
document.getElementById('arrow-display').innerText = '';
}
