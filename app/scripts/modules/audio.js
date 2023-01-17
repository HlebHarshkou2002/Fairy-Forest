//Музыка на сайте
let musicIcon = document.getElementById("music__icon");
const audio = new Audio("./audio/forest-audio-ready.mp3");
audio.currentTime = 1.0;
// audio.volume = 0;

function timeout(ms) {
  return new Promise((resolve) =>
    setTimeout(() => {
      audio.value = -0.1;
      resolve();
    }, ms)
  );
}

async function onClick() {
  musicIcon.classList.toggle("music__icon-active");
  if (audio.paused) {
    audio.volume = 1;
    audio.play();
  } else {
    debugger;
    while (!audio.value) {
      await timeout(100);
    }
    audio.pause();
  }

  // musicIcon.classList.toggle("music__icon-active");
  // if (audio.paused) {
  //   audio.play();
  //   let myInterval = setInterval(() => {
  //     setTimeout(() => {
  //       clearInterval(myInterval);
  //     }, 900);
  //     audio.volume += 0.1;
  //   }, 100);
  // } else {
  //   let myInterval = setInterval(() => {
  //     setTimeout(() => {
  //       clearInterval(myInterval);
  //       audio.pause();
  //     }, 900);
  //     audio.volume -= 0.1;
  //   }, 100);
  // }
}
