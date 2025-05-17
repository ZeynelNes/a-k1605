const container = document.getElementById('container');
const bgPanel = document.getElementById('bgPanel');
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

// Arka plan sabit toz pembe yapılacak:
container.style.backgroundColor = '#ffd1dc';  // toz pembe sabit arkaplan
container.style.backgroundImage = 'none';     // arkaplan resmi kaldırıldı

// Sadece bgPanel değişecek:
function changeBackground() {
  bgPanel.style.backgroundImage = `url(${backgrounds[currentBgIndex]})`;
  currentBgIndex = (currentBgIndex + 1) % backgrounds.length;
}
changeBackground();
changeBgBtn.addEventListener('click', changeBackground);

// İstersen, otomatik değişim iptal edildi. İstersen aşağıdaki satırı açabilirsin:
// setInterval(changeBackground, 5000);

// ----- Geri kalan kod aynı -----

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

  // Kullanıcının mesajını göster
  const userMsgElement = document.createElement('div');
  userMsgElement.textContent = "❤️ " + message;
  messages.appendChild(userMsgElement);
  messages.scrollTop = messages.scrollHeight;

  const lower = message.toLowerCase();

  // Gif gösterme orijinal işlevi
  if (lower.includes("aşk")) showGif("gifs/ask.gif");
  else if (lower.includes("bal")) showGif("gifs/bal.gif");
  else if (lower.includes("abitim")) showGif("gifs/abitim.gif");

  // Özel mesajlar için cevap verme kısmı
  if (lower === "abitim beni ne kadar seviyor") {
    const reply = `Nesrinim, balım, ... (uzun mesaj buraya gelecek)`;
    addReply(reply);
  } else if (lower === "1605") {
    const reply = `Bugün bizim için çok özel bir gün... (uzun mesaj buraya gelecek)`;
    addReply(reply);
  }

  input.value = "";
}

function addReply(text) {
  const messages = document.getElementById('messages');
  const replyElement = document.createElement('div');
  replyElement.textContent = text;
  messages.appendChild(replyElement);
  messages.scrollTop = messages.scrollHeight;
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

// ----------- Kalp Baloncukları İçin Eklenen Kod -----------

const loveBubblesContainer = document.createElement('div');
loveBubblesContainer.id = 'loveBubblesContainer';
document.body.appendChild(loveBubblesContainer);

const loveMessages = [
  "Seni sonsuza dek seveceğim ❤️",
  "Kalbim hep seninle atıyor 💖",
  "Sen benim en değerli hazinemsin 💎",
  "Sevginle hayatım güzelleşiyor 🌸",
  "Seninle her an bir mucize 🌟",
  "Aşkımız yıldızlar kadar parlak ✨",
  "Seninle tamamlanıyorum 💞",
  "Seni düşündükçe gülümsüyorum 😊",
  "Kalbimin en tatlı melodisi sensin 🎶",
  "Birlikte her şey mümkün ❤️‍🔥",
  "Sen benim en güzel rüyamsın 🌙",
  "Sevginle güç buluyorum 💪",
  "Seninle hayat bir masal gibi 📖",
  "Kalbim sana ait 💘",
  "Sonsuzluğa birlikte yürüyelim 🚶‍♂️🚶‍♀️",
  "Sen benim huzurumsun 🕊️",
  "Aşkımızı kimse silemez 🛡️",
  "Seninle hayatım tamamlandı 🎯",
  "Kalbim hep senin yanında 💗",
  "Sen benim en güzel baharımsın 🌷"
];

function createLoveBubble() {
  const bubble = document.createElement('div');
  bubble.classList.add('love-bubble');

  // Rasgele sevgi mesajı seç
  const message = loveMessages[Math.floor(Math.random() * loveMessages.length)];
  bubble.textContent = message;

  // Ekranın kenarlarında rastgele pozisyonlar:
  let side = Math.random() < 0.5 ? 'left' : 'right';
  let xPercent = side === 'left' 
    ? Math.random() * 10
    : 90 + Math.random() * 10;
  let yPercent = Math.random() * 90;

  bubble.style.left = xPercent + '%';
  bubble.style.top = yPercent + '%';

  loveBubblesContainer.appendChild(bubble);

  // 7-8 saniye sonra baloncuk kaybolsun
  setTimeout(() => {
    bubble.classList.add('fade-out');
    setTimeout(() => {
      bubble.remove();
    }, 1000);
  }, 7000 + Math.random() * 1000);
}

// Sürekli baloncuk çıkar (2 saniyede bir)
setInterval(createLoveBubble, 2000);
