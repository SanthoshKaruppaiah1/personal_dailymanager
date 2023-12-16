let playPauseBtn = document.querySelector(".playpause-track");
      let nextBtn = document.querySelector(".next-track");
      let prevBtn = document.querySelector(".prev-track");

      let trackIndex = 0;
      let isPlaying = false;

      let audio = new Audio();
      audio.src = "song1.mp3";

      function loadTrack(index) {
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
        event.preventDefault();
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

      let countdownInterval;
    let countdownHours = 0;
    let countdownMinutes = 0;
    let countdownSeconds = 0;
    const timerAudio = document.getElementById('timerAudio');

    function updateCountdown() {
      if (countdownMinutes === 0 && countdownSeconds === 0) {
        clearInterval(countdownInterval);
        audio.pause();
        timerAudio.play(); 
        setTimeout(function(){
          if(isPlaying)
            audio.play();
        },1000)
        document.getElementById('startButton').disabled = false;
        document.getElementById('resetButton').disabled = false;
        return;
      }
      else if (countdownSeconds === 0) {
        countdownMinutes--;
        countdownSeconds = 59;
      } 
      else {
        countdownSeconds--;
      }
      document.getElementById('minutes').value = countdownMinutes.toString().padStart(2, '0');
      document.getElementById('seconds').value = countdownSeconds.toString().padStart(2, '0');
    }

    document.getElementById('startButton').addEventListener('click', function () {
      countdownMinutes = parseInt(document.getElementById('minutes').value) || 0;
      countdownSeconds = parseInt(document.getElementById('seconds').value) || 0;


      countdownInterval = setInterval(updateCountdown, 1000);
      document.getElementById('startButton').disabled = true;
      document.getElementById('resetButton').disabled = false;
    });

    document.getElementById('resetButton').addEventListener('click', function () {
      clearInterval(countdownInterval);
      countdownMinutes = 0;
      countdownSeconds = 0;
      document.getElementById('minutes').value = '00';
      document.getElementById('seconds').value = '00';
      timerAudio.pause(); // Stop the audio on reset
      document.getElementById('startButton').disabled = false;
      document.getElementById('resetButton').disabled = false;
    });