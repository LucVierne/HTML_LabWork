const array = ["assets/img/photo/Andromede.jpg", "assets/img/photo/buran landing.jpg", "assets/img/photo/circum.jpg", "assets/img/photo/SLS_Falcon9.jpg", "assets/img/photo/Tcherno.jpg"];
let a = 0;

function changeImg(value) {
    let imageSrc;

    if (value == 'next') {
        a++;
        if (a>4) {
            a=0;
        }
        imageSrc = array[a];
    } else if (value == 'prev') {
        a--;
        if (a<0) {
            a=4;
        }
        imageSrc = array[a];
    }

    document.getElementById("carousel").src = imageSrc;
  }