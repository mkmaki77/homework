$(document).ready(function () {
  $('.menu_down').click(function(event) {
    /* Act on the event */
    event.preventDefault();
    $('.menu_down').toggleClass('active');
    $('.menu_open').slideToggle();
  });
});