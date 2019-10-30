// ANIMATION CONTENT ON WEBSITE WHEN SCROLL

AOS.init();


// SLOGAN - Wrap every letter in a span

var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 1550,
    delay: (el, i) => 50 * (i+1)
  })//.add({
    //targets: '.ml3',
    //opacity: 0,
    //duration: 1000,
    //easing: "easeOutExpo",
    //delay: 1000
  //});

//GALLERY

$('[data-fancybox="images"]').fancybox({
  buttons : [ 
    'slideShow',
    'share',
    'zoom',
    'fullScreen',
    'close'
  ],
  thumbs : {
    autoStart : true  
  }

});





// LOAD MORE GALLERY FUNCTION

function loadGallery() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "See all"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "See less"; 
    moreText.style.display = "inline";
  }
}