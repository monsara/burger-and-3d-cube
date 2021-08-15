"use strict";

const cubeInit = () => {
  const cube = document.querySelector('.cube');
  const video = cube.querySelector('.media-box video');
  const videoOverlay = cube.querySelector('.media-box__overlay');

  cube.addEventListener('mouseenter', () => {
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise
        .then(_ => {})
        .catch(error => {
          console.log(error);

          videoOverlay.classList.remove('hide');
        });
      }

      videoOverlay.classList.add('hide');

      console.log('Mouse enter');
  });

  cube.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;

    videoOverlay.classList.remove('hide');

    console.log('Mouse out');
    console.log('Pause');
  });
}

const toggleHamburger = () => {
  const navToggle = document.querySelector('.nav-toggle');
  const barWrapper = navToggle.querySelector('.bar-wrapper');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
  });
}

cubeInit();
toggleHamburger()