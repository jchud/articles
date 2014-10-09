$(document).ready(function(){

var originalContent;
$('ul').addClass('gridstyle');

originalContent = $('#everything').clone();
        
$(".gridButton").click(function(){
	

	$('body').html(originalContent);
	$('.gridButton').hide();
	$('.slideShow').show();
	
	$(".slideShow").click(function(){

	$('body').html(secondContent);
	location.reload();

	

});

 
});


	   
	$('.bxslider').bxSlider({
  nextSelector: '#slider-next',
  prevSelector: '#slider-prev',
  nextText: '<button><span class="bottomArrows">&gt;</span></button>',
  prevText: '<button><span class="bottomArrows">&lt;</span></button>'
});

var secondContent;
secondContent = $('#everything').clone();

  }); 


