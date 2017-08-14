$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});


  function myFunction() {
    document.getElementById("menu").style.display = "none";
}
function myFunction1() {
    document.getElementById("menu").style.display = "block";
}
