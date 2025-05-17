const container = document.getElementById('container');
const changeBgBtn = document.getElementById('changeBgBtn');

const backgrounds = [
  'background1.jpg', 'background2.jpg', 'background3.jpg',
  'background4.jpg', 'background5.jpg', 'background6.jpg',
  'background7.jpg', 'background8.jpg', 'background9.jpg',
  'background10.jpg', 'background11.jpg', 'background12.jpg',
  'background13.jpg', 'background14.jpg', 'background15.jpg',
  'background16.jpg', 'background17.jpg', 'background18.jpg',
  'background19.jpg'
];
let currentBgIndex = 0;

function changeBackground() {
  container.style.backgroundImage = `url(${backgrounds[currentBgIndex]})`;
  currentBgIndex = (currentBgIndex + 1) % backgrounds.length;
}
changeBackground();
setInterval(changeBackground, 5000);
changeBgBtn.addEventListener('click', changeBackground);

const musicPlayer = document.getElementById('musicPlayer');
const voicePlayer = document.getElementById('voicePlayer');
const musicVolume = document.getElementById('musicVolume');
const voiceVolume = document.getElementById('voiceVolume');
const toggleMusicBtn = document.getElementById('toggleMusic');
const toggleVoiceBtn = document.getElementById('toggleVoice');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

const musicList = ['music1.mp3', 'music2.mp3', 'music3.mp3'];
let currentMusicIndex = 0;

function loadMusic(index) {
  musicPlayer.src = musicList[index];
  musicPlayer.load();
  musicPlayer.play();
}
musicPlayer.volume = musicVolume.value;
voicePlayer.volume = voiceVolume.value;
voicePlayer.play();
loadMusic(currentMusicIndex);

musicVolume.addEventListener('input', () => {
  musicPlayer.volume = musicVolume.value;
});
voiceVolume.addEventListener('input', () => {
  voicePlayer.volume = voiceVolume.value;
});
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
nextBtn.addEventListener('click', () => {
  currentMusicIndex = (currentMusicIndex + 1) % musicList.length;
  loadMusic(currentMusicIndex);
});
prevBtn.addEventListener('click', () => {
  currentMusicIndex = (currentMusicIndex - 1 + musicList.length) % musicList.length;
  loadMusic(currentMusicIndex);
});

function sendMessage() {
  const input = document.getElementById('messageInput');
  const messages = document.getElementById('messages');
  const message = input.value.trim();
  if (!message) return;

  const msgElement = document.createElement('div');
  msgElement.textContent = "❤️ " + message;
  messages.appendChild(msgElement);
  messages.scrollTop = messages.scrollHeight;

  const lower = message.toLowerCase();
  if (lower.includes("aşk")) showGif("gifs/ask.gif");
  else if (lower.includes("bal")) showGif("gifs/bal.gif");
  else if (lower.includes("abitim")) showGif("gifs/abitim.gif");

  input.value = "";
}

function showGif(url) {
  const gifContainer = document.getElementById('gifContainer');
  const gifImage = document.getElementById('gifImage');
  gifImage.src = url;
  gifContainer.style.display = 'block';
  setTimeout(() => {
    gifContainer.style.display = 'none';
  }, 4000);
}
