$('document').ready(function(){
    $('.carousel').carousel({
        interval: 7000
      })
})


$("#mob-instagram-nav").on('click', function(e) {
    $('html, body').animate({
        scrollTop: $("#instagram").offset().top
    }, 500,);
});

$("#visit-card-nav").on('click', function(e) {
    $('html, body').animate({
        scrollTop: $("#instagram").offset().top
    }, 500,);
});




