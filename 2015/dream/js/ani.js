$('.btn_follow').on('touchstart', function() {
        if ( $(".shareFr").is(":hidden") ) {
          window.location.href= 'http://mp.weixin.qq.com/s?__biz=MjM5MjA3MDE4MA==&mid=208570094&idx=1&sn=35001bdfa9e1620055a4d14ede6dc700#rd';
        }
    });
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
			setTimeout( function(){
				var imgObj = $(".two_txt img"),
					src = imgObj.attr('src');
				imgObj.removeAttr('src');
				//imgObj.attr('src', "http://www.html5tricks.com/wp-content/uploads/2014/05/css3-image-fuzzy.jpg");
				$(".two_txt").append("<img src='images/txt_02.png' />");
			}, 0);
			if( index==17){
				 $("#btn_share").click(function (e) {
					  if ( $(".shareFr").is(":hidden") ) {
						e.stopPropagation();
						$(".shareFr").show(300);
						$("#fuhao").hide();
					  }
					  else{
					$(".shareFr").hide();
					$("#fuhao").show();
					}
				});
				
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
            var shareFr = $(".shareFr");
            shareFr.on("touchstart", function () {
                var thisH = $(this).height();
				$("#fuhao").show();
                $(this).animate({top: thisH + "px"}, 500, function () {
                    $(this).hide().css({top: '0px'});
                });
            })
