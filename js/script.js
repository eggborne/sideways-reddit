$("body").mousewheel(function(event,delta) {
  scrollHorizontally(90*delta)
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
function slideLettersIn() {
  document.getElementById("logo").style.left = "70px"
  document.getElementById("logo").style.opacity = 1
    
    setTimeout(function(){
      var letterArray = document.getElementsByClassName("logo-letter")
      for (var i=0;i<letterArray.length;i++) {
        
        var letter = letterArray[i]
        letter.style.transform = "rotate(0)"
        letter.style.margin = "5px 0px 0px 0px"
      }
    },1000)
}
function createPostCard(redditArray) {

  // this needs to be filled with the Reddit info and then added to scroll-area.innerHTML

  // <div class="post panel panel-success">
  //   <div class="panel-heading">
  //     <h2 class="panel-title">
  //       <a href="#">Post title. Apples oranges lemons bananas potatos cucumbers?</a>
  //     </h2>
  //   </div>
  //   <div class="panel-body">
  //     Post body. Apples oranges lemons bananas cucumbers? Apples oranges lemons bananas potatos cucumbers Apples oranges lemons bananas cucumbers Apples oranges lemons bananas cucumbers Apples oranges lemons bananas cucumbers!
  //   </div>
  //   <div class="panel-footer">
  //     <div class="row">
  //       <div class="col-md-4"><span style="float:left"><a href="#">by u/Username</a></span></div>
  //       <div class="col-md-5"></div>
  //       <div class="col-md-3"><span style="float:right"><a href="#">in r/Subreddit</a></span></div>
  //     </div>
  //   </div>
  // </div>

}