
function playMusic() {
    $(".muisc_btn").removeClass('music_stop');
    document.getElementById('h5_music').play();
}

var mySwipe;

$(function () {
    mySwipe = Swipe($('#slider').get(0), $('#slider').get(0), {
		continuous : false,
        speed: 100,
		callback : function( index ){
			$('.page_content').removeClass("css3");
			$('.page_content').eq(index).addClass("css3");
		}
    });
	

    var audioEle = document.getElementById('h5_music');
    var mbtn = $(".muisc_btn");
    playMusic();

    mbtn.on("touchstart", function () {
        if ( mbtn.hasClass('music_stop') ) {
            mbtn.removeClass('music_stop');
            audioEle.play();
        } else {
            mbtn.addClass('music_stop');
            audioEle.pause();
        }
    });

    $('#slider').on('touchstart.fstSet', function() {
        if (audioEle && audioEle.paused ) {
            mbtn.removeClass('music_stop');
            audioEle.play();
            $('#slider').off('touchstart.fstSet');
        }
    });

   
});


