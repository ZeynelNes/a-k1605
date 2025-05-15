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
