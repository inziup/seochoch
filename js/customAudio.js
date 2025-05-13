const audio = document.getElementById('customAudio');
const playPauseBtn = document.getElementById('playPauseBtn');
const seekBar = document.getElementById('seekBar');
const volumeBtn = document.getElementById('volumeBtn');
const volumeSlider = document.getElementById('volumeSlider');
const volumeControl = document.getElementById('volumeControl');

// 재생/일시정지
playPauseBtn.addEventListener('click', () => {
if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = '■';
} else {
    audio.pause();
    playPauseBtn.textContent = '▶';
}
});

// 오디오가 끝났을 때
audio.addEventListener('ended', () => {
playPauseBtn.textContent = '▶';
seekBar.value = 0;
});

// 진행 바 업데이트
audio.addEventListener('timeupdate', () => {
seekBar.max = audio.duration;
seekBar.value = audio.currentTime;
});

// 탐색 바 이동
seekBar.addEventListener('input', () => {
audio.currentTime = seekBar.value;
});

// 속도 변경 차단
audio.addEventListener('ratechange', () => {
if (audio.playbackRate !== 1) {
    audio.playbackRate = 1;
}
});

// 우클릭 방지
document.addEventListener('contextmenu', e => {
if (e.target === audio) e.preventDefault();
});

// 볼륨 버튼 클릭 시 슬라이더 토글
volumeBtn.addEventListener('click', () => {
volumeSlider.style.display = volumeSlider.style.display === 'block' ? 'none' : 'block';
});

// 볼륨 슬라이더 조절
volumeControl.addEventListener('input', () => {
audio.volume = volumeControl.value;
});

// 다른 곳 클릭 시 슬라이더 닫기
document.addEventListener('click', (e) => {
if (!volumeBtn.contains(e.target) && !volumeSlider.contains(e.target)) {
    volumeSlider.style.display = 'none';
}
});
