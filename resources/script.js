const mapElement = document.getElementById('chult-map');

mapElement.addEventListener('click', function (event) {
    alert(mapElement.src);
    if(mapElement.src === 'https://media-waterdeep.cursecdn.com/attachments/2/858/0302.jpg') {
        mapElement.src = "https://media-waterdeep.cursecdn.com/attachments/2/937/ph01.jpg";
    }
    else {
        mapElement.src = "https://media-waterdeep.cursecdn.com/attachments/2/858/0302.jpg";
    }
  });