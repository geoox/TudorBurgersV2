$('document').ready(function(){
    $('.carousel').carousel({
        interval: 10000
      })
})

$("#mob-instagram-nav").on('click', function(e) {
    $('html, body').animate({
        scrollTop: $("#visit-card").offset().top
    }, 500);
});

$("#mob-about-us-nav").on('click', function(e) {
    $('html, body').animate({
        scrollTop: $("#about-us").offset().top
    }, 900);
});


$("#mob-locations-nav").on('click', function(e) {
    $('html, body').animate({
        scrollTop: $("#locations").offset().top
    }, 900);
});

$("#mob-franchise-nav").on('click', function(e) {
    $('html, body').animate({
        scrollTop: $("#franchise").offset().top
    }, 900);
});

$("#mob-menu-nav").on('click', function(e) {
    $('html, body').animate({
        scrollTop: $("#menus").offset().top
    }, 900);
});

$("#visit-card-nav").on('click', function(e) {
    $('html, body').animate({
        scrollTop: $("#visit-card").offset().top
    }, 900);
});

$("#about-us-nav").on('click', function(e) {
    $('html, body').animate({
        scrollTop: $("#about-us").offset().top
    }, 900);
});

$("#locations-nav").on('click', function(e) {
    $('html, body').animate({
        scrollTop: $("#locations").offset().top
    }, 900);
});

$("#franchise-nav").on('click', function(e) {
    $('html, body').animate({
        scrollTop: $("#franchise").offset().top
    }, 900);
});

$("#menus-nav").on('click', function(e) {
    $('html, body').animate({
        scrollTop: $("#menus").offset().top
    }, 900);
});


// When the user clicks on the button, scroll to the top of the document
function topFunction() {

    $('html, body').animate({
        scrollTop: $("body").offset().top
    }, 900);
}



