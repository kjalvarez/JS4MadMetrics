

 $(document).on('ready', function(){

	var timeArrived = new Date();


	$('#button').on('click', function(){
		var now = new Date();
		var timeAmount = now-timeArrived; 
		alert("It took you "+timeAmount/1000+" seconds to click on the button.");
		var scrollAmount = $(window).scrollTop();
  		var documentHeight = $(document).height();
  		var scrollPercent = (scrollAmount/documentHeight) * 100; 
    	alert("You have viewed this percentage of the page: "+scrollPercent+"\n"+
    		  "You have scrolled this distance through the page, in pixels: "+scrollAmount);
	})

 });

