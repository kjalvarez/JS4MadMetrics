// $(function () {
// 	alert("it works!");
// });

// $(document).scroll(function(e){
 
//     alert("You're scrolling!")
 
// });

$(function () {
  var scrollAmount = $(window).scrollTop();
  var documentHeight = $(document).height();
  var scrollPercent = (scrollAmount/documentHeight) * 100;
  $("#button").click(function(){
    alert(scrollPercent)
  });

});