$(document).ready(function(){
  $('.slider').slick({
    dots:false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="slick-next"></button>',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    appendArrows: $('.slider_arrow'),
  });
});
  
// Прокрутка до блока

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menulink => {
    menulink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.perventDefaul();
    }
  }
}

//Кнопка "Вверх"

$(window).scroll(function() {
  let scrolled = $(window).scrollTop();

  console.log(scrolled);

  if(scrolled > 400) {
    $('#back_to_top').addClass('active');
  } else {
    $('#back_to_top').removeClass('active');
  }
});

$('#back_to_top').click(function() {
  $('body,html').animate({scrollTop: 0}, 1000)
});