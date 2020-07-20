// JavaScript Document
/*
$("nav").show();

$("html").mousemove(function( event ){
    $("nav").fadeOut(2300);
}); */

$("nav").show();
var fade = false;
$(document).scroll(function() {
    var fade = true;
});
$("html").mousemove(function(){
    var fade = true;
});

//$("nav").fadeOut(4000);
if (fade = true) {
  $("nav").fadeOut(3000);
}