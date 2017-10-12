$(function() {
  
  
  // init work items
  setWorkItemHeight()
  
  // tilt-js
  $('.work-item').tilt({
    glare:true,
    maxGlare: .2,
    perspective: 1e3,
    maxTilt: 4,
    scale: 1.03,
    speed: 300
  });
  
  
})


// resize functions
$(window).resize(function() {
  setWorkItemHeight();
});


//set the height of the work tiles to be rectangularly proportionate
function setWorkItemHeight() {
  $('.work-item').height($('.work-item').width() * 0.625)
}