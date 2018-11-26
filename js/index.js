var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var bubblyButtonsNo = document.getElementsByClassName("bubbly-button-no");
var bubblyButtonsYes = document.getElementsByClassName("bubbly-button-yes");

for (var i = 0; i < bubblyButtonsNo.length; i++) {
  bubblyButtonsNo[i].addEventListener('click', animateButton, false);
}

for (var i = 0; i < bubblyButtonsYes.length; i++) {
  bubblyButtonsYes[i].addEventListener('click', animateButton, false);
}