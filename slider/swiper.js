"use script";

function tourneImage(){
    let monImage=document.getElementById("#carousel").getAttribute("src");
    console.log(monImage);
    switch(monImage){
        case 'mcdo' :
            document.getElementById("caroussel").src="https://upload.wikimedia.org/wikipedia/fr/thumb/e/ea/Mcdonalds_France_2009_logo.svg/1200px-Mcdonalds_France_2009_logo.svg.png";
            break;
        case 'bk' :
            document.getElementById("caroussel").src="https://www.burgerking.fr/logo.jpg";
            break;
        case 'kfc' :
            document.getElementById("caroussel").src="https://villebon2.fr/wp-content/uploads/2022/08/KFC_logo.svg.png";
            break;
        case 'fiveguys' :
            document.getElementById("caroussel").src="https://play-lh.googleusercontent.com/9J22CNSvSu3DB2zSu1lAMBudDZiWYRFuF4NPquRA7Y7Vc425FC7e07wWmuWskozq1M0";
            break;
    }

}
let bt=document.getElementById("caroussel");
bt.addEventListener("click", tourneImage);

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

console.log(bt);
