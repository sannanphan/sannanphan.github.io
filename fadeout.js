// JavaScript Document
/*
$("nav").show();

$("html").mousemove(function( event ){
    $("nav").fadeOut(2300);
}); */


$("nav").show();
window.onscroll = function () { 
  $("nav").fadeOut(4000);
};


$("html").mousemove(function(){
  $("nav").fadeOut(4000);
});
