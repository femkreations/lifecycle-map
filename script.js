// JavaScript Document
$(document).ready(function() {
	$("p.image a").addClass("off");					   
	
	$("p.image a").hover(
		function(){
			$("p.image a").not(this).animate({
				opacity:0.5	
			},200, 'linear');
			$(this).animate({
				opacity:1,
				"top": "+=2px",
				easing: "easein"
			},300, 'linear', "slow");
			
		},
		function(){
			$("p.image a").animate({
				opacity:1	
			},0);
			$(this).animate({
				"top": "-=2px"
			},300, 'linear', "slow");

		}
	); 
	
});


