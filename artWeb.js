/*JS for the Modal on the Main Page*/
/*document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, options);
  });*/

/*JS for the Responsive Navbar */
document.addEventListener('DOMContentLoaded', function() {
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, null);
});

/*JS for the Carousel on the gallery page*/
document.addEventListener('DOMContentLoaded', function() {
    const elems = document.querySelectorAll('.carousel');
    const numVisible = 5;
    M.Carousel.init(numVisible);
});

$(document).ready(function() {
    $('.modal').modal();
});