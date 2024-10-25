$(document).ready(function(){
    $(".silder").owlCarousel({
        items: 1, 
        autoplay: true,
    });
    $(".product-slider").owlCarousel({
        items: 7, 
        loop:true,
        margin: 50
    });
    $(".popular-products-slider ").owlCarousel({
        items: 5, 
        loop:true,
        margin: 20
    });
  });