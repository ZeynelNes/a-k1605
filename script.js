// Müzik oynatma kontrolü
const musicPlayer = document.getElementById('musicPlayer');
const musicVolume = document.getElementById('musicVolume');
const toggleMusic = document.getElementById('toggleMusic');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const voicePlayer = document.getElementById('voicePlayer');
const voiceVolume = document.getElementById('voiceVolume');
const toggleVoice = document.getElementById('toggleVoice');

const changeBgBtn = document.getElementById('changeBgBtn');
const bgPanel = document.getElementById('bgPanel');
const bgThumbnails = document.getElementById('bgThumbnails');

const messagesContainer = document.getElementById('messages');
const messageInput = document.getElementById('messageInput');

const gifContainer = document.getElementById('gifContainer');
const gifImage = document.getElementById('gifImage');

const container = document.getElementById('container');

let isBgPanelOpen = false;

const musicList = [
  "music1.mp3",
  "music2.mp3",
  "music3.mp3",
];
let currentMusicIndex = 0;

// Başlangıçta müzik kaynağını ayarla
musicPlayer.src = musicList[currentMusicIndex];

// Ses ayarları varsayılan
musicVolume.value = musicPlayer.volume;
voiceVolume.value = voicePlayer.volume;

// Müzik kontrol fonksiyonları
toggleMusic.addEventListener('click', () => {
  if (musicPlayer.paused) {
    musicPlayer.play();
    toggleMusic.textContent = '⏸ Duraklat';
  } else {
    musicPlayer.pause();
    toggleMusic.textContent = '▶ Oynat';
  }
});

musicVolume.addEventListener('input', () => {
  musicPlayer.volume = musicVolume.value;
});

prevBtn.addEventListener('click', () => {
  currentMusicIndex = (currentMusicIndex - 1 + musicList.length) % musicList.length;
  musicPlayer.src = musicList[currentMusicIndex];
  musicPlayer.play();
  toggleMusic.textContent = '⏸ Duraklat';
});

nextBtn.addEventListener('click', () => {
  currentMusicIndex = (currentMusicIndex + 1) % musicList.length;
  musicPlayer.src = musicList[currentMusicIndex];
  musicPlayer.play();
  toggleMusic.textContent = '⏸ Duraklat';
});

// Voice ses kontrolü
toggleVoice.addEventListener('click', () => {
  if (voicePlayer.paused) {
    voicePlayer.play();
    toggleVoice.textContent = '⏸ Duraklat';
  } else {
    voicePlayer.pause();
    toggleVoice.textContent = '▶ Oynat';
  }
});

voiceVolume.addEventListener('input', () => {
  voicePlayer.volume = voiceVolume.value;
});

// Arka plan panelini aç/kapat
changeBgBtn.addEventListener('click', () => {
  isBgPanelOpen = !isBgPanelOpen;
  if (isBgPanelOpen) {
    bgPanel.classList.remove('hidden');
  } else {
    bgPanel.classList.add('hidden');
  }
});

// Örnek arka plan görselleri
const bgImages = [
  'bg1.jpg',
  'bg2.jpg',
  'bg3.jpg',
];

// Arka plan küçük resimlerini yükle
bgImages.forEach(src => {
  const img = document.createElement('img');
  img.src = src;
  img.alt = "Background";
  img.addEventListener('click', () => {
    container.style.backgroundImage = `url('${src}')`;
    bgPanel.classList.add('hidden');
    isBgPanelOpen = false;
  });
  bgThumbnails.appendChild(img);
});

// Mesaj gönderme fonksiyonu
function sendMessage() {
  const text = messageInput.value.trim();
  if (!text) return;

  // Kalp şekilli baloncuk oluştur
  const bubble = document.createElement('div');
  bubble.className = 'reply-bubble';
  bubble.textContent = text;

  // Mesaj container'a ekle
  messagesContainer.appendChild(bubble);

  // Scroll en alta inmesi için
  messagesContainer.scrollTop = messagesContainer.scrollHeight;

  messageInput.value = '';

  // Love bubble animasyonu da ekle (isteğe bağlı)
  createLoveBubble(text);
}

// Love bubble animasyonu
const loveBubblesContainer = document.createElement('div');
loveBubblesContainer.id = 'loveBubblesContainer';
document.body.appendChild(loveBubblesContainer);

function createLoveBubble(text) {
  const loveBubble = document.createElement('div');
  loveBubble.className = 'love-bubble';
  loveBubble.style.left = Math.random() * (window.innerWidth - 200) + 'px';
  loveBubble.style.top = window.innerHeight + 'px';
  loveBubble.textContent = text;

  loveBubblesContainer.appendChild(loveBubble);

  setTimeout(() => {
    loveBubble.style.opacity = '0';
    loveBubble.style.transform = 'translateY(-150px) scale(1.1)';
  }, 50);

  setTimeout(() => {
    loveBubblesContainer.removeChild(loveBubble);
  }, 8000);
}

// Mesaj gönderme input enter tuşu ile
messageInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

// GIF gösterme örneği fonksiyonu
function showGif(url) {
  gifImage.src = url;
  gifContainer.style.display = 'block';
  setTimeout(() => {
    gifContainer.style.display = 'none';
    gifImage.src = '';
  }, 5000); // 5 saniye göster
}

// Örnek: Mesaj gönderildiğinde rastgele GIF göster
// Bu kısmı istersen sen değiştirip, API veya başka kaynakla bağlayabilirsin
function randomGif() {
  const gifs = [
    'https://media.giphy.com/media/l0MYB8Ory7Hqefo9a/giphy.gif',
    'https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif',
    'https://media.giphy.com/media/xT0BKqhdlKCxCNsVTq/giphy.gif',
  ];
  return gifs[Math.floor(Math.random() * gifs.length)];
}

function sendMessageWithGif() {
  sendMessage();
  showGif(randomGif());
}

// Butona onclick fonksiyonunu burada yeniden bağla
document.querySelector('#messagePanel button').onclick = sendMessageWithGif;
