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
        $("div2").delay(1500).fadeIn(3000); 
    };
    $("html").mousemove(function(){
        $("div2").delay(1500).fadeIn(3000); 
    });
}
