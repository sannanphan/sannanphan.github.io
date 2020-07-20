// JavaScript Document
/*
$("div2").hide();
$("html").mousemove(function( event ) {
    $("div2").fadeIn(3900); 
});    
*/

if ($(window).width() > 480) {
    $("div2").hide();
    var fade_in = false;
    /*
    $(document).scroll(function () {
        var fade_in = true;
    });
    */
    $("html").mousemove(function(){
        var fade_in = true;
    });
    if (fade_in = true){
        $("div2").fadeIn(3000); 
    }
}
