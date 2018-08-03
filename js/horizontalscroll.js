  $("body").mousewheel(function(event, delta) {
    scrollHorizontally(90*delta)
    console.log("scroll?")
  });

  function scrollHorizontally(amount) {
    var newSpot = $("#scroll-area").offset().left+(amount)
    if (newSpot>0) {
      newSpot = 0
    }
    $("#scroll-area").animate({
      left: newSpot+'px',
    },1);
  }