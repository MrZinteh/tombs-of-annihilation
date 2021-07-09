const dmMapElement = document.getElementById('chult-map-dm');
const playerMapElement = document.getElementById('chult-map-player');

function fadeIn(el, time) {
    el.style.opacity = 0;
  
    var last = +new Date();
    var tick = function() {
      el.style.opacity = +el.style.opacity + (new Date() - last) / time;
      last = +new Date();
  
      if (+el.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      }
    };
  
    tick();
}

function fadeOut(el, time) {
    el.style.opacity = 1;
  
    var last = +new Date();
    var tick = function() {
      el.style.opacity = +el.style.opacity - (new Date() - last) / time;
      console.log(+el.style.opacity);
      last = +new Date();
  
      if (+el.style.opacity > 0) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      }
    };
  
    tick();
}

let toggle = false;

playerMapElement.addEventListener('click', function (event) {
    if(toggle === false) {
        fadeOut(playerMapElement, 3000);
        toggle = true;
    }
    else {
        fadeIn(playerMapElement, 3000);
        toggle = false;
    }
});

dmMapElement.addEventListener('click', function (event) {
    if(toggle === false) {
        fadeOut(playerMapElement, 3000);
        toggle = true;
    }
    else {
        fadeIn(playerMapElement, 3000);
        toggle = false;
    }
});

// playerMapElement.addEventListener('click', function (event) {
//     if(dmMapElement.style.opacity === 0) {
//         for(let i=0;i<=100;i++) {
//             dmMapElement.style.opacity = i;
//             playerMapElement.style.opacity = 100-i;
//         }
//     }
//     else {
//         for(let i=0;i<=100;i++) {
//             dmMapElement.style.opacity = 100-i;
//             playerMapElement.style.opacity = i;
//         }
//     }
//   });

  
