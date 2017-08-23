$(document).ready(function() {
    $('.action img').on('click', function() {
        $item = $(this);
        var id = $item.parent().data('id');
        var video = videos[0][id];
        var iframe = '<iframe src="' + video + '"></iframe>';
        $('#overlay').append(iframe);
        $('#overlay').addClass('active').fadeIn('1000');
    });

    $('#overlay .close').on('click', function() {
        $('#overlay').fadeOut('1000').removeClass('active');
    });
});