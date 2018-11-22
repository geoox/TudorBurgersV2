$('document').ready(function(){
    $('.carousel').carousel({
        interval: 2500
      })
})

/*Sticky navbar*/

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

for(let i=0; i<=9;i++){
    $("#nav"+i).on('click', function(e) {
        e.preventDefault();

        $( '#navbar .navbar' ).find( 'a.active' ).removeClass( 'active' );
        if(i!=0){
            $(this).addClass( "active" );
        }
        

        $('html, body').animate({
            scrollTop: $("#section"+i).offset().top -66
        }, 500,);
    });
}


