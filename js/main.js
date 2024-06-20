$(document).ready(function(){

  new WOW().init();

	var doughnutData, myDoughnut;

	doughnutData = [
    {
      value: 80,
      color: '#1abc9c'
    },
    {
      value: 20,
      color: '#ecf0f1'
    }
  ];
  myDoughnut = new Chart(document.getElementById('jquery').getContext('2d')).Doughnut(doughnutData);

  doughnutData = [
    {
      value: 80,
      color: '#1abc9c'
    },
    {
      value: 20,
      color: '#ecf0f1'
    }
  ];
  myDoughnut = new Chart(document.getElementById('bootstrap').getContext('2d')).Doughnut(doughnutData);

  doughnutData = [
    {
      value: 60,
      color: '#1abc9c'
    },
    {
      value: 40,
      color: '#ecf0f1'
    }
  ];
  myDoughnut = new Chart(document.getElementById('vue').getContext('2d')).Doughnut(doughnutData);

  doughnutData = [
    {
      value: 90,
      color: '#1abc9c'
    },
    {
      value: 10,
      color: '#ecf0f1'
    }
  ];
  myDoughnut = new Chart(document.getElementById('html').getContext('2d')).Doughnut(doughnutData);

  doughnutData = [
    {
      value: 50,
      color: '#1abc9c'
    },
    {
      value: 50,
      color: '#ecf0f1'
    }
  ];
  myDoughnut = new Chart(document.getElementById('photoshop').getContext('2d')).Doughnut(doughnutData);

  doughnutData = [
    {
      value: 60,
      color: '#1abc9c'
    },
    {
      value: 40,
      color: '#ecf0f1'
    }
  ];
  myDoughnut = new Chart(document.getElementById('laravel').getContext('2d')).Doughnut(doughnutData);

  if($(window).width()>975){
    $('.demo .work-all').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: $('.demo .prev'),
      nextArrow: $('.demo .next')
    });
  }
  else{
    $('.demo .work-all').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      variableWidth: true,
    });
  }

  $('.menu-about').click(function() {
    $('html,body').animate({scrollTop:$('#about').offset().top-60},800);
  });
  $('.menu-resume').click(function() {
    $('html,body').animate({scrollTop:$('#resume').offset().top-60},800);
  });
  $('.menu-work').click(function() {
    $('html,body').animate({scrollTop:$('#work').offset().top-60},800);
  });
  $('.menu-contact').click(function() {
    $('html,body').animate({scrollTop:$('#contact').offset().top-60},800);
  });
  $('.go-top').click(function() {
    $('html,body').animate({scrollTop:0},800);
  });

  $(window).scroll(function(){
    if($(this).scrollTop()>1){
      $('.go-top').fadeIn();
    } else {
      $('.go-top').fadeOut();
    }
  });

});