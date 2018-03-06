define(function(require, exports, module){
	var $ = require('jquery');
    // var Events = require('events');
    // require("checkform");

	;(function(){

			var $this,$ind,$li = $('#tab > li'),$div = $('#i-content > div');
	$('.tab-two-level a').click(function(){
		var $this = $(this);
		var $t = $this.index();
		for(var i=0;i< $('.tab-two-level a').length;i++){
			$(" .layout"+i).hide();
			$('.tab-two-level a').eq(i).removeClass('current');
		}
		var num = $(this).parents('li').index();
		$("#tab li").eq(num).find('.tab-two-level a').eq($t).addClass('current');
		$("#i-content").find('#part'+num).show();
		$("#i-content").find('#part'+num).find('.layout'+$t).show();
		var loop = $('.swiper-slide').length > 1,swipers;
	        swipers = new Swiper('.swiper-container', {
	        pagination: '.swiper-pagecount',
	        autoplay: 1000,
	        stopPropagation: true,
	        loop:loop
	    });
	})
	$(".i-ullist li").click(function(event){
		$this = $(this);
		$ind = $this.index();
		var id = $this.parent().attr('id');
		window.location.href="./category/sub-"+id+".html?"+$ind+"";
	})
	
	$li.click(function(){
		var $this = $(this);
		var $t = $this.index();
		$li.removeClass('current');
		$this.addClass('current');
		$div.css('display','none');
		$div.eq($t).css('display','block');
	})
	locationIndexDemo();

	})();	



function locationIndexDemo(){
	var url = window.location.search;
	if (url.indexOf("?") != -1) {
		var str = url.substr(1);
		var num =parseInt(str);
		$('#tab li').eq(num).addClass('current');
		$('#i-content > div').eq(num).show();
	}
	else{
		$('#tab li').eq(0).addClass('current');
		$('#i-content > div').eq(0).show();
	}
	
}
$(".toggleLi").click(function(){
	$(this).siblings('div').toggle();
})
$('.tab_service_detail li').click(function (){
	var _this =$(this);
	$('.tab_service_detail li').removeClass('on');
	_this.addClass('on');
	$('.tab_service_detail ').siblings('section').hide();
	$($(_this.parent().siblings('section')).eq(_this.index())).show();
})


/*复制代码，并弹出层*/
$('.i-copy').on('click', function(c){
    var $target = $(c.currentTarget);
    var $textarea = $target.parents('.i-code').find('textarea');
    var Text = $textarea[0];
	Text.select();
    document.execCommand('Copy');//复制到剪贴板
	$('.i-popup').addClass('animated a-fadeinB').show();//添加动画效果并显示
	setTimeout(function(){
		$('.i-popup').removeClass("animated a-fadeinB").fadeOut();	//移除动画效果以3s的速度淡出
	},3000)
    //alert('已复制好，快去粘贴吧！');
})
/*返回到上一页*/
$('.icon-return').click(function(){
		window.history.go(-1);
})


});