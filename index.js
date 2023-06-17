const drumEl = document.querySelectorAll(".drum");

for (i = 0; i < drumEl.length; i++) {
  drumEl[i].addEventListener("click", function () {
    let activeButton = this.textContent;
    makeSound(activeButton);
    animation(activeButton);
  });
}

document.addEventListener("keypress", function (e) {
  let pressButton = e.key;
  makeSound(pressButton);
  animation(pressButton);
});

function makeSound(active) {
  switch (active) {
    case "w":
      let Tom01 = new Audio("sounds/Snr01.mp3");
      Tom01.play();
      break;
    case "a":
      let Snr01 = new Audio("sounds/Snr01.mp3");
      Snr01.play();
      break;
    case "s":
      let Kick01 = new Audio("sounds/Kick01.mp3");
      Kick01.play();
      break;
    case "d":
      let OpHat = new Audio("sounds/Kick01.mp3");
      OpHat.play();
      break;
    case "j":
      let PdHat = new Audio("sounds/Tom01.mp3");
      PdHat.play();
      break;
    case "k":
      let ClHat = new Audio("sounds/ClHat.mp3");
      ClHat.play();
      break;
    case "l":
      let Clap01 = new Audio("sounds/Clap01.mp3");
      Clap01.play();
      break;

    default:
      console.log(activeButton);
  }
}

function animation(active) {
  let activeEl = document.querySelector("." + active);

  activeEl.classList.add("press");

  setTimeout(function () {
    activeEl.classList.remove("press");
  }, 100);
}
