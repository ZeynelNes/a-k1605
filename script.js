const musicPlayer = document.getElementById('musicPlayer');
const voicePlayer = document.getElementById('voicePlayer');
const musicVolume = document.getElementById('musicVolume');
const voiceVolume = document.getElementById('voiceVolume');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

// Müzik listesi
const musicList = ['music1.mp3', 'music2.mp3', 'music3.mp3'];
let currentMusicIndex = 0;

function loadMusic(index) {
  musicPlayer.src = musicList[index];
  musicPlayer.load();
  musicPlayer.play();
}

// Sesleri başlat
musicPlayer.volume = musicVolume.value;
voicePlayer.volume = voiceVolume.value;
voicePlayer.play();
loadMusic(currentMusicIndex);

// Volume kontrolleri
musicVolume.addEventListener('input', () => {
  musicPlayer.volume = musicVolume.value;
});

voiceVolume.addEventListener('input', () => {
  voicePlayer.volume = voiceVolume.value;
});

// Butonlarla müzik geçişi
nextBtn.addEventListener('click', () => {
  currentMusicIndex = (currentMusicIndex + 1) % musicList.length;
  loadMusic(currentMusicIndex);
});

prevBtn.addEventListener('click', () => {
  currentMusicIndex = (currentMusicIndex - 1 + musicList.length) % musicList.length;
  loadMusic(currentMusicIndex);
});

const toggleMusicBtn = document.getElementById('toggleMusic');
const toggleVoiceBtn = document.getElementById('toggleVoice');

toggleMusicBtn.addEventListener('click', () => {
  if (musicPlayer.paused) {
    musicPlayer.play();
    toggleMusicBtn.textContent = '⏸ Duraklat';
  } else {
    musicPlayer.pause();
    toggleMusicBtn.textContent = '▶ Oynat';
  }
});

toggleVoiceBtn.addEventListener('click', () => {
  if (voicePlayer.paused) {
    voicePlayer.play();
    toggleVoiceBtn.textContent = '⏸ Duraklat';
  } else {
    voicePlayer.pause();
    toggleVoiceBtn.textContent = '▶ Oynat';
  }
});
