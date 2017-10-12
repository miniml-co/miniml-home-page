$(function() {
  
  
  new WOW().init();
  
  
  
  Pace.on('done', function() {
    $('#loader #bodymovin').delay(500).fadeOut('slow')
    $('#loader').delay(1000).fadeOut('slow')
  });
  
  
  //animation loader
  var path = '';
  if (window.location.pathname == '/') {
    path = 'data/loader-light.json';
  } else { path = '../data/loader-dark.json'; }
  var animation = bodymovin.loadAnimation({
    container: document.getElementById('bodymovin'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: path
  })

  
  // init scroll parallax
  if (screen.width > 768) { 
    $.stellar({
      hideDistantElements: false,
      horizontalScrolling: false,
    });
  }
  
  

  
  
  // mouse move parallax
  if (screen.width > 768) { 
    $('.mouse-parallax').parallax({
      invertX: false,
      invertY: false,
      scalarX: 20,
      scalarY: 20,
    });
  }
  
  
  // nav panel
  $('.shield').hover(function() {
    $('nav').toggleClass('active')
  });
  $('nav li').mouseover( function(){
    $('nav li').css('opacity',0.4)
    $(this).css('opacity',1)
  });
  $('nav li').mouseout( function(){
    $('nav li').css('opacity',1)
  });
  
  
  
  // main menu actions
  $('.menu-button').click(function() {
    if (!$('header').hasClass('menu-open')) {
      $('header').toggleClass('menu-open');
      $('.menu-overlay').fadeIn(300);
    } else {
      $('header').toggleClass('menu-open');
      $('.menu-overlay').fadeOut(300);
    }
  })
  
  
  // anchor scroll
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
    && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  
  
  

})








$(window).scroll(function(){
  if($(window).scrollTop() > $(window).height() -50) {
    $("header").addClass('slim');
  }
  else {
    $("header").removeClass('slim');
  }
});








