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
    const reply = `Balım, Nesrinim, Aşkım, Hayatım, Birtanem…
Seninle geçen her an, kalbimin en derinlerine dokunan bir mucize gibi. Varlığın, karanlık gecelerde parlayan bir yıldız gibi yolumu aydınlatıyor. Senin sevgini hissetmek, ruhumu sarıp sarmalayan en güzel melodi gibi. Her baktığımda, gözlerinde sonsuz bir huzur ve tarifsiz bir aşk buluyorum. Gülüşün, baharın en güzel çiçeği gibi içime umut serpiyor. Sesin, kalbimde en sıcak duyguları uyandıran bir melodi gibi yankılanıyor.
Ellerini tuttuğumda, dünyadaki tüm anlamın avuçlarımın içinde olduğunu hissediyorum. Sen benim en büyük şansım, en güzel düşüm, en özel hikâyemsin. Seninle birlikte olmak, zamanın durduğu, yalnızca aşkın konuştuğu bir masal gibi. Seninle her gün yeni bir başlangıç, her an tarifsiz bir mutluluk.
Senin varlığın, yalnızca kalbimi değil, ruhumu da tamamlıyor. Sensiz bir dünya eksik, renksiz, sessiz… Çünkü sen benim içimde atan en güçlü ritim, yüreğimin en derin yankısı, hayatımın en anlamlı şarkısısın.
Ve bil ki, ne kadar anlatırsam anlatayım, hiçbir zaman kelimelerle anlaşılmaz. Çünkü senin sevgini anlatmaya hiçbir kelime yetmez. 💖
`;
    addReply(reply);
  } else if (lower === "1605") {
    const reply = `Bugün bizim için çok özel bir gün. Hem senin doğum günün hem de tam 1 yıldır hayatımda olduğun, birlikte yürüdüğümüz o güzel yolculuğun başlangıç yıldönümü. Sana nasıl teşekkür etsem, hangi kelimelerle sevgimi anlatsam bilmiyorum. Hayatıma girdiğin o ilk günden beri her şey daha renkli, daha anlamlı ve daha huzurlu. Senin gülüşünle sabahlarım aydınlanıyor, sesinle günüm güzelleşiyor. Varlığın bana güven veriyor, kalbime dokunduğun her an içimi sımsıcak bir sevgi sarıyor ❤. Bazen sadece yanımda olman bile yetiyor iyi hissetmeme. Seninle geçirdiğim her dakika, her an, benim için bir ömre bedel. Birlikte güldük, birlikte sustuk, birlikte büyüdük. Seninle bir yıl geçmiş ama sanki bir ömür gibi dolu dolu, anlamlı ve gerçekti. Seninle nice senelere ulaşmak, hayalini kurduğumuz o geleceği adım adım inşa etmek istiyorum. Doğum günün kutlu olsun aşkım, iyi ki doğdun, iyi ki varsın, iyi ki benimlesin ❤. Seni her şeyden çok seviyorum.

Seninle geçirdiğim bu bir yıl, bana gerçek sevgiyi, sadakati ve huzuru öğretti. Her tartışmamızda bile daha çok bağlandım sana, her gülüşünde bir kez daha âşık oldum. Bana gösterdiğin sabır, verdiğin sevgi, kurduğun o güvenli alan için sonsuz teşekkür ederim. Seninle geçirdiğim zamanlarda kendimi daha çok tanıdım, seninle birlikte kendimi de sevmeyi öğrendim. Kalbimin en derin yerinde taşıyorum seni, öyle bir yer ki kimse dokunamaz, kimse silemez. Hayat bazen zor, bazen yorucu, ama sen yanımdayken her şey kolay geliyor 🍯. Omzuna yaslandığımda dünyanın tüm yükü hafifliyor, gözlerinin içine baktığımda geleceği görüyorum. Ve inan bana, seninle kurduğum hayallerin bir tanesinden bile vazgeçmeye hiç niyetim yok. Ne yaşarsak yaşayalım, ben hep senin yanında olacağım; elini tuttuğum ilk gün verdiğim sözü tutacağım: seni hep seveceğim, koruyacağım, destekleyeceğim ❤.

Sen sadece sevgilim değil, aynı zamanda en yakın dostum, sırdaşım, hayat ortağımsın. Birlikte öğrendik birbirimizi sevmeyi, anlamayı, sarılmayı. Senin gözlerindeki ışığı gördüğümde kendimi en doğru yerde hissediyorum. İyi ki seni tanımışım, iyi ki kalbimde sana yer açmışım. Bu yıl dönümümüz ve doğum günün, bizim için bir başlangıç sadece. Daha yaşayacak o kadar çok anımız, paylaşacak o kadar çok gülüşümüz var ki. Seninle her geçen gün biraz daha tamamlanıyorum. Seni çok seviyorum ve her geçen gün daha da çok seveceğim ❤.

Sen hayatıma sadece sevgi katmadın, beni ben yapan tüm parçaları onardın. Kırık yerlerimi fark ettin, tek tek sarıp sarmaladın. Geçmişte içimde biriktirdiğim kırgınlıkları, umutsuzlukları, yalnızlıkları birer birer yok ettin. Seninle birlikte içimdeki karanlığa ilk kez güneş doğdu. En kötü anlarımda yanımda oldun, sessizce sarıldın, bazen hiçbir şey demeden varlığını hissettirdin ve o bile yetti iyileşmeme. Sadece beni değil, ailemle olan bağımı da onardın. Belki farkında bile değildin ama senin sevgin, anlayışın ve sabrın sayesinde ailemle aram düzeldi, yeniden birbirimizi bulduk. Senin varlığın, hem kalbimi hem hayatımı toparladı. Seni tarif etmek zor çünkü sen sadece bir insan değilsin benim için, sen benim mucizemsin bebi 🍯. İyi ki geldin, iyi ki benim oldun. Her şeyinle, her halinle. seni deliler gibi seviyorum ❤.`;
    addReply(reply);
  }

  input.value = "";
}

// Yeni addReply fonksiyonu:
function addReply(text) {
  const messages = document.getElementById('messages');
  const replyElement = document.createElement('div');
  replyElement.classList.add('reply-bubble');  // yeni class
  replyElement.textContent = text;

  // Tıklanınca balon kapanacak (silinecek)
  replyElement.addEventListener('click', () => {
    replyElement.remove();
  });

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
