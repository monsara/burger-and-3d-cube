"use strict";var cubeInit=function(){var e=document.querySelector(".cube"),o=e.querySelector(".media-box video"),t=e.querySelector(".media-box__overlay");e.addEventListener("mouseenter",function(){var e=o.play();void 0!==e&&e.then(function(e){}).catch(function(e){console.log(e),t.classList.remove("hide")}),t.classList.add("hide"),console.log("Mouse enter")}),e.addEventListener("mouseleave",function(){o.pause(),o.currentTime=0,t.classList.remove("hide"),console.log("Mouse out"),console.log("Pause")})},toggleHamburger=function(){var e=document.querySelector(".nav-toggle");e.querySelector(".bar-wrapper");e.addEventListener("click",function(){e.classList.toggle("open")})};cubeInit(),toggleHamburger();