$(document).ready(function() {
    $('.action img').on('click', function() {
        $('#overlay').addClass('active').fadeIn('1000');
    });

    $('#overlay .close').on('click', function() {
        $('#overlay').fadeOut('1000').removeClass('active');
    });
});