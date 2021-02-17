document.addEventListener('DOMContentLoaded', function() {
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, null);
});

document.addEventListener('DOMContentLoaded', function() {
    const elems = document.querySelectorAll('.carousel');
    const numVisible = 5;
    M.Carousel.init(numVisible);
});

$(document).ready(function() {
    $('.modal').modal();
});