 let trackArt = document.querySelector(".track-art");
    let trackName = document.querySelector(".track-name");
    let playPauseBtn = document.querySelector(".playpause-track");
    let nextBtn = document.querySelector(".next-track");
    let prevBtn = document.querySelector(".prev-track");

    let trackIndex = 0;
    let isPlaying = false;

    let audio = new Audio();
    audio.src = 'songs/Desaandhiri.mp3';

    

    function loadTrack(index) {
      trackName.textContent = trackList[index].name;
      trackArt.style.backgroundImage = `url('${trackList[index].image}')`;
      audio.src = trackList[index].audio;
      if (isPlaying) {
        audio.play();
      }
    }

    function playpauseTrack() {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      isPlaying = !isPlaying;
    }

    function nextTrack() {
      trackIndex = (trackIndex + 1) % trackList.length;
      loadTrack(trackIndex);
      audio.play(); 
    }

    function prevTrack() {
      trackIndex = (trackIndex - 1 + trackList.length) % trackList.length;
      loadTrack(trackIndex);
      audio.play(); 
    }

    audio.addEventListener("ended", playNextOnEnded);

    function playNextOnEnded() {
      nextTrack();
    }

    document.addEventListener("keydown", function(event) {
  switch (event.code) {
    case "Space":
      playpauseTrack();
      break;
    case "ArrowRight":
      nextTrack();
      break;
    case "ArrowLeft":
      prevTrack();
      break;
    case "ArrowUp":
      increaseVolume();
      break;
    case "ArrowDown":
      decreaseVolume();
      break;
    case "Equal": 
      skipForward();
      break;
    case "Minus": 
      skipBackward();
      break;
  }
});

function skipForward() {
  audio.currentTime = Math.min(audio.duration, audio.currentTime + 5); 
}

function skipBackward() {
  audio.currentTime = Math.max(0, audio.currentTime - 5); 
}

function increaseVolume() {
  audio.volume = Math.min(1, audio.volume + 0.1); 
}

function decreaseVolume() {
  audio.volume = Math.max(0, audio.volume - 0.1); 
}

    loadTrack(trackIndex);