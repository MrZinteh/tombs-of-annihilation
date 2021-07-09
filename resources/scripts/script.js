const dmMapElement = document.getElementById('chult-map-dm');
const playerMapElement = document.getElementById('chult-map-player');

dmMapElement.addEventListener('click', function (event) {
    alert("clicked!");
    if(dmMapElement.style.opacity === 0) {
        for(let i=0;i<=100;i++) {
            dmMapElement.style.opacity = i;
            playerMapElement.style.opacity = 100-i;
        }
    }
    else {
        for(let i=0;i<=100;i++) {
            dmMapElement.style.opacity = 100-i;
            playerMapElement.style.opacity = i;
        }
    }
  });
