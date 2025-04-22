
window.onload = function () {
    storyList.forEach((story) => {
        const el = document.querySelector(`.${story.id}`);
        if (el) {
            el.innerHTML = story.content;
        }
    });
};


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


const popup = document.querySelector('.gIpopup');
const overlay = document.querySelector('.overlay');


function opengIPopup() {
    const audio = new Audio('sound/get_it_on.mp3');
    console.log(audio);
    if (audio) {
        audio.addEventListener('canplay', function () {
            audio.play();
        });
    } else {
        console.log('오디오 파일을 로드할 수 없습니다.');
    }
    popup.classList.add('active');
    popup.style.display = 'block';
    overlay.style.display = 'block';
    overlay.style.pointerEvents = 'auto';
}


function hidePopup() {
    popup.style.transform = "translate(-50%, -50%) rotate(-720deg) scale(0)";
    popup.style.opacity = "0";
    popup.style.pointerEvents = "none";

    setTimeout(() => {
        popup.classList.remove("active");
        popup.style.display = "none";
        overlay.style.display = "none";

        const storyContent = document.querySelector(targetContentClass).innerHTML;
        const itemContainer = document.getElementById('itemContainer');
        itemContainer.innerHTML = storyContent;
    }, 800);
}


function goToNextPage(nextPage) {
    window.location.href = nextPage;
}



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
        window.location.href = 'page13.html';
        } else {
            document.getElementById('MissionPopup12').style.display = 'block';
            }
            }
            function closePopup12() {
            document.getElementById('MissionPopup12').style.display = 'none';
            buttons.forEach(button => {
            button.classList.remove('active');
            });
            }
    

const correctSequence = ['↓', '↓', '↓', '→', '→'];
let userSequence = [];
document.getElementById('up').addEventListener('click', () => addArrow('↑'));
document.getElementById('down').addEventListener('click', () => addArrow('↓'));
document.getElementById('left').addEventListener('click', () => addArrow('←'));
document.getElementById('right').addEventListener('click', () => addArrow('→'));

function addArrow(direction) {
    if (userSequence.length >= 5) {
        userSequence.shift();
    }
    userSequence.push(direction);
    document.getElementById('arrow-display').innerText = userSequence.join(' ');
    }


function goToNext15() {
    const recentSequence = userSequence.slice(-correctSequence.length);
    if (JSON.stringify(recentSequence) === JSON.stringify(correctSequence)) {
        window.location.href = 'page16.html';
    } else {
        document.getElementById('MissionPopup15').style.display = 'block';
    }
}
function closePopup15() {
    document.getElementById('MissionPopup15').style.display = 'none';
    userSequence = [];
    document.getElementById('arrow-display').innerText = '';
    }
