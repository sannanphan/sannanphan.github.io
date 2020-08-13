// JavaScript Document
/*
$("div2").hide();
$("html").mousemove(function( event ) {
    $("div2").fadeIn(3900); 
});    
*/

if ($(window).width() > 480) {
    $("div2").hide();
    window.onscroll = function () {  
        $("div2").delay(800).fadeIn(3500); 
    };
    $("html").mousemove(function(){
        $("div2").delay(800).fadeIn(3500); 
    });
}
