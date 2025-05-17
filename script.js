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
    const reply = `Nesrinim, balım, bir tanem, kalbimin en güzel şarkısı, ruhumun huzuru... Senin varlığın, hayatımın en büyük anlamı, en değerli armağanı. Seninle geçen her an, ruhuma dokunan bir şiir gibi, senin sesin kalbimin en tatlı melodisi, dokunuşun ise yüreğimi sarıp sarmalayan bir rüya. Senin gözlerinde kaybolmak, yıldızların sonsuz ışığında huzur bulmak gibi; bakışların ruhumu aydınlatan en güzel ışık, en derin anlam. Hayat seninle daha renkli, daha güzel, daha yaşanası bir masal.
Seninle her an, birlikte olduğumuz her saniye, benim için bir mucize. Sensiz bir dünya, anlamsız bir kış gecesi gibi; sensiz bir hayat, eksik kalmış bir hikâye... Senin varlığın, kalbimi sıcak tutan bir bahar güneşi, yüreğimi mutlulukla dolduran en güzel sevda. Seninle konuşmak, senin gülüşünü izlemek, senin ellerini tutmak, benim en büyük mutluluğum. Yalnızca seni düşündüğümde bile içimde çiçekler açıyor, sevgim her an daha da büyüyor. Bütün kelimeler seni anlatmaya yetersiz, bütün duygular seninle tamamlanıyor.
Sana olan sevgim, okyanuslar kadar sonsuz, gökyüzü kadar geniş, güneşin ışığı gibi sıcak ve parıldayan bir his. Sen benim en güzel hayalim, en özel gerçeğim, kalbimin en derin yerinde hep parlayan bir ışık. Sonsuza kadar seninle olmak, sevgimi her an daha da büyütmek, her güne seninle başlamak benim en büyük dileğim.
Seni sevmenin tarifini yapamam, çünkü bu duygu hiçbir kelimeyle anlatılamaz. Ama tek bildiğim şey şu: Seninle birlikte olduğum sürece, her anım bir mutluluk, her nefesim bir anlam. Sen benim ruh eşim, kalbimin sonsuz sevgisi, hayatımın en büyük mucizesisin. Sonsuz sevgimin adı, kalbimin tek sahibi... Nesrinim, balım, bir tanem... Seni her şeyden çok seviyorum.`;
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
