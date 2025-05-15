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

const container = document.querySelector('.container');

const backgrounds = [
  'background1.jpg',
  'background2.jpg',
  'background3.jpg',
  'background4.jpg',
  'background5.jpg',
  'background6.jpg',
  'background7.jpg',
  'background8.jpg',
  'background9.jpg',
  'background10.jpg',
  'background11.jpg',
  'background12.jpg',
  'background13.jpg',
  'background14.jpg',
  'background15.jpg',
  'background16.jpg',
  'background17.jpg',
  'background18.jpg',
  'background19.jpg',
  
];

let currentBgIndex = 0;

function changeBackground() {
  container.style.backgroundImage = `url(${backgrounds[currentBgIndex]})`;
  currentBgIndex = (currentBgIndex + 1) % backgrounds.length;
}

// İlk arka planı ayarla
changeBackground();

// Her 5 saniyede arka planı değiştir
setInterval(changeBackground, 5000);

