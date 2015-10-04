$(document).ready(function() {
  $(".section").mouseenter(function() {
    $(this).hide(500);
  });
  $(".section").mouseleave(function() {
    $(this).show(500);
  })
});
