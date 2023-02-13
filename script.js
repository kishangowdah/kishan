const audio = document.getElementById("audio");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");

// Play the audio
function playAudio() {
  audio.play();
  playButton.style.display = "none";
  pauseButton.style.display = "inline-block";
}

// Pause the audio
function pauseAudio() {
  audio.pause();
  playButton.style.display = "inline-block";
  pauseButton.style.display = "none";
}

// Add event listeners to the play and pause buttons
playButton.addEventListener("click", playAudio);
pauseButton.addEventListener("click", pauseAudio);
