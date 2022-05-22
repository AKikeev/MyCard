$(document).ready(function(){
  $('.slider').slick({
    dots:false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="slick-next"></button>',
    prevArrow: '<button type="button" class="slick-prev"></button>',
    appendArrows: $('.slider_arrow'),

    responsive:[
      {
        breakpoint:600,
        settings:{
          slidesToShow:1
        }
      },
      {
        breakpoint:1024,
        settings:{
          slidesToShow:2
        }
      }
    ]
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



//Burger menu


$(document).ready(function(){
  $('.burger-menu__button').click(function(event){
    $('.burger-menu__nav, .burger-menu').toggleClass('burger-menu__nav_active, burger-menu_active');
    $('body').toggleClass('lock');
  })
})


//Tabs 

const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItem = document.querySelectorAll(".tabs__item");


tabsBtn.forEach(function(item){
  item.addEventListener("click", function(){
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    tabsBtn.forEach(function(item) {
      item.classList.remove('active');
    });

    tabsItem.forEach(function(item) {
      item.classList.remove('active');
    });

    currentBtn.classList.add('active');
    currentTab.classList.add('active');
  });
});