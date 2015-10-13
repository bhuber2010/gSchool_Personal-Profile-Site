$(document).ready(function() {
  // $(".section").mouseenter(function() {
  //   $(this).hide(500);
  // });
  // $(".section").mouseleave(function() {
  //   $(this).show(500);
  // })

  $(".section").effect("slide");

  $(".section").hover(
    function(){
      $(this).addClass("highlight");
    },
    function() {
      $(this).removeClass("highlight");
    }
  );
  // $(".section").mouseenter(function(){
  //   $(this).effect("bounce", {times: 1}, 100);
  // });

  $(".section").click(function(){
    $(this).effect("bounce", {times: 1}, 400);
  });

});
