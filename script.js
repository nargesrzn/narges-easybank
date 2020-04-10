$(Document).ready(function () {
  $("#menu-icon").click(function () {
    if ($(".menu-wrapper").css("display") == "none") {
      $(".menu-wrapper").css("display", "block");
      $("#menu-icon").attr("src", "./images/icon-close.svg");
    } else {
      $(".menu-wrapper").css("display", "none");
      $("#menu-icon").attr("src", "./images/icon-hamburger.svg");
    }
  });
});
