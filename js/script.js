const app = () => {
  const song = document.querySelector(".song");
  const playIcon = document.querySelector(".play");
  const outline = document.querySelector(".moving-outline circle");
  const sounds = document.querySelectorAll(".sound-picker button");
  const timeSelect = document.querySelectorAll(".time-select button");
  const timeDisplay = document.querySelector(".time-display");
  const outlineLength = outline.getTotalLength();
  let fakeDuration = 600;

  outline.style.strokeDasharray = outlineLength;
  outline.style.strokeDashoffset = outlineLength;

  // Pick different sound
  sounds.forEach((sound) => {
    sound.addEventListener("click", function () {
      song.src = this.getAttribute("data-sound");
      song.load();
      song.play();
      playIcon.classList.remove("fa-play");
      playIcon.classList.add("fa-pause");
    });
  });

  // Play/Pause toggle
  playIcon.addEventListener("click", () => {
    if (song.paused) {
      song.play();
      playIcon.classList.remove("fa-play");
      playIcon.classList.add("fa-pause");
    } else {
      song.pause();
      playIcon.classList.remove("fa-pause");
      playIcon.classList.add("fa-play");
    }
  });

  // Select time
  timeSelect.forEach((option) => {
    option.addEventListener("click", function () {
      fakeDuration = this.getAttribute("data-time");
      timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
        fakeDuration % 60
      )}`;
    });
  });

  // Animate circle and time
  song.ontimeupdate = () => {
    let currentTime = song.currentTime;
    let elapsed = fakeDuration - currentTime;
    let seconds = Math.floor(elapsed % 60);
    let minutes = Math.floor(elapsed / 60);
    let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
    outline.style.strokeDashoffset = progress;
    timeDisplay.textContent = `${minutes}:${seconds}`;

    if (currentTime >= fakeDuration) {
      song.pause();
      song.currentTime = 0;
      playIcon.classList.remove("fa-pause");
      playIcon.classList.add("fa-play");
    }
  };
};

app();
