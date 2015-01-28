
function playMusic() {
    $(".muisc_btn").removeClass('music_stop');
    document.getElementById('weixin_music').play();
}

$(function () {
    var startSlide =0,
        mySwipe = new Swipe($('#slider').get(0), $(".swipe-wrap").get(0), {
        continuous: false,
        speed: 100,
        startSlide :startSlide,
        callback: function (index, elem) {
            pageControl(index, elem);
        }
    });

    var audioEle = document.getElementById('weixin_music');
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
        if ( audioEle.paused ) {
            mbtn.removeClass('music_stop');
            audioEle.play();
            $('#slider').off('touchstart.fstSet');
        }
    });

    var timeOut1, timeOut2;

    function pageControl(index, el) {
        /*pageone*/
        $('.two_txt').toggleClass('txt_box', index == 1);
    }

    pageControl(startSlide);

    $(".p11-scan").on("touchstart", function () {
        $("#figure").show(300)
    })

    $(".guanzhu span").on("touchstart", function () {
        $(".guanzhu").hide(300)
    })
});

var descContent = 'Hi,我是您的朋友土巴兔，您最贴心的装修顾问，和我一起踏上装修之旅吧！',
    shareTitle = '太棒啦！我找到一个超赞的私人装修顾问',
    appid = '',
    imgUrl = 'http://img.to8to.com/wap/weixin/wexin_rabit_share.jpg',
    lineLink = location.href;

function shareFriend() {
    WeixinJSBridge.invoke('sendAppMessage',{
        "appid": appid,
        "img_url": imgUrl,
        "img_width": "640",
        "img_height": "640",
        "link": lineLink,
        "desc": descContent,
        "title": shareTitle
    }, function(res) {
        _report('send_msg', res.err_msg);
    })
}
function shareTimeline() {
    WeixinJSBridge.invoke('shareTimeline',{
        "img_url": imgUrl,
        "img_width": "640",
        "img_height": "640",
        "link": lineLink,
        "desc": descContent,
        "title": shareTitle
    }, function(res) {
        _report('timeline', res.err_msg);
    });
}
function shareWeibo() {
    WeixinJSBridge.invoke('shareWeibo',{
        "content": descContent,
        "url": lineLink
    }, function(res) {
        _report('weibo', res.err_msg);
    });
}

// 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {

    // 发送给好友
    WeixinJSBridge.on('menu:share:appmessage', function (argv) {
        shareFriend();
    });

    // 分享到朋友圈
    WeixinJSBridge.on('menu:share:timeline', function (argv) {
        shareTimeline();
    });

    // 分享到微博
    WeixinJSBridge.on('menu:share:weibo', function (argv) {
        shareWeibo();
    });

}, false);
