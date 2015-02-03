
function playMusic() {
    $(".muisc_btn").removeClass('music_stop');
    document.getElementById('h5_music').play();
}
var mySwipe;
				
    mySwipe = Swipe($('#slider').get(0), $('#slider').get(0), {
		continuous : false,
        speed: 100,
		callback : function( index ){
			$('.page_content').removeClass("css3");
			$('.page_content').eq(index).addClass("css3");
			if( index==18)
			    {

					 $(".btn_share").click(function () {
						$(".shareFr").show(300);
						$("#fuhao").hide();
					});
					
				}
				else{
					$(".shareFr").hide(300);
					$("#fuhao").show();
					}
	
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
	
	
	
