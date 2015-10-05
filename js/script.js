$(document).ready(function() {
  // $(".section").mouseenter(function() {
  //   $(this).hide(500);
  // });
  // $(".section").mouseleave(function() {
  //   $(this).show(500);
  // })

  $(".section").hover(
    function(){
      $(this).addClass("highlight");
    },
    function() {
      $(this).removeClass("highlight");
    }
  );

});
