$(function() {

	// Yandex.Metrika counter
		!function(e,t,a){(t[a]=t[a]||[]).push(function(){try{t.yaCounter35150355=new Ya.Metrika({id:35150355,clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0,trackHash:!0})}catch(e){}});var c=e.getElementsByTagName("script")[0],n=e.createElement("script"),r=function(){c.parentNode.insertBefore(n,c)};n.type="text/javascript",n.async=!0,n.src="https://mc.yandex.ru/metrika/watch.js","[object Opera]"==t.opera?e.addEventListener("DOMContentLoaded",r,!1):r()}(document,window,"yandex_metrika_callbacks");


	//SVG Fallback
	Modernizr.svg||$("img[src*='svg']").attr("src",function(){return $(this).attr("src").replace(".svg",".png")});


	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function(){var a=$(this);return $.ajax({type:"POST",url:"mail.php",data:a.serialize()}).done(function(){alert("Thank you!"),setTimeout(function(){a.trigger("reset")},1e3)}),!1});


	$("img, a").on("dragstart",function(a){a.preventDefault()});

	// mmenu
	$("#hidden_mnu").mmenu({
		extensions : [ 'widescreen', 'theme-dark', "effect-menu-slide", "effect-listitems-slide", 'pagedim-black', "pageshadow" ],
		navbar: {
			title: "Меню"
		},
		"counters": true,
		"iconPanels": true,
		"navbars": [
		{
			"position": "bottom",
			"content": [
			"<a class='fa fa-envelope' href='mailto:info@the-blacksmith.ru'></a>"
			]
		}
		]
	});

	// toogle-mnu
	$(".toggle-mnu").click(function() {
		$(this).addClass("on");
		});


	// Magnific popup zoom dialog
	$(".popup-with-zoom-anim").magnificPopup({type:"inline",fixedContentPos:!1,fixedBgPos:!0,overflowY:"auto",closeBtnInside:!0,preloader:!1,midClick:!0,removalDelay:300,mainClass:"my-mfp-zoom-in"});


	// Magnific popup zoom gallery
	$(document).ready(function(){$(".zoom_gallery").magnificPopup({delegate:"a",type:"image",closeOnContentClick:!1,closeBtnInside:!1,mainClass:"mfp-with-zoom mfp-img-mobile",image:{verticalFit:!0,titleSrc:function(a){}},gallery:{enabled:!0},zoom:{enabled:!0,duration:300,opener:function(a){return a.find("img")}}})});

	// imagefill.js
	$('.img_souvenirs').imagefill(); 

	// pjax
		$(document).pjax("a.logo, .mnu_left a", ".pjax_container", {
				fragment: ".pjax_container"
		}), $(".pjax_container").on("pjax:success", function() {
				$.pjax({
						url: window.location.href,
						container: ".box-mnu",
						fragment: ".box-mnu"
				}),
				$(document).ready(function(){$(".zoom_gallery").magnificPopup({delegate:"a",type:"image",closeOnContentClick:!1,closeBtnInside:!1,mainClass:"mfp-with-zoom mfp-img-mobile",image:{verticalFit:!0,titleSrc:function(a){}},gallery:{enabled:!0},zoom:{enabled:!0,duration:300,opener:function(a){return a.find("img")}}})});
				$(".popup-with-zoom-anim").magnificPopup({
						type: "inline",
						fixedContentPos: !1,
						fixedBgPos: !0,
						overflowY: "auto",
						closeBtnInside: !0,
						preloader: !1,
						midClick: !0,
						removalDelay: 300,
						mainClass: "my-mfp-zoom-in"
				}),
				// imagefill.js
				$('.img_souvenirs').imagefill(); 
				// Yandex.Metrika counter
				!function(e,t,a){(t[a]=t[a]||[]).push(function(){try{t.yaCounter35150355=new Ya.Metrika({id:35150355,clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0,trackHash:!0})}catch(e){}});var c=e.getElementsByTagName("script")[0],n=e.createElement("script"),r=function(){c.parentNode.insertBefore(n,c)};n.type="text/javascript",n.async=!0,n.src="https://mc.yandex.ru/metrika/watch.js","[object Opera]"==t.opera?e.addEventListener("DOMContentLoaded",r,!1):r()}(document,window,"yandex_metrika_callbacks");

				console.log("Good")
		});


	// YouTube-Video-BG
	$(document).ready(function(){var a=!1;"none"==$(".player").css("display")&&(a=!0),1==a?$(".big_background").addClass("big-background_default_image"):$(".player").mb_YTPlayer()});

});