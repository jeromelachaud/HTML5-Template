
$(document).ready(function(){

	var BillHeight = $('.billboard').height() / 2;

	$(window).scroll(function(){
		if ($(window).scrollTop() < BillHeight) {
	    	$( "header.fixed_nav" ).stop().animate({
	    		marginTop : '-81px'
			 }, 200);

			console.log($(window).scrollTop());

	    } else {
	    	$( "header.fixed_nav" ).stop().animate({
	    		marginTop : 0
			 }, 200);
	    }

	});

    /*  Testimonials Slider  */
	$('#tslider').carouFredSel({
            circular : true,
            infinite: false,
            responsive : true,
            scroll : {
                items : 1,
                fx : "fade"
            },
            pagination: {
				container:	"#t_navigation",
				anchorBuilder:	function(nr){
					return '<a href="#'+nr+'"></a>';
				}
			}
    });


    /*  hide-show mobile menu  */
    $("#menu_icon").click(function(){
        $("#nav_menu").toggleClass("show_menu");
        return false;
    });

});



