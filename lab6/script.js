// Массив треков и их обложек
const tracks = [
    { url: "D:\Khama's files\lab6\audio\Don Toliver - No Idea [Official Music Vi.mp3", cover: "D:\Khama's files\lab6\audio\dog-cyber-ll.jpg", name: "Don Toliver - No idea" },
    { url: "D:\Khama's files\lab6\audio\Travis Scott - BUTTERFLY EFFECT (Lyrics).mp3", cover: "D:\Khama's files\lab6\audio\kratos-minimal-artwork-4k-i3.jpg", name: "Travis Scott - Butterfly effect" },
    { url: "D:\Khama's files\lab6\audio\Travis Scott - FE!N ft. Playboi Carti.mp3", cover: "D:\Khama's files\lab6\audio\deadshot-face-minimal-4k-me-3840x2400.jpg", name: "Travis Scott - FE!N" }
  ];
  
  let currentTrackIndex = 0;
  const audio = new Audio(tracks[currentTrackIndex].url);
  const playPauseButton = document.getElementById('play-pause');
  const nextButton = document.getElementById('next');
  const trackCover = document.getElementById('track-cover');
  const trackList = document.getElementById('track-list');
  
  // Обновление обложки и названия
  function updateTrackDisplay() {
    trackCover.src = tracks[currentTrackIndex].cover;
    playPauseButton.textContent = audio.paused ? 'Play' : 'Pause';
  }
  
  // Воспроизведение/Пауза
  playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      playPauseButton.textContent = 'Pause';
    } else {
      audio.pause();
      playPauseButton.textContent = 'Play';
    }
  });
  
  // Переключение на следующий трек
  nextButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    audio.src = tracks[currentTrackIndex].url;
    updateTrackDisplay();
    audio.play();
  });
  
  // Выбор трека из списка
  trackList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
      const trackName = event.target.textContent;
      currentTrackIndex = tracks.findIndex(track => track.name === trackName);
      audio.src = tracks[currentTrackIndex].url;
      updateTrackDisplay();
      audio.play();
    }
  });
  
  // Инициализация
  updateTrackDisplay();
  