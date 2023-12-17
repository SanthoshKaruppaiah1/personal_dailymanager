let countdownInterval;
    let countdownHours = 0;
    let countdownMinutes = 0;
    let countdownSeconds = 0;
    const timerAudio = document.getElementById('timerAudio');

    function updateCountdown() {
      if (countdownHours === 0 && countdownMinutes === 0 && countdownSeconds === 0) {
        clearInterval(countdownInterval);
        timerAudio.pause(); // Stop the audio when the timer ends
        document.querySelector('.countdown-container').style.animation = 'none'; // Stop flashing the border
        document.getElementById('startButton').disabled = false;
        document.getElementById('resetButton').disabled = false;
        return;
      }
      if (countdownMinutes === 0 && countdownSeconds === 0) {
        countdownHours--;
        countdownMinutes = 59;
        countdownSeconds = 59;
      } 
      else if (countdownSeconds === 0) {
        countdownMinutes--;
        countdownSeconds = 59;
      } 
      else {
        countdownSeconds--;
      }

      document.getElementById('hours').value = countdownHours.toString().padStart(2, '0');
      document.getElementById('minutes').value = countdownMinutes.toString().padStart(2, '0');
      document.getElementById('seconds').value = countdownSeconds.toString().padStart(2, '0');
    }

    document.getElementById('startButton').addEventListener('click', function () {
      countdownHours = parseInt(document.getElementById('hours').value) || 0;
      countdownMinutes = parseInt(document.getElementById('minutes').value) || 0;
      countdownSeconds = parseInt(document.getElementById('seconds').value) || 0;


      countdownInterval = setInterval(updateCountdown, 1000);
      timerAudio.play(); // Start playing the audio
      document.getElementById('startButton').disabled = true;
      document.getElementById('resetButton').disabled = false;
    });

    document.getElementById('resetButton').addEventListener('click', function () {
      clearInterval(countdownInterval);
      countdownHours = 0;
      countdownMinutes = 0;
      countdownSeconds = 0;
      document.getElementById('hours').value = '00';
      document.getElementById('minutes').value = '00';
      document.getElementById('seconds').value = '00';
      timerAudio.pause(); // Stop the audio on reset
      document.getElementById('startButton').disabled = false;
      document.getElementById('resetButton').disabled = false;
    });
