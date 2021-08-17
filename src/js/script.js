"use strict";

const cubeInit = () => {
  const cube = document.querySelector('.cube');
  const video = cube.querySelector('.media-box video');
  const videoOverlay = cube.querySelector('.media-box__overlay');
  const unmuteBtn = cube.querySelector('.unmute-button');

  const showVideoOverlay = () => videoOverlay.classList.remove('hide');
  const hideVideoOverlay = () => videoOverlay.classList.add('hide');;
  const showUnmuteBtn = () => (unmuteBtn.style.opacity = 1);
  const hideUnmuteBtn = () => (unmuteBtn.style.opacity = 0);
  
  cube.addEventListener('mouseenter', () => {
    if (!video) {
      return;
    }

    video.muted = true;
    video.play();

    const isVideoLoaded = video.readyState === 4;

    if (isVideoLoaded) {
      hideVideoOverlay();
      showUnmuteBtn();
    }

    // const playPromise = video.play();

    // if (playPromise !== undefined) {
    //   playPromise
    //     .then(_ => {})
    //     .catch(error => {
    //       console.log(error);

    //       showVideoOverlay();
    //     });
    // }

    // hideVideoOverlay();
  });

  cube.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
    showVideoOverlay();
    hideUnmuteBtn();
  });

  unmuteBtn.addEventListener('click', (e) => {
    const mediaBox = e.currentTarget.parentElement;
    const isPressed = mediaBox.querySelector('.unmute-button--pressed');

    if (!isPressed) {
      video.muted = false;
      unmuteBtn.classList.add('unmute-button--pressed');
      return;
    }
    
    unmuteBtn.classList.remove('unmute-button--pressed');
    video.muted = true;
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