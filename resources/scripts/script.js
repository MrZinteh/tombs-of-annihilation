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

// function fadeOut(el, time) {
//     el.style.opacity = 100;
  
//     var last = +new Date();
//     var tick = function() {
//       el.style.opacity = +el.style.opacity - (new Date() - last) / time;
//       last = +new Date();
  
//       if (+el.style.opacity > 0) {
//         (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
//       }
//     };
  
//     tick();
// }

playerMapElement.addEventListener('click', function (event) {
    if(playerMapElement.style.opacity === 0) {
        fadeIn(playerMapElement, 3000);
    }
    // else {
    //     fadeOut(playerMapElement, 3000);
    // }
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

  
