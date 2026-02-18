/*
 * @author  Mudit Ameta
 * @license https://github.com/zeusdeux/isInViewport/blob/master/license.md MIT
 */
!function(a){function b(b){var c,d=a("<div></div>").css({width:"100%"});return b.append(d),c=b.width()-d.width(),d.remove(),c}function c(d,e){var f=d.getBoundingClientRect(),g=f.top,h=f.bottom,i=f.left,j=f.right,k=a.extend({tolerance:0,viewport:window},e),l=!1,m=k.viewport.get?k.viewport:a(k.viewport),n=m.height(),o=m.width(),p=m.get(0).toString();if(m.length||console.warn("isInViewport: The viewport selector you have provided matches no element on page."),"[object Window]"!==p&&"[object DOMWindow]"!==p){var q=m.offset();g-=q.top,h-=q.top,i-=q.left,j=i+o,c.scrollBarWidth=c.scrollBarWidth||b(m),o-=c.scrollBarWidth}return k.tolerance=Math.round(parseFloat(k.tolerance)),isNaN(k.tolerance)?k.tolerance=0:k.tolerance<0&&(k.tolerance=n+k.tolerance),Math.abs(i)>=o?l:l=k.tolerance?g<=k.tolerance&&h>=k.tolerance?!0:!1:h>0&&n>=g?!0:!1}a.fn.do=function(a){return a.apply(this),this},a.extend(a.expr[":"],{"in-viewport":function(a,b,d){if(d[3]){var e=d[3].split(",");return 1===e.length&&isNaN(e[0])&&(e[1]=e[0],e[0]=void 0),c(a,{tolerance:e[0]?e[0].trim():void 0,viewport:e[1]?e[1].trim():void 0})}return c(a)}})}(jQuery);



$(document).foundation();


$(document).ready(function(){
	$('html, body').stop().animate({
	    scrollTop: 0
	}, 700);
	setTimeout(function(){
		$('#video_background').animate({
			opacity: 1
		}, 2000);
	},2000);

	var contactSection = $('footer').height(),
		documentHeight = $(window).innerHeight();
	if(documentHeight > contactSection)	{
		$('footer').height(documentHeight - 190);
	}
	

	var header = $('.header');

	$(window).scroll(function() {
		var windscroll = $(window).scrollTop();
	    if($(this).scrollTop() > 200) {
	     	$(header).addClass('scrolled', 200);
	    } else {
	     	$(header).removeClass('scrolled', 200);
	    }
	    $( '.welcome:in-viewport(0)' ).addClass('in', function(){
	    	$('.main-menu a.active').removeClass('active');
	    	$('#video_background').get(0).play();
	    });
		$( '.web-services:in-viewport(-200)' ).addClass('in', function(){
			$('.main-menu a.active').removeClass('active');
			$('.main-menu a[rel="web-services"]').addClass('active');
			$('#video_background').get(0).pause();
		});
		$( '.portfolio-item:in-viewport(-300)' ).addClass('in', function(){
			$('.main-menu a.active').removeClass('active');
			$('.main-menu a[rel="portfolio"]').addClass('active');
			$('#video_background').get(0).pause();
		});
		$( '#contact:in-viewport(-400)' ).addClass('in', function(){
			$('.main-menu a.active').removeClass('active');
			$('.main-menu a[rel="contact"]').addClass('active');
			$('#video_background').get(0).pause();
		});

		
	});

	$(".anchor").on('click',function (e) {
		e.preventDefault();
	    var scroltothis = $(this).attr('rel');
		    $('html, body').stop().animate({
	        scrollTop: $("#" + scroltothis).offset().top - 70
	    }, 700);
	});


	/* Show the chevron after 1 sec */
	
	setTimeout(function(){
		$('.chevron-down').addClass('in', 1000);
	}, 1000);

	$( '.welcome:in-viewport(0)' ).addClass('in');
	
	
});