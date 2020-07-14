// JavaScript Document
/*
$("nav").show();

$("html").mousemove(function( event ){
    $("nav").fadeOut(2300);
}); */
$("nav").show();
$("nav").fadeOut(4000);
$(function () {
  $(document).scroll(function () {
  $("nav").fadeOut(4000);
  });
});