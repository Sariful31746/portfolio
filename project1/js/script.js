// MixitUp

var mixer = mixitup('.grid-portfolio-container');

// Hamberger

function openMenu() {
  document.getElementById('navbar').style.height = "100%";
}

function closeMenu() {
  document.getElementById('navbar').style.height = "0";
}

//smooth scroll

$(function(){
  $('.menu-item a, .arrow a').on('click', function(){
    $('html, body').animate({
       scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
    return false;
  });
});