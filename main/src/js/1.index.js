var videos = [{
    "0": "https://player.vimeo.com/video/229956665",
    "1": "https://player.vimeo.com/video/229956812",
    "2": "https://player.vimeo.com/video/230097699",
    "3": "https://player.vimeo.com/video/230098111",
    "4": "https://player.vimeo.com/video/230098481",
    "5": "https://player.vimeo.com/video/230098776",
    "6": "https://player.vimeo.com/video/230099012",
    "7": "https://player.vimeo.com/video/230099214",
    "8": "https://player.vimeo.com/video/230099458",
    "9": "https://player.vimeo.com/video/230099591",
    "10": "https://player.vimeo.com/video/230099951",
    "11": "https://player.vimeo.com/video/230100319",
    "12": "https://player.vimeo.com/video/230100740",
    "13": "https://player.vimeo.com/video/230101080"
}];

var images = [
    "https://daks2k3a4ib2z.cloudfront.net/598cdaea153f32000197f974/599bbb04ab717100012e499d_Video-Template.jpg", "https://daks2k3a4ib2z.cloudfront.net/598cdaea153f32000197f974/599bbb04ab717100012e499d_Video-Template.jpg", "https://daks2k3a4ib2z.cloudfront.net/598cdaea153f32000197f974/599bbb04ab717100012e499d_Video-Template.jpg", "https://daks2k3a4ib2z.cloudfront.net/598cdaea153f32000197f974/599bbb04ab717100012e499d_Video-Template.jpg", "https://daks2k3a4ib2z.cloudfront.net/598cdaea153f32000197f974/599bbb04ab717100012e499d_Video-Template.jpg", "https://daks2k3a4ib2z.cloudfront.net/598cdaea153f32000197f974/599bbb04ab717100012e499d_Video-Template.jpg", "https://daks2k3a4ib2z.cloudfront.net/598cdaea153f32000197f974/599bbb04ab717100012e499d_Video-Template.jpg", "https://daks2k3a4ib2z.cloudfront.net/598cdaea153f32000197f974/599bbb04ab717100012e499d_Video-Template.jpg", "https://daks2k3a4ib2z.cloudfront.net/598cdaea153f32000197f974/599bbb04ab717100012e499d_Video-Template.jpg", "https://daks2k3a4ib2z.cloudfront.net/598cdaea153f32000197f974/599bbb04ab717100012e499d_Video-Template.jpg", "https://daks2k3a4ib2z.cloudfront.net/598cdaea153f32000197f974/599bbb04ab717100012e499d_Video-Template.jpg", "https://daks2k3a4ib2z.cloudfront.net/598cdaea153f32000197f974/599bbb04ab717100012e499d_Video-Template.jpg", "https://daks2k3a4ib2z.cloudfront.net/598cdaea153f32000197f974/599bbb04ab717100012e499d_Video-Template.jpg", "https://daks2k3a4ib2z.cloudfront.net/598cdaea153f32000197f974/599bbb04ab717100012e499d_Video-Template.jpg"
];

$(document).ready(function() {
    $(images).each(function(key, item) {
        var template = '<div class="action" data-id="' + key + '"><img src="' + item + '" alt=""></div>';
        $('.panelWrap').append(template);
    });
    var video = videos[0][0];
    //setVideo(video);

    function setVideo(video) {
        var iframe = '<iframe src="' + video + '"></iframe>';
        $('#overlay').append(iframe);
    }
});