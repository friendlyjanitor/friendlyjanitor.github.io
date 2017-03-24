

/* adding this function so that when the screen size changes it addes the data target and toggle because it was breaking the nav bar before */
$(window).on("resize", function () {
  if($(window).width() <= 768) {
    $(".nav-li").attr({
      'data-toggle': 'collapse',
      'data-target': '#navbar'
    });
  } else {
    $(".nav-li").removeAttr('data-toggle data-target');
  }
});



