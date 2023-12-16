const audio = document.getElementById("audio");
      const playlistElement = document.getElementById("playlist");
      const currentSongImage = document.getElementById("current-song-image");
      const currentSongTitle = document.getElementById("current-song-title");
      let isPlaying=false;

      playlist.forEach((song, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
                      <img src="${song.image}" alt="${song.name} Image">
                      <span>${song.name}</span>
                  `;
        listItem.addEventListener("click", () => playSong(song));
        playlistElement.appendChild(listItem);
      });

      function playSong(song) {
        audio.src = song.audio;
        audio.play();
        let isPlaying=true;
        currentSongImage.src = song.image;
        currentSongTitle.textContent = song.name;
      }
      document.addEventListener("keydown", function(event) {
  switch (event.code) {
    case "Space":
      if (isPlaying) {
          audio.pause();
        } else {
          audio.play();
        }
        isPlaying = !isPlaying;
      break;
    case "ArrowUp":
      increaseVolume();
      break;
    case "ArrowDown":
      decreaseVolume();
      break;
    case "ArrowRight": 
      skipForward();
      break;
    case "ArrowLeft": 
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

var fmax=false;
  function full(){
    if (fmax){
      document.getElementById("playlist-container").style.visibility="visible";
      document.getElementById("player-container").style.width="50%"
      document.getElementById("current-song-image").style.width="500px";
      document.getElementById("current-song-image").style.height="500px";
      document.getElementById("audio").style.width="48%";
      document.getElementById("audio").style.left="51%";
      document.getElementById("audio").style.top="87%"; 
      document.getElementById("current-song-image").style.position="initial";
      document.getElementById("current-song-title").style.top="50px"
      document.getElementById("current-song-title").style.left="57%" 
      document.getElementById("head2").style.visibility="visible";
      fmax=false;
    }
    else{
      document.getElementById("playlist-container").style.visibility="hidden";
      document.getElementById("player-container").style.width="100%";
      document.getElementById("current-song-image").style.width="600px";
      document.getElementById("current-song-image").style.height="600px";
      document.getElementById("current-song-image").style.position="absolute";
      document.getElementById("current-song-image").style.left="25%";
      document.getElementById("current-song-image").style.top="5px";
      document.getElementById("audio").style.width="98%";  
      document.getElementById("audio").style.left="0.5%";
      document.getElementById("audio").style.top="90%";
      document.getElementById("current-song-title").style.top="0"
      document.getElementById("current-song-title").style.left="25%";
      document.getElementById("head2").style.visibility="hidden";
      fmax=true;
    }


  }